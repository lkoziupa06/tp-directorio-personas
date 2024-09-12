import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';
import { FaArrowRight } from 'react-icons/fa';
import { FaUser } from "react-icons/fa";

export const CardListado = ({persona}) =>{
    const navigate = useNavigate();

    const handleClick = () => {
      navigate(`/persona/${persona.id}`);
    };
  
    return (
      <div className="persona-card" onClick={handleClick}>
        <FaUser />
        <span>{persona.nombre} {persona.apellido}</span>
        <FaArrowRight className="arrow-icon" />
      </div>
    );
}