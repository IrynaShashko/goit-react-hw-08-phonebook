import styled from '@emotion/styled';

export const Container = styled.div`
  box-sizing: border-box;
  width: 500px;
  margin: 50px auto;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 50%) 0px 0px 29px 4px;
  padding: 30px 48px;
  @media screen and (max-width: 500px) {
    margin: 30px auto;
    width: 90%;
    height: 90%;
  }
  @media screen and (max-width: 470px) {
    padding: 30px 24px;
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
  gap: 10px 20px;
`;

export const H2 = styled.h2`
  text-align: center;
  font-size: 25px;
  margin: 0;
  @media screen and (min-width: 767px) {
    font-size: 30px;
  }
  @media screen and (min-width: 920px) {
    font-size: 35px;
  }
`;
export const P = styled.p`
  text-align: center;
  font-size: 18px;
  @media screen and (min-width: 767px) {
    font-size: 22px;
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
