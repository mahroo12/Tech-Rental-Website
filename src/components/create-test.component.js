import React from "react"


const Test = ({setLoginUser}) => {
    return (
        <div className="test">
            <h1>Hello test</h1>
            <div className="button" onClick={() => setLoginUser({})} >Logout</div>
        </div>
    )
}

export default Test