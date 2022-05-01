import React from "react";

const Scroll = (props) => {
    return (
        <div className="mv3" style={{overflowY:"scroll", height:"75vh"}}>
            {props.children}
        </div>

    )
}

export default Scroll;