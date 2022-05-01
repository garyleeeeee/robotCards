import React from "react";

const SomeBtns = ({inputChange, addingUser, clearTapped}) => {
    return (
        <div>
            <input onChange={inputChange} className="pa2 br4 f4 mh2 dafont" type="text" placeholder="Enter a name" />
            <button onClick={addingUser} className="mh2 f4 pa2 ph2 br4 mv2 ba bw1 b--black bg-green white pointer grow dafont">Generate</button>
            <button onClick={clearTapped} className="mh2 pa2 ph2 br4 ba bw1 b--black f4 bg-red white pointer grow dafont">Clear Cards</button>
        </div>
    )
}

export default SomeBtns;