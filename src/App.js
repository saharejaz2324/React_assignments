import './App.css';
import React, { useState } from 'react';
import UserInput from './User/UserInput/UserInput';
import UserOutput from './User/UserOutput/UserOutput';


const App = (props) => {

  const [userNameState, setUserName] = useState(
     { userName : 'Sahar' }
  )

  const setUserNameHandler = (event) => {
    setUserName({
      userName : event.target.value
    })
  }

  return (
    <div className="App">
      <UserInput 
        oldUserName = { userNameState.userName }
        updateUserName = { setUserNameHandler }>
      </UserInput>
      <UserOutput userName = { userNameState.userName }></UserOutput>      
    </div>
  );
}

export default App;
