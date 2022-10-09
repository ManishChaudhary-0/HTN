import axios from "axios";
import { api_url } from "./constants";
import AsyncStorage from '@react-native-async-storage/async-storage';

import React, { useState, useEffect } from 'react';

let token = "";
let headers = "";


const getHeader = () => {
    if (typeof window !== "undefined" && AsyncStorage.getItem("token")) {
      token = AsyncStorage.getItem("token");
      // console.log("token",token)
      return (headers = {
        headers: {
          //Authorization: `${token ? `Bearer ${token}` : ""}`,
         // "Content-Type": "multipart/form-data"
            "Content-Type": "application/json"
        },
      });
    }
};

const handleError = (err) => {
    console.log("erros", err);
    // return
    if (err) {
      console.log("API error", err);
    }
    return;
};

const createUser = (firstName, lastName, email, userName, password) => {
    
    const params = JSON.stringify({
      "firstname": firstName,
      "lastname": lastName,
      "username": userName,
      "email": email,
      "password": password
    });


    console.log("Params", params)

    return new Promise((resolve, reject) => {

      const header = getHeader();

      const url = 'http://localhost:5000/user';
      console.log("url2", url);
      const options = {
        method: "POST",
        body: params,
        headers: {
          "Content-Type": "application/json",
        },
      };
      axios
        .post(url, params, header)
        //  fetch(url,options)
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          reject(handleError(err));
        });
    });
};


const getAllUsers = () => {
    const url = 'http://localhost:5000/user';
    return new Promise((resolve, reject) => {
      const header = getHeader();
      axios
        .get(url, header)
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          reject(handleError(err));
        });
    });
};


const getUser_by_ID = (id) => {
    const url = `http://localhost:5000/user/${id}`;
    return new Promise((resolve, reject) => {
      const header = getHeader();
      axios
        .get(url, header)
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          reject(handleError(err));
        });
    });
};


const updateUser = (id, firstName, lastName, email, userName, password) => {
    
    const params = JSON.stringify({
      "firstname": firstName,
      "lastname": lastName,
      "username": userName,
      "email": email,
      "password": password
    });


    console.log("Params4", params)
    const url = `http://localhost:5000/user/${id}`;
    return new Promise((resolve, reject) => {
      const header = getHeader();
      console.log("url4", url);
      const options = {
        method: "PUT",
        body: params,
        headers: {
          "Content-Type": "application/json",
        },
      };
      axios
        .post(url, params, header)
        //  fetch(url,options)
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          reject(handleError(err));
        });
    });
};


export {
  createUser,
  getAllUsers,
  getUser_by_ID,
  updateUser
};
