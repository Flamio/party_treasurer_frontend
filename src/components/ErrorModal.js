import { Modal, Button } from "react-bootstrap"


export const ErrorModal = (props) => {
    return (<Modal  show={props.show} onHide={props.handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>Ошибка!</Modal.Title>
        </Modal.Header>
        <Modal.Body>Заполни все поля!</Modal.Body>
        <Modal.Footer>
            <Button variant="primary" onClick={props.handleClose}>
                оке
            </Button>
        </Modal.Footer>
    </Modal>)
}