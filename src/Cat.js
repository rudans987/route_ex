import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const Cat = ()=> {

    const params = useParams();
    const navigate =useNavigate();
    console.log(params)   
    return (
    <div>
        <h1>고양이</h1>
        <button onClick={()=> {navigate("/");
    }}>메인페이지로</button>
    </div>)
}

export default Cat;