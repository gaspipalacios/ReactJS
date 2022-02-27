import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { getFirestore } from '../firebase/firebase';

//MUI Framework
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

//BOOTSTRAP Framework
import { Container, Row } from "react-bootstrap";
import ItemList from "./ItemList";

export default function ItemListContainer() {

    const [arrayItems, setArrayItems] = useState([]);
    const { catId } = useParams();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const dataBase = getFirestore()
        const itemCollection = catId ? dataBase.collection('items').where('catId', '==', catId) : dataBase.collection('items')

        setLoading(true)

        itemCollection.get()
            .then((querySnapShot) => {

                if (querySnapShot.size === 0) {
                    console.log('No hay documentos en el query')
                    return
                }

                setArrayItems(querySnapShot.docs.map((doc) => ({ id: doc.id, ...doc.data() })))
                setLoading(false);
            })

    }, [catId]);

    return (

        <>
            {
                loading ?
                    <Container style={{ minHeight: '100vh' }}>
                        <Row style={{ paddingTop: '30vh', paddingLeft: '35vw' }}>
                            <Box sx={{ width: '100%' }}>
                                <CircularProgress color="inherit" size='160px'/>
                            </Box>
                        </Row>
                    </Container>
                    :
                    <Container bg="dark" style={{ minHeight: '100vh' }} >
                        <>
                            {<ItemList arrayItems={arrayItems} />}
                        </>
                    </Container>
            }
        </>
    )
}