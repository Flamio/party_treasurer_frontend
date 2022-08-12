import { Nav, Container } from "react-bootstrap"
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from "react-redux/es/exports";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { StepsActions } from "../actions";

export const Navigation = () => {

    const steps = useSelector((state) => state.steps)
    const dispacth = useDispatch();

    return (
        <Navbar bg="dark" variant="dark" expand="lg" style={{position: 'fixed', zIndex:100}}>
            <Container>
                <Navbar.Toggle />
                <Navbar.Brand>PT</Navbar.Brand>
                <Navbar.Collapse>
                    <Nav
                        activeKey={steps.current}
                        onSelect={(selectedKey) => dispacth(StepsActions.setStep(selectedKey))}
                    >
                        {
                            steps.names.map((s, index) =>
                                <Nav.Link key={index} eventKey={index}>{s}</Nav.Link>)
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}