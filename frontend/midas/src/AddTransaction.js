import React, { useState, useEffect } from 'react';
//import './css/login.css'
import Cookies from 'js-cookie';
import APIServer from './EndPoint';

function validateTransaction(unitPrice, quant, total, category, other) {
    // check that either (unitPrice and quant) or total has been filled, if other, then other
    return "valid"
}

function submitTransaction(unitPrice, quant, total, category, other) {
    var validate = validateTransaction(unitPrice, quant, total, category, other)
    if (validate === "valid") {
        //post request
        var request = {
            method: 'POST',
            mode: "cors",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                token: Cookies.get('token'),
                unitPrice: unitPrice,
                quant: quant,
                total: total,
                category: category,
                other: other
            }),
            credentials: 'include'
        }
        fetch(APIServer + "/api/add_transaction", request)
            .then(
                response => {
                    console.log(response)
                    return response.json()
                }
            )
            .then((data) => {
							//console.log(data)
							if(data['ok'] === 'no-login'){
								alert("not logged in")
							} else if (data['ok'] === 'error'){
								alert("the server encountered an error and could not process your request")
							}
            }) 
    }
    return validate
}

export default function AddTransaction() {
    const [unitPrice, setUnitPrice] = useState(0)
    const [quant, setQuant] = useState(0)
    const [total, setTotal] = useState(0)
    const [category, setCategory] = useState("")
    const [other, setOther] = useState("")
    const [valid, setValid] = useState("")
    useEffect(() => {
        setTotal(unitPrice * quant)
    })
    useEffect(() => {
        //console.log(category)
        if (category === "Other") {
            document.getElementById("other-field").style.display = "inline"
        } else {
            document.getElementById("other-field").style.display = "none"
        }
    })

    return (
        <div class="page-margins">
					<form onSubmit={(e) => {e.preventDefault();
						setUnitPrice(0); 
						setQuant(0); 
						setTotal(0); 
						setCategory(""); 
						submitTransaction(unitPrice, quant, total, category, other) }}>
                <div>
                    Unit Price
                </div>
                <div>
                    <input type="number" value={unitPrice} onChange={(e) => { setUnitPrice(e.target.value) }} step=".01"></input>
                </div>
                <div>
                    Quantity
                </div>
                <div>
                    <input type="number" value={quant} onChange={(e) => { setQuant(e.target.value) }} step=".01"></input>
                </div>
                <div>
                    Total value
                </div>
                <div>
                    <input type="number" value={total} onChange={(e) => { setTotal(e.target.value) }} step=".01"></input>
                </div>
                <div>
                    Category:
                </div>
                <div>
                    <select id="category" value={category} name="category" onChange={(e) => { setCategory(e.target.value) }}>
                        <option value="" >Select category</option>
                        <option value="Food">Food</option>
                        <option value="Toiletries">Toiletries</option>
                        <option value="Clothes">Clothes</option>
                        <option value="Technology">Technology</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
                <div id="other-field">
                    <div>
                        Other:
                    </div>
                    <div>
                        <input type="text" value={other} onChange={(e) => { setOther(e.target.value) }}></input>
                    </div>
                </div>
                <div>
                    <input type="submit"></input>
                </div>
            </form>
        </div>
    );
}
