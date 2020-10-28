import React from 'react';

const UserOutput = (props) => {
    return (
        <div>
            <p> Hello { props.userName } </p>
            <p>
                I am User-Output component
            </p>
        </div>
    )
}

export default UserOutput;