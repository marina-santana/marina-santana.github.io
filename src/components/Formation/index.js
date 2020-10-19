import React from 'react';
import { Container } from './styles';
import imgWaves from '../../assets/waves.png';
import imgStarfish from '../../assets/starfish.png';
import imgCircleMarker from '../../assets/circle-marker.png';
import { SubTitle, Title } from '../About/styles';

function Formation() {
    return (
        <Container>
            <Title>
                <img className="starfish" src={imgStarfish} alt="estrela do mar" />
                <SubTitle>
                    <h2>Formarção</h2>
                    <img src={imgWaves} alt="ondas" />
                </SubTitle>
            </Title>
            <img className="circle-markle" src={imgCircleMarker} alt="marcador circular" />
            <p>E.E “Eliana Andrés de Almeida Souza”</p>
            <p>Ensino médio (2017)</p>
            <img className="circle-markle" src={imgCircleMarker} alt="marcador circular" />
            <p>Escola Senai” Professor Vicente Amato”</p>
            <p>Técnico de Informática (2019)</p>
            <img className="circle-markle" src={imgCircleMarker} alt="marcador circular" />
            <p>Universidade nove de julho</p>
            <p>Ciências da computação (conclusão prevista para dez/2023)</p>
        </Container>
    );
}

export default Formation;