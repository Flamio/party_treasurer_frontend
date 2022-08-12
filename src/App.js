import 'bootstrap/dist/css/bootstrap.min.css';
import { Form } from 'react-bootstrap';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';

import { Footer, Navigation, ErrorModal } from './components';
import { Page } from './components/Page';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { StepsActions } from './actions';

function App() {

  const [validated, setValidated] = useState(false)
  const [errorModal, showErrorModal] = useState(false)
  const dispatcher = useDispatch()

  const handleSubmit = (event) => {
    console.log("dsadf")
    const form = event.currentTarget;
    setValidated(true);
    event.preventDefault();

    if (form.checkValidity() === false) {
      showErrorModal(true)
      event.stopPropagation();
      return
    }

    dispatcher(StepsActions.nextStep())
  }

  const onErrorModalClose = () => {
    showErrorModal(false);
  }

  return (
    <Form id="form" noValidate validated={validated} onSubmit={handleSubmit}>
      <Container fluid>
        <Row>
          <Navigation />
        </Row>
        <Row className='mt-5'>
          <Col>
            <Container className='mt-5'>
              <Page />
            </Container>
          </Col>
        </Row>
        <Row>
          <Footer />
        </Row>
      </Container>
      <ErrorModal show={errorModal} handleClose={onErrorModalClose}/>
    </Form>    
  );
}

export default App;
