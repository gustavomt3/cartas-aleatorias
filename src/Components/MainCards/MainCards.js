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
  const { loading, setLoading } = React.useContext(GlobalContext);
  const [data, setData] = React.useState([]);
  // const [data2, setData2] = React.useState([]);
  const [embaralhar, setEmbaralhar] = React.useState(false);
  const [contador, setContador] = React.useState(0);

  //First Fetch [Puxa as primeiras 5 cartas via API Bob's Burguer]
  const getData = async () => {
    const value502 = Math.floor(Math.random() * 502);
    setLoading(true);
    try {
      const response = await fetch(
        `https://bobsburgers-api.herokuapp.com/characters/?limit=5&skip=${value502}`,
      );
      const data = await response.json();
      setData(data);
    } catch (err) {
      console.log('error', err);
    } finally {
      setLoading(false);
    }
  };

  //Renderiza a função getData() assim que a página dos cards for carregada
  React.useEffect(() => {
    getData();
  }, []);

  //Second Fetch [Puxa uma carta por vez via API Bob's Burguer]
  const addCard = async () => {
    const value5024 = Math.floor(Math.random() * 502);
    try {
      const response = await fetch(
        `https://bobsburgers-api.herokuapp.com/characters/?limit=1&skip=${value5024}`,
      );
      const data2 = await response.json();
      data.push(...data2);
    } catch (err) {
      console.log('error', err);
    } finally {
      setContador(contador + 1);
    }
  };

  //Função que embaralha a Array
  function shuffleArray(arr) {
    // Loop em todos os elementos
    for (let i = arr.length - 1; i > 0; i--) {
      // Escolhendo elemento aleatório
      const j = Math.floor(Math.random() * (i + 1));
      // Reposicionando elemento
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    // Retornando array com aleatoriedade
    setEmbaralhar(!embaralhar);
    return arr;
  }

  return (
    <>
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
      </main>
      <footer className={styles.buttons}>
        <div className={styles.containerButtons}>
          <Button
            onClick={() => {
              addCard();
            }}
            disabled={contador >= 3 ? 'disabled' : ''}
          >
            {contador >= 3 ? 'Não pode puxar mais cartas' : 'Puxar nova carta'}
          </Button>
          <Button
            onClick={() => {
              shuffleArray(data);
            }}
          >
            Embaralhar
          </Button>
        </div>
      </footer>
    </>
  );
};

export default MainCards;
