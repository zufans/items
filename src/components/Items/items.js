import React from 'react';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';


function Items ({itemsProps}){
    return (
      <Nav>
        {itemsProps.map((v, i)=>{
          return <Nav.Link key={i} style={{padding:5}} href={v.href} onClick={v.onClick}>{v.lable}</Nav.Link>
        })}
      </Nav>
    )
  }
  export default Items