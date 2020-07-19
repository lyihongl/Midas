import React, { useState, useEffect } from 'react';
//import './css/login.css'
import Cookies from 'js-cookie';

export default function AddTransaction() {

    return (
        <div class="page-margins">
            <form>
                <div>
                    Unit Price
                </div>
                <div>
                    <input type="text"></input>
                </div>
                <div>
                    Quantity
                </div>
                <div>
                    <input type="text"></input>
                </div>
                <div>
                    Total value
                </div>
                <div>
                    <input type="text"></input>
                </div>
                <div>
                    Category:
                </div>
                <div>
                    <select id="category" name="category" onChange={()=>{}}>
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