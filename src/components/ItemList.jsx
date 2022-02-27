import Item from "./Item";

//BOOTSTRAP Framework
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row} from "react-bootstrap";

export default function ItemList ({ arrayItems }) {

    return (
        <>
            <Row className="justify-content-center pt-3">
                <>
                    {arrayItems.map(item => <Item prod={item} />)}
                </>
            </Row>
        </>
    );
}