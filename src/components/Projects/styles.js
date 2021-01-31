import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 64px;
  display: flex;
  align-items: center;
  flex-direction: column;

  p{
    max-width: 600px;
    text-align: center;
    margin-top: 8px;
  }

  .seaweed {
    width: 100px;
    height: 120px;
  }

  @media (max-width: 600px){
    margin-top: 32px;
  }
`;

export const ContainerList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 300px);
  max-width: 850px;
  gap: 32px;  
  margin-top: 16px;

  @media (max-width: 600px){
    grid-template-columns: 1fr;
    margin-top: 0;
  }
`;

export const List = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  
  a{
    position: absolute;
    margin-top: 140px;
    text-transform: uppercase;
  }

  @media (max-width: 600px){
    margin-top: 16px;
  }
`;






