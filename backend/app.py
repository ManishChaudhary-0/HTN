from flask import Flask

app = Flask(__name__)

@app.route("/")
def index():
    return "<h1>HI:!</h1>"

if __name__ == "__main__":
    from waitress import serve
    app.run(debug=True)
    serve(app, host="0.0.0.0", port=5000)