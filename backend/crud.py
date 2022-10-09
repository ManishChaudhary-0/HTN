from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
import os

app = Flask(__name__)
basedir = os.path.abspath(os.path.dirname(__file__))
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + os.path.join(basedir, 'crud.sqlite')
db = SQLAlchemy(app)
ma = Marshmallow(app)


class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True)
    email = db.Column(db.String(120), unique=True)

    firstname = db.Column(db.String(100), unique=False)
    lastname = db.Column(db.String(100), unique=False)
    password = db.Column(db.String(100), unique=False)

    def __init__(self, firstname, lastname, username, email, password):
        self.firstname = firstname
        self.lastname = lastname
        self.username = username
        self.email = email
        self.password = password


class UserSchema(ma.Schema):
    class Meta:
        # Fields to expose
        fields = ('firstname', 'lastname', 'username', 'email', 'password')


user_schema = UserSchema()
users_schema = UserSchema(many=True)


# endpoint to create new user
@app.route("/user", methods=["POST"])
def add_user():

    firstname = request.json['firstname']
    lastname = request.json["lastname"]
    username = request.json['username']
    email = request.json['email']
    password = request.json["password"]
    
    new_user = User(firstname, lastname, username, email, password)

    db.session.add(new_user)
    db.session.commit()

    return user_schema.jsonify(new_user)


# endpoint to show all users
@app.route("/user", methods=["GET"])
def get_user():
    all_users = User.query.all()
    result = users_schema.dump(all_users)
    return jsonify(result)


# endpoint to get user detail by id
@app.route("/user/<username>", methods=["GET"])
def all_users(username):
    user = User.query.get(username)
    return user_schema.jsonify(user)


# endpoint to update user
@app.route("/user/<id>", methods=["PUT"])
def user_update(id):
    user = User.query.get(id)

    firstname = request.json['firstname']
    lastname = request.json["lastname"]
    password = request.json["password"]
    username = request.json['username']
    email = request.json['email']

    user.firstname = firstname
    user.lastname = lastname
    user.password = password
    user.email = email
    user.username = username

    db.session.commit()
    return user_schema.jsonify(user)


# endpoint to delete user
@app.route("/user/<id>", methods=["DELETE"])
def user_delete(id):
    user = User.query.get(id)
    db.session.delete(user)
    db.session.commit()

    return user_schema.jsonify(user)

if __name__ == "__main__":
    from waitress import serve
    app.run(debug=True)
    serve(app, host="0.0.0.0", port=5000)

