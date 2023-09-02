import './App.css';

//Componenets
import Header from './components/Header';
import AddItem from './components/AddItem';
import List from './components/List';
import Footer from './components/Footer';

import Loading from './components/Loading';

import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/list`).then(value => {
      setData(value.data);
      setLoading(false);
    })

  }, []);


  if (loading) {
    return <Loading />
  }

  return (
    <div className='container text-center my-4 bg-light rounded'>
      <Header title={"Todo Input"} />
      <AddItem setData={setData}/>
      <List todos={data} setData={setData} />
      <Footer todos={data} setData={setData}/>
    </div>

  );
}

export default App;
