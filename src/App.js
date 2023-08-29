import './App.css';

//Componenets
import Header from './components/Header';
import AddItem from './components/AddItem';
import List from './components/List';
import Footer from './components/Footer';

function App() {
  return (

    <div className='container text-center my-4 bg-light rounded'>
      <Header />
      <AddItem />
      <List />
      <Footer />
    </div>

  );
}

export default App;
