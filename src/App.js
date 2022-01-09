import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {

  const arrayNav = ['Inicio', 'Prendas', 'Contacto'];
  const greeting = 'BIENVENIDOS';

  return (
    <>
    <NavBar arrayNav={arrayNav} />

    <ItemListContainer greeting={greeting} />
    </>
  );
}

export default App;
