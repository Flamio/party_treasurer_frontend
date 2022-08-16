import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { ParticipantsActions } from '../actions';

export const Participants = () => {

    const participants = useSelector((state) => state.participants)
    const dispatch = useDispatch()
    {
        console.log(participants)
    }

    const isInvalid = (p, index) => {
        const invalid = participants.find((part,i) => part === p && index !== i)
        console.log(invalid)
        return invalid
    }

    return (
        <Row>
            {participants.map((p, index) =>
                <Col key={index} lg={6}>
                    <InputGroup className='mb-2 ms-auto' key={index}>
                        <Form.Control
                            isInvalid={
                                isInvalid(p, index)
                            }
                            required
                            value={participants[index]}
                            onBlur={(event) => {dispatch(ParticipantsActions.setName(event.target.value.trim(), index))}}
                            onChange={(event) => { dispatch(ParticipantsActions.setName(event.target.value, index)) }}
                            placeholder='Введи участника' />
                        <Button variant="danger" onClick={() => dispatch(ParticipantsActions.remove(index))}>-</Button>
                    </InputGroup>
                </Col>
            )}
        </Row>
    )
}