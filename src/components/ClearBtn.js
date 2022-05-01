import React from "react";

const ClearBtn = ({buttonTapped}) => {
    return (
        <button onClick={buttonTapped} className="mh2 pa2 br4 ba bw1 b--black f4 bg-black white pointer grow dafont">Clear Cards</button>
    )
}

export default ClearBtn;