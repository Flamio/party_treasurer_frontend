import 'bootstrap/dist/css/bootstrap.min.css';
import { Form } from 'react-bootstrap';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';

import { Footer, Navigation, ErrorModal } from './components';
import { Page } from './components/Page';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StepsActions } from './actions';

function App() {
  const [errorModal, showErrorModal] = useState(false)
  const dispatcher = useDispatch()

  const steps = useSelector(s => s.steps)

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();

    if (form.checkValidity() === false) {
      showErrorModal(true)
      dispatcher(StepsActions.setValidated(true))
      event.stopPropagation();
      return
    }

    dispatcher(StepsActions.setValidated(false))

    dispatcher(StepsActions.nextStep())
  }

  const onErrorModalClose = () => {
    showErrorModal(false);
  }

  return (
    <Form id="form" noValidate validated={steps.validated} onSubmit={handleSubmit}>
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
      <ErrorModal show={errorModal} handleClose={onErrorModalClose} />
    </Form>
  );
}

export default App;
