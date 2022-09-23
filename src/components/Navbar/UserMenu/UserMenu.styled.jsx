import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const User = styled.p`
  font-size: 16px;
  margin: 0;
  @media screen and (min-width: 767px) {
    font-size: 20px;
  }
  @media screen and (min-width: 920px) {
    font-size: 24px;
  }
`;

export const Button = styled.button`
  background-color: #ccc;
  color: #000;
  padding: 0 10px;
  border: none;
  border-radius: 4px;
  margin-left: 10px;
  font-size: 14px;
  height: 23px;
  cursor: pointer;
  &.hover,
  &.active {
    background-color: #1976d2;
    color: #fff;
    padding: 0 10px;
    border-radius: 4px;
  }
  @media screen and (min-width: 767px) {
    font-size: 18px;
    padding: 0 6px;
    height: 36px;
  }
  @media screen and (min-width: 920px) {
    font-size: 26px;
    padding: 0 10px;
    height: 38px;
  }
`;
