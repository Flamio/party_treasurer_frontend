import { useEffect } from "react"
import { Button, Form, Table } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { UsingActions } from "../actions"

export const Usings = () => {

    const participants = useSelector(s => s.participants)
    const products = useSelector(s => s.products)
    const usings = useSelector(s => s.usings)
    const dispacth = useDispatch()

    useEffect(() => {
        dispacth(UsingActions.clear())
        console.log(usings)
        participants.map(p => dispacth(UsingActions.init(p, usings[p] ? usings[p] : [""])))
    }, [])

    return (<Table responsive>
        <thead>
            <tr>
                <th>
                    Участник
                </th>
                <th>
                    Что употреблял
                </th>
            </tr>
        </thead>
        <tbody>
            {
                participants.map((p, index) =>
                    <tr key={index}>
                        <td>{p}</td>
                        <td>
                            {
                                usings[p] && usings[p].map((usPr, index) =>
                                    <Form.Select
                                        onChange={(e) => dispacth(UsingActions.edit(p, index, e.target.value))}
                                        required className="mb-2" value={usPr}>
                                        <option></option>
                                        {
                                            products.map((pr, index) =>
                                                <option key={index}>{pr.name}</option>
                                            )
                                        }
                                    </Form.Select>
                                )
                            }
                            <Button style={{ width: '70px' }} onClick={() => dispacth(UsingActions.add(p))} className="mt-2" variant="outline-primary">+</Button>
                            <Button style={{ width: '70px' }} onClick={() => dispacth(UsingActions.remove(p))} className="ms-2 mt-2" variant="outline-danger">-</Button></td>
                    </tr>)
            }
        </tbody>
    </Table>)
}