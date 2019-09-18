import React, { useState } from "react";
import uuid from "uuid";


const initialTeamList = [
        { id: uuid(), name: 'gabe'},
        { id: uuid(), name: 'luke'},
        { id: uuid(), name: 'josh'},
      ];

const Container = props => {

        const [teamList, setTeamList] = useState(initialTeamList)

        return (

                <h1>Hello World</h1>

        );
}

export default Container;