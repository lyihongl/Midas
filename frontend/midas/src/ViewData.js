import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import APIServer from './EndPoint';

export default function ViewData(){
    var request = {
        method:"GET",
        //body: JSON.stringify({'token': Cookies.get('token')})
    }
    useEffect(()=>{
        console.log(JSON.stringify(Cookies.get('token')))
        fetch(APIServer+"/api/view_data?token="+JSON.stringify(Cookies.get('token')), request)
    })
    return(
        <div>
            View Data 
        </div>
    );
}