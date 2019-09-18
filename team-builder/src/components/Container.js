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

export default Container;