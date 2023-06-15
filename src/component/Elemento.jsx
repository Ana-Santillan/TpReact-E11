import { React, useEffect } from 'react';
import { ListGroup, Card, Col, Button, Form } from 'react-bootstrap';
import "./Elemento.css"

const Elemento = ({ Noticia }) => {
    return (
        <Col xl={6} lg={4} md={6} className='d-flex flex-fill'>
            <ListGroup.Item className='mt-3 item'>
                <Card className='text-center Card'>
                    <Card.Header className='titleCard'><h1>{Noticia.title}</h1></Card.Header>
                    <Card.Body>
                        <h3>Descripción</h3>
                        <div className='overflow-scroll' style={{ maxHeight: '100px' }}>
                            {Noticia.description}
                        </div>
                        <h3>Contenido</h3>
                        <div className='overflow-scroll' style={{ maxHeight: '200px' }}>
                            {Noticia.content}
                        </div>
                    </Card.Body>
                </Card>
            </ListGroup.Item>
        </Col>
    );
};

export default Elemento;