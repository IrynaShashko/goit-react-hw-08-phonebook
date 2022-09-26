import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  text-align: center;
  padding: 50px;
  margin: 0 auto;
  @media screen and (min-width: 767px) {
    flex-direction: row;
  }
  gap: 20px;
`;

export const ImgContainer = styled.div`
  width: 250px;
  @media screen and (min-width: 468px) {
    width: 350px;
  }
  @media screen and (min-width: 767px) {
    width: 550px;
  }

  @media screen and (min-width: 920px) {
    width: 650px;
  }
`;

export const H1 = styled.h1`
  font-size: 25px;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  @media screen and (min-width: 468px) {
    font-size: 40px;
  }
  @media screen and (min-width: 767px) {
    font-size: 50px;
  }

  @media screen and (min-width: 920px) {
    font-size: 60px;
  }
`;
