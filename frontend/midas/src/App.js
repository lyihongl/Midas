import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import LoginForm from './Login'
import CreateAcc from './CreateAcc'
import ViewData from './ViewData'
import AddTransaction from './AddTransaction'
import './App.css';
import './css/main.css'

function pageControl(page) {
	if (page === "login") {
		return (
			<LoginForm />
		);
	} else if (page === "create_acc") {
		return (
			<CreateAcc />
		)
	} else if (page === "view_data") {
		return (
			<ViewData />
		);
	} else if (page === "add_transact") {
		return (
			<AddTransaction />
		);
	}
	else {
		return null;
	}
}

function App() {
	const [page, setPage] = useState("add_transact")
	useEffect(() => {
		var links = document.getElementsByClassName('navbar-link')
		for(var i = 0; i<links.length; i++){
			links.item(i).style.backgroundColor="#333"
		}
		document.getElementById(page).style.backgroundColor = "#555";
	}
	);
	return (
		<div>
			<h1 class="center">Midas</h1>
			<ul class="navbar">
				<div class="center-div">
					<li class="navbar-inline" ><a class="navbar-link" id="add_transact" href="#" onClick={() => { setPage("add_transact") }}>Add Transaction</a></li>
					<li class="navbar-inline"><a class="navbar-link" id="view_data" href="#" onClick={() => { setPage("view_data") }}>View Data</a></li>
					<li class="navbar-inline"><a class="navbar-link" id="login" href="#" onClick={() => { setPage("login") }}>Login</a></li>
					<li class="navbar-inline"><a class="navbar-link" id="create_acc" href="#" onClick={() => { setPage("create_acc") }}>Create Account</a></li>
				</div>
			</ul>
			{pageControl(page)}
		</div>
	);
}


export default App;
