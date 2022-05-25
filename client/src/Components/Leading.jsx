import React from "react";
import {Link} from "react-router-dom"
import "./Leading.css"

export default function Leading(){
    return(
        <div className="Leading_background">
            <div className="conteined">
                <div>
                    <h1 className="title">Info Food</h1>
                    <Link to={"/home"}>
                        <button className="buttonleading">Go Home!</button>
                    </Link>
                </div>
                <div className="discurcito">
                    <p>"Welcome to Info Food, <br/>here you will find the best<br/> recipes, it's up to you if you<br/> dare to venture into a world of <br/>flavors"</p>
                </div>
                
            </div>
        </div>
    )
}