//React
import React from 'react';
//Styles
import styles from './Header.module.scss';
//React Router Dom
import { useLocation } from 'react-router-dom';
//Images
import iconBurguer from '../../Assets/icon-hambuerguer.svg';
//Context
import { GlobalContext } from '../../Contexts/GlobalState';

const Header = () => {
  const { user } = React.useContext(GlobalContext);

  const location = useLocation();

  return (
    <header className={styles.header}>
      <div className={styles.containerGeral}>
        <div className={styles.nameapp}>
          <h1>Bob's Burguer Cards</h1>
          <img src={iconBurguer} alt="Logo" />
        </div>
        {location.pathname !== '/' ? (
          <div className={styles.nameuser}>
            <p>
              Nome do usuário: <span>{user !== null ? user.name : ''}</span>
            </p>
          </div>
        ) : null}
      </div>
    </header>
  );
};

export default Header;
