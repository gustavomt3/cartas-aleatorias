//React
import React from 'react';
//Styles
import styles from './Card.module.scss';

const Card = ({ data }) => {
  const [random, setRandom] = React.useState();

  React.useEffect(() => {
    const pontosRandom = Math.floor(Math.random() * 10);
    setRandom(pontosRandom);
  }, []);

  return (
    <li className={styles.containerCard}>
      <div className={styles.cardPhoto}>
        <img src={data.image} alt={data.name} />
      </div>
      <div className={styles.name}>
        <h1>{data.name}</h1>
      </div>
      <div className={styles.firsEpisode}>
        <p>Primeiro Episódio</p>
        <span>{data.firstEpisode}</span>
      </div>
      <div className={styles.dublador}>
        <p>Dublador</p>
        <span>
          {data.voicedBy ? data.voicedBy : 'Dublador não identificado'}
        </span>
      </div>
      <div className={styles.pontos}>
        <p>
          Pontos: <span>{random}</span>{' '}
        </p>
      </div>
    </li>
  );
};

export default Card;
