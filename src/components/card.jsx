import React from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';
import { FaArrowRight } from 'react-icons/fa';

export const Card = ({ id, nombre, apellido }) =>{
    const navigate = useNavigate();

    const handleClick = () => {
      navigate(`/persona/${id}`);
    };
  
    return (
      <div className="persona-card" onClick={handleClick}>
        <span>{nombre} {apellido}</span>
        <FaArrowRight className="arrow-icon" />
      </div>
    );
}