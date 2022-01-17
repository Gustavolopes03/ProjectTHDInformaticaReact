import { Link, useNavigate } from 'react-router-dom';

import Line from '../../assets/Home/Line.svg'

import './style.css'

export const Home = () => {
  const navigate = useNavigate();

  async function handleLogin(e: any) {
    e.preventDefault();

    try {
      navigate('/product');
    } catch (err: any) {
      alert('Falha ao Logar');
    }
  }

  return (
    <div className='HomeWrapper' >
      <section className='LoginBox' >
        <h1 className='LoginH1' >Login</h1>
        <img src={Line} alt="" />
        <input type="text" placeholder='Email'/>
        <input type="text" placeholder='Senha'/>
        <button onClick={handleLogin}>Entrar</button>
        <Link className="back-link" to="/register">
          Não Tenho Cadastro
        </Link>
      </section>
    </div>
  );
};
