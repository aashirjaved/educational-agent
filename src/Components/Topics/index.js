import {React, useEffect, useState} from "react";
import { Modules } from '../Modules'
import { auth } from "../../Services/api";

export const Topics = () => {
    const [userLoggedIn, setUserLoggedIn] = useState(false);

    useEffect(() => {
        auth.login().then((response) => {
            localStorage.setItem("JWT", response.data.accessToken)
            setUserLoggedIn(true)
        }).catch((error) => {
            console.error("USER LOGIN FAILED", error)
        })
    });
    if(userLoggedIn) {
        return <Modules/>
    }
}