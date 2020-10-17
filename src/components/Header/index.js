import React from 'react';
import { Container, Image } from './styles';
import imgWaves from '../../assets/waves.png';
import imgStars from '../../assets/stars.png';

function Header() {
    return (
        <Container>
            <Image />
            <h1>Marina Santana</h1>
            <img src={imgWaves} alt="ondas" />
            <img src={imgStars} alt="estrelas" />
        </Container>

    );
}

export default Header;