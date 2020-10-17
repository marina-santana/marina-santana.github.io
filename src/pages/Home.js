import React from 'react';
import About from '../components/About';
import Formation from '../components/Formation';
import Header from '../components/Header';
import Skills from '../components/Skills';
import { Container } from './styles';

function Home() {
    return (
        <Container>
            <Header />
            <About />
            <Formation />
            <Skills />
        </Container>
    );
}

export default Home;