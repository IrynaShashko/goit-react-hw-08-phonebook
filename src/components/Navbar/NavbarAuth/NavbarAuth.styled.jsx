import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const List = styled.ul`
  list-style: none;
  border-radius: 50px;
  display: flex;
  flex-direction: row;
  margin: 0;
  padding: 0;
`;

export const NavLinkStyle = styled(NavLink)`
  background-color: #ccc;
  padding: 4px;
  border-radius: 4px;
  text-decoration: none;
  color: #000;
  font-size: 14px;
  margin-left: 10px;
  &.active {
    font-weight: bold;
    color: #fffdfd;
    padding: 4px;
    border-radius: 4px;
    background-color: #1976d2;
  }
  @media screen and (min-width: 767px) {
    font-size: 18px;
    padding: 8px;
    &.active {
      padding: 8px;
    }
  }
  @media screen and (min-width: 920px) {
    font-size: 26px;
    padding: 10px;
    &.active {
      padding: 10px;
    }
  }
`;
