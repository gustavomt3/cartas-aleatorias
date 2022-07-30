//React
import React from 'react';
//Styles
import styles from './MainLogin.module.scss';
//Context
import { GlobalContext } from '../../Contexts/GlobalState';
//Router
import { useNavigate } from 'react-router-dom';
//Components
import Button from '../Button/Button';

const MainLogin = () => {
  const { user, setUser } = React.useContext(GlobalContext);
  const navigate = useNavigate();

  //Pega o texto do input e seta no estado do user
  function getName(event) {
    setUser({ name: event.target.value });
  }

  //Valida se o nome do usuário é valido, se for leva-o para página das cartas
  function handleSubmit() {
    if (user !== null && user.name.length >= 3) {
      navigate('/padcards');
    } else {
      window.alert('Você precisa digitar seu nome para prosseguir');
    }
  }

  return (
    <main className={styles.containerMain}>
      <h2>Digite seu nome para poder ver as cartas</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={getName} placeholder="Nome*" />
        <Button>Ver Cartas</Button>
      </form>
    </main>
  );
};

export default MainLogin;
