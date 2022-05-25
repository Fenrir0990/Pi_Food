import React from "react";
import "./Card.css";



/*export default function Card({title,image,diets,id}){
    
    return(
        <div key={id}>
            <img key="imgfood" src={image} width="30" height="30" className="imgRecipe" alt="Img Not Found"/>
            <Link to={`/recipe/${id}`}><h2>{title}</h2></Link>
            <h5>{diets}</h5>
        </div>
    )
} */



export default function Card({ Image , title , diets ,id}){

    return (
        <div key={id.toString()} className="card">
            <img className="image" src={Image} alt=""/>
            <div className="innerContainer">
                <h3 className="Title">{title}</h3>
                <div className="contained_diets">
                    <>{diets}</>
                </div>
            </div>
        </div>
    )
}