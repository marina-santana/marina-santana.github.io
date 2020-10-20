import styled from 'styled-components';

export const Container = styled.div`
  margin: 64px 0 128px;
  display: flex;
  align-items: center;
  flex-direction: column;

  p{
    max-width: 600px;
    text-align: center;
    margin-top: 8px;
  }

  .oyster {
    width: 134px;
    height: 106px;
  }
`;

export const ContainerList = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 16px;

  @media (max-width: 600px){
    flex-direction: column;
    margin-top: 0;
  }
`;

export const List = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 0 16px;
  
  a{
    margin-top: 16px;
    text-transform: uppercase;
  }

  @media (max-width: 600px){
    flex-direction: column;
    margin-top: 16px;
  }
`;






