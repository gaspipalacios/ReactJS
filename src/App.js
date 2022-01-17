import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import React, {useState, useEffect} from 'react';

function App() {

  const arrayNav = [
                    {section: 'Home', url:'sarasa'},
                    {section: 'Contacto', url:'sarasa'}
  ];

  const [prodSection, setProdSection] = useState([
    {section: 'Pantalones', url:'sarasa'},
    {section: 'Remeras', url:'sarasa'},
    {section: 'Camperas', url:'sarasa'},
    {section: 'Zapatos', url:'sarasa'},
    {section: 'Perfumes', url:'sarasa'}
]);

  return (
    <>
    <NavBar arrayNav={arrayNav} prodSection={prodSection}/>

    <ItemListContainer />
    </>
  );
}

export default App;
