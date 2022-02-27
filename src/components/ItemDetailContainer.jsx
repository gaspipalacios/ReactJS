import React, { useState, useEffect, useContext } from 'react';
import { context } from '../contexts/CartContext';
import { useParams } from 'react-router-dom';
import { getFirestore } from '../firebase/firebase';
import ItemDetail from './ItemDetail';


export default function ItemDetailContainer() {

    const { addItem } = useContext(context);

    const [showItemCount, setShowItemCount] = useState(true);
    const [initial, setInitial] = useState(0);
    const [arrayItemId, setArrayItemId] = useState([]);

    const { itemId } = useParams();

    useEffect(() => {
        const dataBase = getFirestore()
        const itemCollection = dataBase.collection('items')
        const myItem = itemCollection.doc(itemId)

        myItem.get()
            .then((doc) => {

                if (!doc.exists) {
                    console.log('No existe el doc')
                    return
                }

                setArrayItemId({ id: doc.id, ...doc.data() })
                
            })
            .catch((err) => {
                console.log(err);
            })
          
        
    }, [itemId])

    useEffect(() => {

        arrayItemId.stock > 0 ?
            setInitial(1)
            :
            setInitial(0);
    }, [arrayItemId])
    
    
    const onAdd = quant => {

        addItem(quant, arrayItemId);
        setShowItemCount(false);
    }

    return (

        <>
            {
                <ItemDetail arrayItemId={arrayItemId} onAdd={onAdd} showItemCount={showItemCount} initial={initial} />
            }
        </>

    )
}