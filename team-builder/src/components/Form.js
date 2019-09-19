import React from "react";


export default function Form(props) {
    const { onNameChange, onEmailChange, onRoleChange, onFormSubmit } = props;
    const { name, email, role } = props.teamForm;
  
    const isDisabled = () => {
      if (!name || !email || !role) {
        return true;
      }  
      return false;
    };
  
      return (
        <form>
          <label htmlFor="nameInput">Name</label>
          <input
            maxLength={50}
            value={name}
            onChange={onNameChange}
            id="nameInput"
            type="text"
          />
          <br />
  
          <label htmlFor="nameInput">Email</label>
          <input
            maxLength={50}
            value={email}
            onChange={onEmailChange}
            id="emailInput"
            type="email"
          />
          <br />
  
          <label htmlFor="nameInput">Role</label>
          <input
            maxLength={50}
            value={role}
            onChange={onRoleChange}
            id="roleInput"
            type="text"
          />
          <br />
  
          <button
          disabled={isDisabled()}
          onClick={onFormSubmit}>
            Submit
          </button>
  
        </form>
      )
    };
  
