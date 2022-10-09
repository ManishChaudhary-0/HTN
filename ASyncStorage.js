const getUserData = async () => {

    // var firstName = '';
    // var lastName = '';
    // var email = '';
    // var password = '';
    // var username = '';

    const [firstName, setfirstName] = useState('');
    const [lastName, setlastName] = useState('');
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const [username, setusername] = useState('');

   try {
       AsyncStorage.getItem('User_FirstName')
       .then(value => {
           if (value != null){
                setfirstName(value)
                console.log("firstName", firstName)
           }
       });

       AsyncStorage.getItem("User_LastName")
       .then(value => {
           if (value != null){
               setlastName(value)
               console.log("lastName", lastName)
           }
       });

       AsyncStorage.getItem("User_Username")
       .then(value => {
           if (value != null){
                setusername(value)
                console.log("username", username)
           }
       });

       AsyncStorage.getItem("User_Email")
       .then(value => {
           if (value != null){
                setemail(value)
                console.log("email", email)
           }
       });

       AsyncStorage.getItem("User_Password")
       .then(value => {
           if (value != null){
                setpassword(value)
                console.log("password", password)
           }
       });

   } catch (error) {
       console.log("Line 50", error)
   }

   const params = JSON.stringify({
        "firstname": firstName,
        "lastname": lastName,
        "username": username,
        "email": email,
        "password": password
    });

    console.log("PARAMS", params)

   return params;
}


















const getAS_Data = async (key) => {

   try {
       AsyncStorage.getItem(key)
       .then(value => {
           if (value != null){
                console.log(key, value)
                return value;
           }
       });

   } catch (error) {
       console.log("Line 138", error)
   }
};



























const createUser = (firstName, lastName, email, userName, password) => {
    //  const dat = getUserData();

    //  var firstName = '';
    //  var lastName = '';
    //  var email = '';
    //  var password = '';
    //  var username = '';

    // try {
    //     AsyncStorage.getItem('User_FirstName')
    //     .then(value => {
    //         if (value != null){
    //             firstName = value
    //             console.log("XXXX", firstName)
    //         }
    //     })

    //     AsyncStorage.getItem("User_LastName")
    //     .then(value => {
    //         if (value != null){
    //             lastName = value
    //             console.log("XXXX", firstName)
    //         }
    //     })

    //     AsyncStorage.getItem("User_Username")
    //     .then(value => {
    //         if (value != null){
    //             username = value
    //             console.log("XXXX", firstName)
    //         }
    //     })

    //     AsyncStorage.getItem("User_Email")
    //     .then(value => {
    //         if (value != null){
    //             email = value
    //             console.log("XXXX", firstName)
    //         }
    //     })

    //     AsyncStorage.getItem("User_Password")
    //     .then(value => {
    //         if (value != null){
    //             password = value
    //             console.log("XXXX", firstName)
    //         }
    //     })

    // } catch (error) {
    //     console.log("Line 50", error)
    // }

    // const params = JSON.stringify({
    //     "firstname": firstName
    // });
    
    const params = JSON.stringify({
      "firstname": firstName,
      "lastname": lastName,
      "username": userName,
      "email": email,
      "password": password
    });


    // var firstName =
    // await getAS_Data('User_FirstName')
    // .then(value => {
    //     firstName = value
    //     console.log("key:", value)
    // }).catch(err => console.log(err))


    console.log("DAT", params)

    return new Promise((resolve, reject) => {

      const header = getHeader();

      const url = `${api_url}/user`;
      console.log("url", url);
      const options = {
        method: "POST",
        body: params,
        headers: {
          "Content-Type": "application/json",
        },
      };
      axios
        .post(url, body, header)
        //  fetch(url,options)
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          reject(handleError(err));
        });
    });
};
