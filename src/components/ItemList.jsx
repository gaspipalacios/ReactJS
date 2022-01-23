import Item from "./Item";

import 'bootstrap/dist/css/bootstrap.min.css';
import { Row } from "react-bootstrap";

export default function({arrayItems}){
    
    return(
        <>
        <Row className="justify-content-center">
            <>
                {arrayItems.map(item => <Item prod={item}/>)}
            </>
        </Row>
        </>
    );
}