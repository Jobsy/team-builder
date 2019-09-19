import React, { useState } from "react";
import uuid from "uuid";



const initialTeamList = [
  { id: uuid(), name: "gabe", email: "gabe@gmail.com", role: "UX Design" },
  { id: uuid(), name: "luke", email: "luke@gmail.com", role: "FrontEnd Engineer" },
  { id: uuid(), name: "josh", email: "josh@gmail.com", role: "BackEnd Engineer" },
];

const initialTeamForm = {
  name: '',
  email: '',
  role: '',
};

export default function Container() {

  const [teamList, setTeamList] = useState(initialTeamList);
  const [teamForm, setTeamForm] = useState(initialTeamForm);


  const onNameChange = e => {
    setTeamForm({
      name: e.target.value,
      email: teamForm.email,
      role: teamForm.role,
    })
  }

  const onEmailChange = e => {
    setTeamForm({
      name: teamForm.name,
      email: e.target.value,
      role: teamForm.role,
    })
  }

  const onRoleChange = e => {
    setTeamForm({
      name: teamForm.name,
      email: teamForm.email,
      role: e.target.value,
    })
  }

  const onFormSubmit = e => {
    e.preventDefault();
    const newTeamMember = {
      id: uuid(),
      name: teamForm.name,
      email: teamForm.email,
      role: teamForm.role,
    }

    const newTeamList = teamList.concat(newTeamMember);
    setTeamList(newTeamList);
    setTeamForm(initialTeamForm);
  };

  return (
    <div>
       
      <Form
        onNameChange={onNameChange}
        onEmailChange={onEmailChange}
        onRoleChange={onRoleChange}
        onFormSubmit={onFormSubmit}
        teamForm={teamForm}
      />
      {
        teamList.map(teamMember => (
          <h5 key={teamMember.id}>
            {teamMember.name} <br />
            {teamMember.email}<br />
            {teamMember.role}<br />
          </h5>
        ))
      }
    </div>
  );
}



function Form(props) {
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




// export default Container; 