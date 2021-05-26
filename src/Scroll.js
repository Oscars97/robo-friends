import React from 'react'

const Scroll = (props) => {
    return (
        <div style={{borderTop: "solid 2px white", overflowY: "scroll", height: "65vh", paddingTop: "2%"}}>
            {props.children}
        </div>
    )
}

export default Scroll;
