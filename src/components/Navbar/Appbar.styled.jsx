import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  border: none;
  border-bottom: 1px solid #ccc;
  padding: 8px;
  font-size: 16px;
  box-shadow: 0px 24px 16px -15px rgba(66, 68, 90, 1);
  @media screen and (min-width: 767px) {
    font-size: 20px;
    padding: 12px;
  }
  @media screen and (min-width: 920px) {
    font-size: 30px;
    padding: 16px;
  }
`;

export const LinkStyle = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: #1976d2;
  font-weight: bold;
  font-size: 16px;
  @media screen and (min-width: 767px) {
    font-size: 20px;
  }
  @media screen and (min-width: 920px) {
    font-size: 30px;
  }
`;
