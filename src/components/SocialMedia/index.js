import React from 'react';
import { Container, List, ContainerList } from './styles';
import imgWaves from '../../assets/waves.png';
import imgOyster from '../../assets/oyster.png';
import imgMedium from '../../assets/medium.png';
import imgLinkedin from '../../assets/linkedin.png';
import imgGitHub from '../../assets/github.png';
import { SubTitle, Title } from '../About/styles';

function SocialMedia() {
    return (
        <Container>
            <Title>
                <img className="oyster" src={imgOyster} alt="ostra" />
                <SubTitle>
                    <h2>Redes sociais</h2>
                    <img src={imgWaves} alt="ondas" />
                </SubTitle>
            </Title>
            <ContainerList>
                <List>
                    <img src={imgLinkedin} alt="linkedin" />
                    <a href="https://www.linkedin.com/in/marina-santa-ana/">marina-santa-ana</a>
                </List>
                <List>
                    <img src={imgGitHub} alt="git hub" />
                    <a href="https://github.com/marina-santana">marina-santana</a>
                </List>
                <List>
                    <img src={imgMedium} alt="medium" />
                    <a href="https://medium.com/@marina_santana">@marina_santana</a>
                </List>
            </ContainerList>
        </Container>
    );
}

export default SocialMedia;