import React from 'react';
import { Container, Title, SubTitle, TitleImage } from './styles';
import imgWaves from '../../assets/waves.png';
import imgSeahorse from '../../assets/seahorse.png';

function About() {
    return (
        <Container>
            <Title>
                <TitleImage className="seahorse" src={imgSeahorse} alt="cavalo marinho" />
                <SubTitle>
                    <h2>Sobre</h2>
                    <img src={imgWaves} alt="ondas" />
                </SubTitle>
            </Title>
            <p>Olá, eu sou a Marina, Desenvolvedora Full Stack ,  gosto de filmes e de passear com meus amigos.</p>
        </Container>
    );
}

export default About;