import React, { useState, useEffect } from 'react';
//import './css/login.css'
import Cookies from 'js-cookie';

function validateTransaction(unitPrice, quant, total, category, other) {

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
            body: {
                token: Cookies.get('token')
            },
            credentials:'include'
        }
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
            <form onSubmit={() => { submitTransaction(unitPrice, quant, total, category, other) }}>
                <div>
                    Unit Price
                </div>
                <div>
                    <input type="number" onChange={(e) => { setUnitPrice(e.target.value) }} step=".01"></input>
                </div>
                <div>
                    Quantity
                </div>
                <div>
                    <input type="number" onChange={(e) => { setQuant(e.target.value) }} step=".01"></input>
                </div>
                <div>
                    Total value
                </div>
                <div>
                    <input type="number" onChange={(e) => { setTotal(e.target.value) }} step=".01"></input>
                </div>
                <div>
                    Category:
                </div>
                <div>
                    <select id="category" name="category" onChange={(e) => { setCategory(e.target.value) }}>
                        <option value="" disabled selected>Select category</option>
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
                        <input type="text" onChange={(e) => { setOther(e.target.value) }}></input>
                    </div>
                </div>
                <div>
                    <input type="submit"></input>
                </div>
            </form>
        </div>
    );
}