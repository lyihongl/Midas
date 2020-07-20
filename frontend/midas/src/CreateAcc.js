import React, { useState, useEffect } from 'react';
import './css/create_acc.css'
import './css/main.css'
import Cookies from 'js-cookie'
import APIServer from './EndPoint'

function handleSubmit(event, username, email, password, password2) {
    var request = {
        method: "POST",
        mode: "cors",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }, body: JSON.stringify({
            username: username,
            password: password,
            email: email,
        }),
        credentials: 'include'
    }
    fetch(APIServer+"/api/create_acc", request)
        .then(
            response => {
                console.log(response);
                return response.json()
            }
        )
        .then((data) => {
            console.log(data)
            console.log("cookies", Cookies.get())
            if (Cookies.get("token") != null) {
                console.log(JSON.parse(atob(Cookies.get("token").split('.')[1])))
            } else {
            }
        }).catch(e => {
            console.log(e)
        });
    event.preventDefault()
    return "passed"
}

export default function CreateAcc() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [password2, setPassword2] = useState("")
    const [email, setEmail] = useState("")
    const [checks, setChecks] = useState("passed")
    useEffect(()=>{
        if(checks==="passed"){
            document.getElementById("pw-dont-match").style.display="none"
        }
        if(checks.includes("pw-not-match")) {
            document.getElementById("pw-dont-match").style.display="block"
        }
    })
    return (
        <div class="page-margins">
            <form class="container" onSubmit={(e) => { handleSubmit(e, username, email, password, password2) }}>
                <div>
                    Username:
                    </div>
                <div>
                    <input class="page-margins" type="text" onChange={(e) => { setUsername(e.target.value) }}></input>
                </div>
                <div>
                    Email:
                    </div>
                <div>
                    <input class="page-margins" type="text" onChange={(e) => { setEmail(e.target.value) }}></input>
                </div>
                <div>
                    Password:
                    </div>
                <div>
                    <input class="page-margins" type="password" onChange={(e) => { setPassword(e.target.value) }}></input>
                </div>
                <div>
                    Confirm Password:
                    </div>
                <div>
                    <input class="page-margins" type="password" onChange={(e) => { setPassword2(e.target.value); document.getElementById("pw-dont-match").style.display = "block"}}></input>
                </div>
                <div>
                    <input type="submit"></input>
                </div>
            </form>
            <div class="error" id="pw-dont-match">
                Passwords don't match
            </div>
        </div>
    )
}