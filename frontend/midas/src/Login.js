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
	fetch(APIServer + "/api/login", request)
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
				setLoginState("a")
			} else {
				//setLoginState(0)
			}
		}).catch(e => {
			console.log(e)
		});
	event.preventDefault()
	//window.location.reload(true)
}

export default function LoginForm() {
	const [username, setUsername] = useState("")
	const [password, setPassword] = useState("")
	const [loggedIn, setLoggedIn] = useState("")
	const [refresh, setRefresh] = useState("")
	useEffect(() => {
		document.getElementById("logged-in").style.display = "none"
		console.log("cookies", Cookies.get('token'))
		if (Cookies.get('token') != undefined) {
			//console.log("token check")
			var request = {
				method: "POST",
				mode: "cors",
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json',
				}, body: JSON.stringify({
					token: Cookies.get('token')
				}),
				credentials: 'include'
			}
			fetch(APIServer + "/api/validate_login", request)
				.then(
					response => {
						return response.json()
					}
				)
				.then((data) => {
					if (data['valid']) {
						setLoggedIn(data['username'])
						document.getElementById("not-logged-in").style.display = "none"
						document.getElementById("logged-in").style.display = "inline"
					} else {
						setLoggedIn("")
						document.getElementById("logged-in").style.display = "none"
					}
				})
				.catch(e => {
					console.log(e)
				})
		}
	}, [refresh])
	return (
		<div class="page-margins">
			<div id="not-logged-in">
				<form class="container" onSubmit={(e) => { handleSubmit(e, username, password, setRefresh)}}>
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
			<div id="logged-in">
				Welcome {loggedIn}
			</div>
		</div>
	);

}
