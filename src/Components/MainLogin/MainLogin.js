//React
import React from 'react';
//Styles
import styles from './MainLogin.module.scss';
//Context
import { GlobalContext } from '../../Contexts/GlobalState';
//Router
import { useNavigate } from 'react-router-dom';

const MainLogin = () => {
  const { user, setUser } = React.useContext(GlobalContext);

  const navigate = useNavigate();

  function getName(event) {
    setUser({ name: event.target.value });
  }

  function handleSubmit() {
    if (user.name.length >= 3) {
      navigate('/padcards');
    } else {
      window.alert('Você precisa digitar seu nome para prosseguir');
    }
  }

  return (
    <main className={styles.containerMain}>
      <h2>Digite seu nome para poder ver as cartas</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={getName} />
        <button>Ver Cartas</button>
      </form>
    </main>
  );
};

export default MainLogin;
