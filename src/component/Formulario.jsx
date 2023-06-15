import { React, useState, useEffect } from 'react';
import { Form, Card, Button } from 'react-bootstrap';
import Lista from './Lista';

const Formulario = () => {
    const [nombre, setNombre] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [categoria, setCategoria] = useState("");
    const [listaNoticias, setListaNoticias] = useState([]);
    const apiKey = "pub_241782e226ccca37315e12e270a9ef6fd4259"

    const traerNoticias = async () => {
        try {
            //setMostrarSpinner(true);
            //peticion get
            const respuesta = await fetch(`https://newsdata.io/api/1/news?apikey=${apiKey}&category=${categoria}`);
            const dato = await respuesta.json();
            console.log(dato);
            setListaNoticias(dato.results);
            /* console.log(dato[0]);
            setPersonaje(dato[0]);
            setMostrarSpinner(false); */
        } catch (error) {
            console.log(error);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        traerNoticias();
    }

    return (
        <>
            <Form onSubmit={handleSubmit}>
                <Card className='fondoCard'>
                    <Card.Body>
                        <Card.Title className='text-center'>
                            <h3>Pelicula</h3>
                        </Card.Title>
                        <Form.Group className='mt-3'>
                            <Form.Select onChange={(e) => setCategoria(e.target.value)} value={categoria}>
                                <option value="business">business</option>
                                <option value="entertainment">entertainment</option>
                                <option value="environment">environment</option>
                                <option value="food">food</option>
                                <option value="health">health</option>
                                <option value="politics">politics</option>
                                <option value="science">science</option>
                                <option value="sports">sports</option>
                                <option value="technology">technology</option>
                                <option value="top">top</option>
                                <option value="tourism">tourism</option>
                                <option value="world">world</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className='mt-3 text-end'>
                            <Button variant="primary" type="submit">Buscar</Button>
                        </Form.Group>
                    </Card.Body>
                </Card>
            </Form>
            <Lista listaNoticias={listaNoticias}></Lista>
        </>

    );
};

export default Formulario;