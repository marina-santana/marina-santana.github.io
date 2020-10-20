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

  .fish {
    width: 128px;
    height: 99px;
  }

  @media (max-width: 600px){
    margin-top: 32px;
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
  flex-direction: column;
  padding: 0 64px;
  align-items: center;
  justify-content: center;

  @media (max-width: 600px){
    margin-top: 32px;
  }
`;








