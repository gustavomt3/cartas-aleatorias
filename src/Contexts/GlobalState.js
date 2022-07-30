//React
import React from 'react';

//Create Context
export const GlobalContext = React.createContext();

//Provider Components
export const GlobalProvider = (props) => {
  //Login
  const [user, setUser] = React.useState({});
  //Fetch
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  //Fetch
  const value502 = Math.floor(Math.random() * 502);
  const getData = async () => {
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

  React.useEffect(() => {
    getData();
  }, []);

  console.log(data);

  return (
    <GlobalContext.Provider value={{ user, setUser, loading, data }}>
      {props.children}
    </GlobalContext.Provider>
  );
};
