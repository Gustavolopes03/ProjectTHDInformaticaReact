import Button from 'components/Button';
import { useNavigate } from 'react-router-dom';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

import { Container, Content, H1, LinkS, LinkDiv } from './styles';

import { useCallback, useRef } from 'react';
import getValidationErrors from '../../utils/getValidationErrors';
import Input from 'components/Input';
import Line from '../../assets/Home/Line.svg';

interface SignInFormData {
  email: string;
  password: string;
}

export const Home = () => {
  const formRef = useRef<FormHandles>(null);
  const navigate = useNavigate();

  const handleLogin = useCallback(
    async (data: SignInFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          email: Yup.string().email('Digite um e-mail válido').required('E-mail obrigatório'),
          password: Yup.string().required('Senha obrigatória'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        navigate('/product');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);

          return;
        }
      }
    },
    [navigate]
  );

  return (
    <Container>
      <Content>
        <Form ref={formRef} onSubmit={handleLogin}>
          <H1>Login</H1>
          <img src={Line} alt="" />
          <Input name="email" placeholder="E-mail" />
          <Input name="password" placeholder="Senha" type="password" />
          <Button type="submit">Entrar</Button>
        </Form>
        <LinkDiv>
          <LinkS to="/register">Criar conta</LinkS>
        </LinkDiv>
      </Content>
    </Container>
  );
};
