import { Link } from 'react-router-dom'
import './style.css'

export const Register = () => {
  return (
    <div className='RegisterWrapper' >
      <section className='RegisterBox' >
        <h1 className='RegisterH1' >Cadastrar Conta</h1>
        <input type="text" />
        <input type="text" />
        <Link to='/home' >
        <button>Cadastrar</button>
        </Link>
      </section>
    </div>
  );
};
