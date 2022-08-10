import "./Auth.css"

// components
import {Link} from 'react-router-dom';

// hooks
import {useState, UseEffect} from 'react';

export default function Register(){

    const handleSubmit = (e) => {
        e.prevent.default();
    }

    return(
        <div id="register">
            <h2>ReactGram</h2>
            <p className="subtitle">Cadastre-se para ver as fotos dos seus amigos.</p>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Nome" />
                <input type="email" placeholder="E-mail" />
                <input type="password" placeholder="Senha" />
                <input type="password" placeholder="Confirme sua senha" />
                <input type="submit" placeholder="Cadastrar" />
            </form>
            <p>Ja possui conta? <Link to="/login">Clique aqui</Link></p>
        </div>
    )
}