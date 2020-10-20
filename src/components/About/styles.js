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

  
 @media (max-width: 600px){
  margin-top: 464px;
 }
`;

export const Title = styled.div`
 display: flex;

 @media (max-width: 600px){
  margin: auto;
 }
`;

export const TitleImage = styled.img`
 @media (max-width: 600px){
    width: 4em !important;
    height: 4.5em !important;
 }
`;

export const SubTitle = styled.div`
 h2{
    font-weight: 400;
    font-size: 3em;
    text-align: center;
  }

  @media (max-width: 600px){

    img{
      width: 90%;
    }
    

    h2{
      font-size: 2em;
    }
  }
`;



