import React from 'react';
import { ListGroup, Row } from 'react-bootstrap';
import Elemento from './Elemento';

const Lista = ({listaNoticias}) => {
    return (
        <ListGroup>
            <Row>
                {listaNoticias.map((Noticia, index)=>{
                    return (
                        <Elemento Noticia={Noticia} key={index}/>
                    )
                })}
            </Row>
        </ListGroup>
    );
};

export default Lista;