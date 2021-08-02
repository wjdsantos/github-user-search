import React from 'react';
import Button from '../../components/Button';
import { Link } from 'react-router-dom';
import './styles.css';

const Home = () => (
    <div>
        <div className="col-2">
            <br />
            <br />
            <h1 className="text-title">Desafio do Capítulo 3, <br />Bootcamp DevSuperior</h1>
            <br />
            <p className="text-subtitle">
                Bem-vindos ao desafio do capítulo 3 do Bootcamp DevSuperior.
                <br />
                Favor observar as instruções passadas no capítulo sobre a elaboração <br />
                deste projeto.
                <br />
                Este design foi adaptado a partir de Ant Design System for Figma, de <br />
                Mateusz Wierzbicki: antforfigma@gmail.com
            </p>
        </div>
        <div className="btn-home">
            <Link to="/Search" >
                <Button text="Começar" onClick = {() => false} />
            </Link>
        </div>
    </div>
)

export default Home;