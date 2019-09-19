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

const Container = props => {

  const [teamList, setTeamList] = useState(initialTeamList);
  const [teamForm, setTeamForm] = useState(initialTeamForm);


  const onNameChange = e => {
    setTeamForm ({
      name: e.target.value,
      email: teamForm.email,
      role: teamForm.role,
    })
  }

  const onEmailChange = e => {
    setTeamForm ({
      name: teamForm.name,
      email: e.target.value,
      role: teamForm.role,
    })
  }

  const onRoleChange = e => {
    setTeamForm ({
      name: teamForm.name,
      email: teamForm.email,
      role: e.target.value,
    })
  }

  const onFormSubmit = e => {
    e.prevntDefault();
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
};

return (
  <form>
    <label htmlFor="nameInput">Name</label>
    <input
      maxLength={50}
      value={name}
      onchange={onNameChange}
      id="nameInput"
      type="text"
    />

    <label htmlFor="nameInput">Email</label>
    <input
      maxLength={50}
      value={email}
      onchange={onEmailChange}
      id="emailInput"
      type="email"
    />

    <label htmlFor="nameInput">Role</label>
    <input
      maxLength={50}
      value={role}
      onchange={onRoleChange}
      id="roleInput"
      type="text"
    />

    

  </form>
)




export default Container;