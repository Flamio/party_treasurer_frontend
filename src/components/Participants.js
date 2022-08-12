import { useDispatch, useSelector } from 'react-redux/es/exports';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import { ParticipantsActions } from '../actions';

export const Participants = () => {

    const participants = useSelector((state) => state.participants)
    const dispatch = useDispatch()
    {
        console.log(participants)
    }
    return (
        <Row>
            {participants.map((p, index) =>
                <Col key={index} lg={6}>
                    <InputGroup className='mb-2 ms-auto' key={index}>
                        <Form.Control
                            required
                            value={participants[index]}
                            onChange={(event) => { dispatch(ParticipantsActions.setName(event.target.value, index)) }}
                            placeholder='Введи участника' />
                        <Button variant="danger" onClick={() => dispatch(ParticipantsActions.remove(index))}>-</Button>
                    </InputGroup>
                </Col>
            )}
        </Row>
    )
}