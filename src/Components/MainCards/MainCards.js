//React
import React from 'react';
//Styles
import styles from './MainCards.module.scss';
//Context
import { GlobalContext } from '../../Contexts/GlobalState';
//Components
import Loading from '../Loading/Loading';
import Card from '../Card/Card';
import Button from '../Button/Button';

const MainCards = () => {
  const { loading, data } = React.useContext(GlobalContext);

  return (
    <main className={styles.containerMain}>
      {' '}
      <Loading />
      <ul className={styles.containerCards}>
        {!loading &&
          data &&
          data.map((data) => {
            return <Card key={data.id} data={data} />;
          })}
      </ul>
      <div className={styles.buttons}>
        <Button>Puxar nova carta</Button>
        <Button>Embaralhar</Button>
      </div>
    </main>
  );
};

export default MainCards;
