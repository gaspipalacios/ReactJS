import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { getFirestore } from '../firebase/firebase';

import LinearProgress from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';

import { Container, Row } from "react-bootstrap";
import ItemList from "./ItemList";

export default function ItemListContainer() {

    const [arrayItems, setArrayItems] = useState([]);
    const { catId } = useParams();
    const [loading, setLoading] = useState(true);

    {/* const products = new Promise((resolve, reject) => {

        setTimeout(() => {

            resolve(
                [
                    { id: '001', catId: '02', name: 'Jean 1', price: 2100, stock: 0, category: 'pantalones', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab eaque laudantium quia, totam minus non porro velit placeat voluptatum maiores quasi veniam expedita praesentium animi quos nisi soluta voluptatem nam', img: 'url' },
                    { id: '002', catId: '02', name: 'Jean 2', price: 2200, stock: 17, category: 'pantalones', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab eaque laudantium quia, totam minus non porro velit placeat voluptatum maiores quasi veniam expedita praesentium animi quos nisi soluta voluptatem nam', img: 'url' },
                    { id: '003', catId: '01', name: 'Remera', price: 500, stock: 19, category: 'remeras', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab eaque laudantium quia, totam minus non porro velit placeat voluptatum maiores quasi veniam expedita praesentium animi quos nisi soluta voluptatem nam', img: 'url' },
                    { id: '004', catId: '01', name: 'Top', price: 500, stock: 22, category: 'remeras', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab eaque laudantium quia, totam minus non porro velit placeat voluptatum maiores quasi veniam expedita praesentium animi quos nisi soluta voluptatem nam', img: 'url' },
                    { id: '005', catId: '03', name: 'Short 1', price: 3900, stock: 9, category: 'shorts', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab eaque laudantium quia, totam minus non porro velit placeat voluptatum maiores quasi veniam expedita praesentium animi quos nisi soluta voluptatem nam', img: 'url' },
                    { id: '006', catId: '03', name: 'Short 2', price: 3400, stock: 9, category: 'shorts', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab eaque laudantium quia, totam minus non porro velit placeat voluptatum maiores quasi veniam expedita praesentium animi quos nisi soluta voluptatem nam', img: 'url' },
                    { id: '007', catId: '04', name: 'Cartera 1', price: 2600, stock: 6, category: 'accesorios', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab eaque laudantium quia, totam minus non porro velit placeat voluptatum maiores quasi veniam expedita praesentium animi quos nisi soluta voluptatem nam', img: 'url' },
                    { id: '008', catId: '04', name: 'Cartera 2', price: 2450, stock: 8, category: 'accesorios', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab eaque laudantium quia, totam minus non porro velit placeat voluptatum maiores quasi veniam expedita praesentium animi quos nisi soluta voluptatem nam', img: 'url' },
                    { id: '009', catId: '04', name: 'Mochila 1', price: 4770, stock: 5, category: 'accesorios', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab eaque laudantium quia, totam minus non porro velit placeat voluptatum maiores quasi veniam expedita praesentium animi quos nisi soluta voluptatem nam', img: 'url' },
                    { id: '010', catId: '04', name: 'Mochila 2', price: 4940, stock: 3, category: 'accesorios', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab eaque laudantium quia, totam minus non porro velit placeat voluptatum maiores quasi veniam expedita praesentium animi quos nisi soluta voluptatem nam', img: 'url' },
                    { id: '011', catId: '04', name: 'Sobre 1', price: 1900, stock: 3, category: 'accesorios', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab eaque laudantium quia, totam minus non porro velit placeat voluptatum maiores quasi veniam expedita praesentium animi quos nisi soluta voluptatem nam', img: 'url' },
                    { id: '012', catId: '04', name: 'Sobre 2', price: 1780, stock: 3, category: 'accesorios', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab eaque laudantium quia, totam minus non porro velit placeat voluptatum maiores quasi veniam expedita praesentium animi quos nisi soluta voluptatem nam', img: 'url' },
                    { id: '013', catId: '04', name: 'Piluso', price: 750, stock: 3, category: 'accesorios', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab eaque laudantium quia, totam minus non porro velit placeat voluptatum maiores quasi veniam expedita praesentium animi quos nisi soluta voluptatem nam', img: 'url' }]);

        }, 2000)
    }) */}

    {/* useEffect(() => {
        products
            .then(res => {
                (catId == undefined) ?
                    setArrayItems(res)
                    :
                    setArrayItems(res.filter(item => item.catId == catId));

            })
            .catch((err) => {
                console.log(err);
            })
        console.log(catId); 
    }, [catId]) */}

    useEffect(() => {
        const dataBase = getFirestore()
        const itemCollection = catId ? dataBase.collection('items').where('catId', '==', catId) : dataBase.collection('items')

        itemCollection.get()
            .then((querySnapShot) => {

                if (querySnapShot.size == 0) {
                    console.log('No hay documentos en el query')
                    return
                }

                console.log('Hay documentos')
                setArrayItems(querySnapShot.docs.map((doc) => ({ id: doc.id, ...doc.data() })))
                setLoading(false);
            })

    }, [catId]);

    return (

        <>
            {
                loading ?
                    <Container style={{ minHeight: '100vh' }}>
                        <Row >
                            <Box sx={{ width: '100%' }}>
                                <LinearProgress />
                            </Box>
                        </Row>
                    </Container>
                    :
                    <Container style={{ minHeight: '100vh' }}>
                        <>
                            {<ItemList arrayItems={arrayItems} />}
                        </>
                    </Container>
            }
        </>
    )
}