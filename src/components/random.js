import React, {useState} from "react";

// Use functional or class component based on your preference.
// Make it a default export.
export default function Random({ onSubmit }) {
    // hook 
    const [usernameInput, setUsernameInput] = useState('');
    const [passwordInput, setPasswordInput] = useState('');

    const onUsernameChange = (event) => {
        setUsernameInput(event.target.value)
    }
    const onPasswordChange = (event) => {
        setPasswordInput(event.target.value)
    }

  return (
    <div>
    <p> Username </p>
      <input
      placeholder="username"
      id="username-input"
      type="text"
      value = {usernameInput}
      onChange = {onUsernameChange} 
      />
      <p> Password </p>
      <input
      placeholder="password"
      id="password-input"
      type="password"
      value = {passwordInput}
      onChange = {onPasswordChange} 
      />
      <br/>
      <button 
        id='login-button'
        disabled={(usernameInput.length > 0 && passwordInput.length>0) ? false : true}
        onClick = {(e) => {e.preventDefault(); onSubmit(usernameInput, passwordInput)}}
      > Submit
      </button>
  </div>);
}