import styled from 'styled-components';
import imgFooter from '../../assets/footer.png';

export const Container = styled.div`
  background-image: url(${imgFooter});;
  background-size: 100%;
  margin-top: -5px;
  width: 100vw;
  height: 350px;
  display: flex;
  flex-direction: column;
  background-repeat: no-repeat;
  align-items: center;

  h1{
    font-weight: 600;
    font-size: 3em;
    color: #AD9EFA;
    margin-top: 500px;
  }

  img + img {
    margin-top: 8px;
  }

  @media (max-width: 600px){
    width: calc(100vw - 16px);
  }
`;



