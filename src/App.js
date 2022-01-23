import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import React, {useState, useEffect} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Footer from './components/Footer';


function App() {

  const arrayNav = [
                    {section: 'Home', url:'/'},
                    {section: 'Contacto', url:'/'}
  ];

  const [prodSection, setProdSection] = useState([
    {id: '01', section: 'Remeras'},
    {id: '02', section: 'Pantalones'},
    {id: '03', section: 'Shorts'},
    {id: '04', section: 'Accessorios'}
    
]);

  return (
    <>
    <BrowserRouter >

      <NavBar arrayNav={arrayNav} prodSection={prodSection}/>

    <Switch>
      {/* RUTA HOME */}
      <Route exact path="/"> 
        <ItemListContainer />
      </Route>

      {/* RUTA DINÁMICA PARA CATEGORÍA */}
      <Route path="/category/:catId"> 
        <ItemListContainer />
      </Route>

      {/* RUTA DINÁMICA PARA DETALLE PRODUCTO */}
      <Route path="/item/:itemId"> 
        <ItemDetailContainer />
      </Route>
      
      {/* RUTA CONTACTO */}
      <Route exact path="/contacto">
            
      </Route>

      {/* RUTA CARRITO */}
      <Route exact path="/carrito">
            
      </Route>

    </Switch>

      <Footer />

    </BrowserRouter>
    </>
  );
}

export default App;
