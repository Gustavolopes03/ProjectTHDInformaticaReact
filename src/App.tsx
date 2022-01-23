import { Routes } from './routes';
import { BrowserRouter as Router } from 'react-router-dom';
import GlobalStyle from './styles/globals';

export const App = () => {
  return (
    <Router>
      <Routes />
      <GlobalStyle />
    </Router>
  );
};
