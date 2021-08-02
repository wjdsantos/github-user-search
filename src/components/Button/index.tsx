import React from 'react';
import './styles.css';

type Props = {
    text: string;
    onClick: Function;
}

const Button = ({ text, onClick }: Props) => (
    <div className="d-flex">
        <button className="btn-icon" onClick={() => onClick()}>
            {text}
        </button>
    </div>
);

export default Button;