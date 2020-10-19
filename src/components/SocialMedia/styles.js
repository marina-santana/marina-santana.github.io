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
  width: 500px;
  justify-content: space-between;
  margin-top: 16px;
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
`;






