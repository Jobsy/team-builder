import React, { useState } from "react";
import uuid from "uuid";

import Form from "./Form"


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
};
