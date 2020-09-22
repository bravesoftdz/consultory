import React from 'react'

const Presentation = ({title, cssFz}) => {
    return (
        <div className={`Bg__Services Container ${cssFz}`} >
            <h1>{title}</h1>
        </div>
    );
}

export default Presentation;