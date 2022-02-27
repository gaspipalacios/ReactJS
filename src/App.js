import React, { useState } from 'react';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';
import Footer from './components/Footer';
import CreateOrder from './components/CreateOrder';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CartContext from './contexts/CartContext';


export default function App() {

  const [prodSection, setProdSection] = useState([
    { id: '01', section: 'Remeras y Tops' },
    { id: '02', section: 'Vestidos' },
    { id: '03', section: 'Shorts' },
    { id: '04', section: 'Accessorios' }

  ]);

  return (
    <>
      <BrowserRouter >
        <CartContext>
          <NavBar prodSection={prodSection} />
          <div  style={{ backgroundColor: '#f8f9fa' }}>
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
            <Route exact path="/cart">
              <Cart />
            </Route>

            {/* RUTA CREAR ORDEN */}
            <Route exact path="/myOrder">
              <CreateOrder />
            </Route>

          </Switch>
          </div>
          <Footer />
        </CartContext>
      </BrowserRouter>
    </>
  );
}


