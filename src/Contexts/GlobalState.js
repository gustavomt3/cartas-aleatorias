import React from 'react';

//Create Context
export const GlobalContext = React.createContext();

//Provider Components
export const GlobalProvider = (props) => {
  //Login
  const [user, setUser] = React.useState({});

  //Fetch
  // const getData = async () => {
  //   setLoading(true);
  //   try {
  //     const response = await fetch(
  //       'https://us-central1-rapid-api-321400.cloudfunctions.net/instaviagem-challenge',
  //     );
  //     const data = await response.json();
  //     const dataAlf = data.sort((a, b) => {
  //       return a.name.localeCompare(b.name);
  //     });
  //     setData(dataAlf);
  //     setDataWithFilter(dataAlf);
  //   } catch (err) {
  //     console.log('error', err);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  return (
    <GlobalContext.Provider value={{ user, setUser }}>
      {props.children}
    </GlobalContext.Provider>
  );
};
