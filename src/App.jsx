import { Container } from 'react-bootstrap';
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Formulario from './component/Formulario'

function App() {

  return (
    <>
      <Container className='mt-3'>
        <Formulario/>
      </Container>
    </>
  )
}

export default App
