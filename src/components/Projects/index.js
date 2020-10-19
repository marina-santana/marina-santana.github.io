import React from 'react';
import { Container, List, ContainerList } from './styles';
import imgWaves from '../../assets/waves.png';
import imgSeaweed from '../../assets/seaweed.png';
import imgFrame from '../../assets/frame.png';
import { SubTitle, Title } from '../About/styles';

function Projects() {
    return (
        <Container>
            <Title>
                <img className="seaweed" src={imgSeaweed} alt="alga" />
                <SubTitle>
                    <h2>Projetos</h2>
                    <img src={imgWaves} alt="ondas" />
                </SubTitle>
            </Title>
            <ContainerList>
                <List>
                    <img src={imgFrame} alt="quadro" />
                    <a href="https://github.com/marina-santana/modal-reactjs">modal-react</a>
                </List>
                <List>
                    <img src={imgFrame} alt="quadro" />
                    <a href="https://github.com/marina-santana/crud-react-js">crud-react</a>
                </List>
                <List>
                    <img src={imgFrame} alt="quadro" />
                    <a href="https://github.com/marina-santana/farm-sounds">farm-sounds</a>
                </List>
            </ContainerList>
        </Container>
    );
}

export default Projects;