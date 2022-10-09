# Hypertension_Analysis_Application

Steps to run Hypertension Analysis Application in IOS Simulator.

Depending on your system, npm and expo commands may need to be places afer npx.

  In Terminal (Command Prompt for Windows) run the following lines to install dependencies.
  
    0. npm install -g react-native-cli
  
    1. npm install
  
    2. expo install
    
    or 
    
    1.1. npx npm install
    
    2.1. npx expo install
  
  If the above commands (1-2.1) FAIL, use yarn as below.
    
     1. yarn install
     
  Generate ios and android folders.
  
     3. react-native upgrade
     
     4. react-native link 
   
  To install the IOS Simulator:
   
    https://docs.expo.dev/workflow/ios-simulator/
    
  
  
  RUNNING APPLICATION
  
  After installing dependencies above - start the backend server - then run the frontend application:


  Start the backend server:
  
    1. cd backend

    2. python crud.py

  For python 3:

    2.1. python3 crud.py

  Start frontend (use seperate terminal from backend, leave backend running):
  
    3. expo start

  If the above commmand fails, try the one below

    3.1 npx expo start


  Once expo has been started:

  If browser opens to localhost - 
  
      1. select "ios simulator" on the left.

  If still in terminal
  
      2. press "i".


  Ios Simulator will start up the Hypertension Analysis Application.
    
