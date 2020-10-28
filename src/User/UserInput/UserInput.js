import React from 'react';

const UserInput = (props) => {
    console.log('props input', props)
    return (
        <div>
            <input type = 'text' onChange = { props.updateUserName } value = { props.oldUserName }></input>
        </div>
    )
}

export default UserInput;