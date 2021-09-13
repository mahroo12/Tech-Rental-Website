import React, {useState} from 'react';
import axios from "axios"
import { useHistory } from "react-router-dom"
import "./login.css";

const Login = ({ setLoginUser}) => {

    const history = useHistory()

    const [ user, setUser] = useState({
        username:"",
        password:""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const login = () => {
        axios.post("http://localhost:5000/login", user)
        .then(res => {
            alert(res.data.message)
            setLoginUser(res.data.user)
            history.push("/mongodbtable")
        })
    }

    
        return(
        
            <div style={{paddingTop: '100px', paddingBottom: '120px', paddingLeft:'370px'}}>
                <div className= "login" style={{marginTop: '50px', paddingTop: '50px', marginLeft: '50px'}}>
                 <h1>Login</h1>
                <input type="text" name="username" value={user.username} onChange={handleChange}  placeholder="Enter your Username"></input>
                <input type="password" name="password"  value={user.password} onChange={handleChange} placeholder="Enter your Password" ></input>
                <div className="button" onClick= {login}>Login</div>
               </div>     
            </div>
        
    )
}
export default Login