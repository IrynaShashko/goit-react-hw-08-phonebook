import styled from '@emotion/styled';

export const Container = styled.div`
  width: 200px;
  margin: 50px auto;
  padding: 20px;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  box-shadow: 0px 0px 29px 4px rgba(0, 0, 0, 0.5);
  @media screen and (min-width: 767px) {
    width: 300px;
    padding: 30px;
  }
  @media screen and (min-width: 920px) {
    width: 400px;
    padding: 40px;
  }
`;
export const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const H2 = styled.h2`
  text-align: center;
  font-size: 20px;
  margin: 0;
  @media screen and (min-width: 767px) {
    font-size: 25px;
  }
  @media screen and (min-width: 920px) {
    font-size: 35px;
  }
`;
export const P = styled.p`
  text-align: center;
  font-size: 14px;
  @media screen and (min-width: 767px) {
    font-size: 20px;
  }
  @media screen and (min-width: 920px) {
    font-size: 26px;
  }
`;
export const Button = styled.button`
  background-color: #ccc;
  color: #000;
  padding: 5px 20px;
  border: none;
  border-radius: 4px;
  margin-top: 10px;
  margin-left: 10px;
  font-size: 14px;
  cursor: pointer;
  &.hover {
    background-color: #1976d2;
    color: #fff;
    border-radius: 4px;
    padding: 5px 20px;
  }
  @media screen and (min-width: 767px) {
    font-size: 18px;
  }
  @media screen and (min-width: 920px) {
    font-size: 26px;
  }
`;
