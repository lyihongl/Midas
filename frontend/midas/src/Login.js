import React, { useState, useEffect } from 'react';
import './css/login.css'
import './css/main.css'
import Cookies from 'js-cookie'
import APIServer from './EndPoint';

function handleSubmit(event, username, password, setLoginState) {
	//console.log(event, username, password)
	var request = {
		method: "POST",
		mode: "cors",
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
		}, body: JSON.stringify({
			username: username,
			password: password,
		}),
		credentials: 'include'
	}
	fetch(APIServer+"/api/login", request)
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
				//Cookies.set(JSON.parse(atob(Cookies.get("token").split('.')[1])))
				console.log(JSON.parse(atob(Cookies.get("token"))))
				//setLoginState(1)
			} else {
				//setLoginState(0)
			}
		}).catch(e => {
			console.log(e)
		});
	event.preventDefault()
}

export default function LoginForm() {
	const [username, setUsername] = useState("")
	const [password, setPassword] = useState("")
	return (
		<div class="page-margins">
			<form class="container" onSubmit={(e) => { handleSubmit(e, username, password) }}>
				<div>
					Username:
					</div>
				<div>
					<input class="page-margins" type="text" onChange={(e) => { setUsername(e.target.value) }}></input>
				</div>
				<div>
					Password:
					</div>
				<div>
					<input class="page-margins" type="password" onChange={(e) => { setPassword(e.target.value) }}></input>
				</div>
				<div>
					<input type="submit"></input>
				</div>
			</form>
		</div>
	);
}
