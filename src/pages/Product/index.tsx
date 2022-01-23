import { Container } from '../../components/Container/styles'
import { ButtonSelected, ButtonUnselected1, ButtonUnselected2 } from 'components/LinkButtons/styles';

import Logo from '../../assets/Profile/Logo.png'
import ClientsIcon from "../../assets/Profile/ClientsIcon.svg"
import ProductsIcon from "../../assets/Profile/ProductsIcon.svg"
import SellsIcon from "../../assets/Profile/SellsIcon.svg"

import './styles.css'

export const Product = () => {
  return (
    <Container>
      <img className='LogoProfile' src={Logo} alt='' />
      <ButtonUnselected1 style={{top: "28%"}}>
        <img className='ClientsIcon' src={ClientsIcon} alt='' />
        <h2>Clientes</h2>
      </ButtonUnselected1>
      <ButtonSelected style={{top: "38%"}} >
        <img className='ProdctsIcon' src={ProductsIcon} alt='' />
        <h2>Produtos</h2>
      </ButtonSelected>
      <ButtonUnselected2 style={{top: "48%"}}>
        <img className='SellsIcon' src={SellsIcon} alt='' />
        <h2>Vendas</h2>
      </ButtonUnselected2>
    </Container>
  );
};
