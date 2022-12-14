import { Button, Form, Table } from "react-bootstrap"
import CurrencyInput from "react-currency-input-field"
import { useDispatch, useSelector } from "react-redux"
import { ProductsActions } from "../actions/ProductsActions"

export const Products = () => {

    const participants = useSelector(s => s.participants)
    const products = useSelector(s => s.products)

    const dispatch = useDispatch()

    const isInvalid = (p, index) => {
        const invalid = products.find((prod, i) => prod.name === p.name && index !== i)
        console.log("product" + invalid)
        return invalid
    }

    return (
        <Table responsive>
            <thead>
                <tr>
                    <th>
                        Название
                    </th>
                    <th>
                        Цена
                    </th>
                    <th>
                        Кто купил
                    </th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {
                    products.map((p, index) => (
                        <tr key={index}>
                            <td><Form.Control
                                required
                                isInvalid={
                                    isInvalid(p, index)
                                }
                                size="sm"
                                placeholder=" Введи название продукта"
                                value={p.name}
                                onBlur={(e) => dispatch(ProductsActions.changeName(e.target.value.trim(), index))}
                                onChange={(e) => dispatch(ProductsActions.changeName(e.target.value, index))} /></td>
                            <td>
                                <CurrencyInput
                                    required
                                    onValueChange={(e) => dispatch(ProductsActions.changePrice(e, index))}
                                    value={p.price}
                                    className="form-control form-control-sm"
                                    placeholder="Введи цену"
                                    decimalsLimit={2}
                                    decimalSeparator="." />
                            </td>
                            <td>
                                <Form.Select
                                    required
                                    defaultValue={""}
                                    onChange={(e) => dispatch(ProductsActions.changeOwner(e.target.value, index))}
                                    size="sm" value={p.owner}>
                                    <option></option>
                                    {participants.map(pt => (
                                        <option>{pt}</option>
                                    ))
                                    }
                                </Form.Select>
                            </td>
                            <td className="text-center">
                                <Button size="sm" onClick={() => dispatch(ProductsActions.remove(index))} variant="danger">-</Button>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </Table>
    )
}