import styled from 'styled-components';

export const Container = styled.div`
  height: 250px;

  svg{
      width: 3000px;
      margin-left: -800px;
  }

  @media (max-width: 600px){
    padding: 0 16px;
  }
`;
