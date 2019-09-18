import React, { useState } from "react";
import uuid from "uuid";


const initialTeamList = [
        { id: uuid(), name: 'gabe' },
        { id: uuid(), name: 'luke' },
        { id: uuid(), name: 'josh' },
];

const Container = props => {

        const [teamList, setTeamList] = useState(initialTeamList)

        return (
<div>
                {
                teamList.map(teamMember => (
                        <h5 key={teamMember.id}>
                                {teamMember.name}
                          </h5>
                ))
        }
</div>
        );
}

export default Container;