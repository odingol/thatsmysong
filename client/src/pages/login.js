import React from 'react'; 
import "../styles/Auth.css";


export default function Login() {
    return (
        <div className="auth-body">
            <div className="position-table">
                <div className="table">
                    <div className="style-input">
                    <h1 className= "style-title">Sign Up</h1>
                    <u></u>
                    <div className="position-text">
                        Email:<input style={{margin: "10px", padding: "3px"}}></input>
                        Password<input style={{margin: "10px", padding: "3px"}}></input>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}