import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 400px;
  display: flex;
  align-items: center;
  flex-direction: column;

  .seahorse {
    width: 80px;
    height: 138px;
  }

  p{
    max-width: 600px;
    text-align: center;
    margin-top: 16px;
  }
`;

export const Title = styled.div`
 display: flex;
`;

export const SubTitle = styled.div`
 h2{
    font-weight: 400;
    font-size: 3em;
    text-align: center;
  }
`;



