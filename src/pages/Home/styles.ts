
import styled, { keyframes } from 'styled-components';
import { shade } from 'polished'; // manipulação de cores

import signInBackground from '../../assets/Home/HomeImage.png';

import {Link} from 'react-router-dom';

export const Container = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  background: url(${signInBackground}) no-repeat center;
  background-size: cover; 
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
`;

export const Content = styled.div`
  position: absolute;
  width: 386px;
  height: auto;
  padding: 40px;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 62px;
  top: 25%;
  left: 15%;
`;

export const H1 = styled.h1`
  position: absolute;
  top: 44px;
  left: 15%;
  font-size: 190%;
`

export const LinkDiv = styled.div`
  margin-top: 8%;
  padding: 1%;
`

export const LinkS = styled(Link)`
  color: #FFF;
`;