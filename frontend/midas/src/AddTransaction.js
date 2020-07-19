import React, { useState, useEffect } from 'react';
//import './css/login.css'
import Cookies from 'js-cookie';

export default function AddTransaction() {
    const [unitPrice, setUnitPrice] = useState(0)
    const [quant, setQuant] = useState(0)
    const [total, setTotal] = useState(0)
    useEffect(() => {
        setTotal(unitPrice * quant)
    })

    return (
        <div class="page-margins">
            <form>
                <div>
                    Unit Price
                </div>
                <div>
                    <input type="number" onChange={(e)=>{setUnitPrice(e.target.value)}}></input>
                </div>
                <div>
                    Quantity
                </div>
                <div>
                    <input type="number" onChange={(e)=>{setQuant(e.target.value)}}></input>
                </div>
                <div>
                    Total value
                </div>
                <div>
                    <input type="number" onChange={(e)=>{setTotal(e.target.value)}}></input>
                </div>
                <div>
                    Category:
                </div>
                <div>
                    <select id="category" name="category" onChange={() => { }}>
                        <option value="" disabled selected>Select category</option>
                        <option value="Food">Food</option>
                        <option value="Toiletries">Toiletries</option>
                        <option value="Clothes">Clothes</option>
                        <option value="Technology">Technology</option>
                    </select>
                </div>

            </form>
        </div>
    );
}