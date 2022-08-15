import '../css/Footer.css'

import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Button from 'react-bootstrap/esm/Button';
import { useDispatch } from 'react-redux/es/hooks/useDispatch';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { StepsActions } from '../actions';

export const Footer = (props) => {

    const dispatcher = useDispatch();

    const steps = useSelector(s => s.steps)

    return (
        <div className="footer bg-light" style={{ zIndex: 100 }}>
            <Container>
                <Row>
                    <Col lg={6} className='text-center mb-2 mb-lg-0'>
                        {
                            steps.current !== 0 &&

                            <Button size='md' className='float-lg-start' variant='success' style={{ width: 200 }} onClick={() => dispatcher(StepsActions.prevStep())}>Назад</Button>

                        }
                    </Col>
                    <Col lg={6} className='text-center'>
                        {
                            (steps.names.length - 1) !== steps.current &&

                            <Button type='submit'  size='md' disabled={props.invalid} className='float-lg-end' variant='success' style={{ width: 200 }}>Далее</Button>

                        }
                    </Col>
                </Row>
            </Container>
        </div>
    )
}