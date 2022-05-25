import React from "react";
import {Link,Outlet} from 'react-router-dom';

import LogoFood from "../img/3180456.png";

import './Nav.css';

export default function Nav(){
    /* return(
        <nav className = "navContained">
            
                <NavLink className="NavElement" to={"/home"} >
                   <img key="logoFood" src={LogoFood} width="30" height="30" className="Imagen" alt="Not found animal" />
                </NavLink>
                <NavLink  className="NavElement" to={"/home"}>
                    Inicio
                </NavLink>
                <NavLink className="NavElement" to={"/create"}>
                    Nueva receta    
                </NavLink>
                <NavLink className="NavElement"  to={"/recipes"}>
                    Recetas
                </NavLink>
            
            
        </nav>

    ) */
    return (
        <>
          <nav className='BackGraund_Nav'>
            <ul className='ul_nav'>
              <li className="logoFood"><img width={30} src={LogoFood} alt="Not found animal" /></li>
              <li className='li_nav'>
                <Link className='link' to="/home">Home</Link>
                <Link className='link' to="/create">CreateRecipe</Link>
              </li>
              <li>< button className='titulo_nav'>INFO FOOD</button></li>
            </ul>
          </nav>
    
          <Outlet />
        </>
      )
    /* return (
        <Nav defaultActiveKey="/home" as="ul">
            <Nav.Item as="li">
                <Nav.Link href="/home"><Home></Home></Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
                <Nav.Link eventKey="link-1">Create</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
                <Nav.Link eventKey="link-2">Link</Nav.Link>
            </Nav.Item>
        </Nav>
    ) */
}