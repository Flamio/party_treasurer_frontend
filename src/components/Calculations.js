import { useEffect, useState } from "react"
import { Alert, Row, Spinner, Table } from "react-bootstrap"
import { useSelector } from "react-redux"
import { Backend } from "../Backend"

export const Calculations = () => {

    const participants = useSelector(s => s.participants)
    const usings = useSelector(s => s.usings)
    const products = useSelector(s => s.products)

    const [response, setResponse] = useState({})

    useEffect(() => {
        const dto = {
            participants: participants,
            products: products.map(p => ({ name: p.name, price: p.price })),
            purchases: participants.reduce((map, obj) => ({
                ...map,
                [obj]: products.filter(p => p.owner === obj).map(p => p.name)
            }), {}),
            uses: usings
        }
        console.log(dto)

        Backend.calculate(dto)
            .then(data => {
                if (data.error === true) {
                    return
                }
                console.log(data)
                setResponse(data)
            })

    }, [])

    return (response.calculations ?
        <div>
            {
                response.unusableProducts.length > 0 &&
                <Alert variant="warning">
                    Есть неиспользуемые продукты:
                    <ul>
                            {response.unusableProducts.map(u => <li>{u}</li>)}
                    </ul>
                    Они не учитывались при расчете
                </Alert>
            }
            <Row>
                <h1 style={{ textAlign: 'center' }}>Рассчет</h1>
                <Table responsive striped bordered hover>
                    <thead>
                        <tr>
                            <th></th>
                            {participants.map(p => <th key={p}>{p}</th>)}
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products
                                .filter(p => !response.unusableProducts.find(u => u === p.name))
                                .map((p, index) =>
                                    <tr key={index}>
                                        <td><b>{p.name}</b></td>
                                        {
                                            participants.map(part => {
                                                if (!response.calculations)
                                                    return;
                                                const price = response.calculations
                                                    .filter(r => r.name === part)
                                                    .map(r => r.productMap[p.name])[0]
                                                console.log(price)
                                                return (<td style={{ textAlign: 'right' }}>{price ? price : 0}</td>)
                                            })
                                        }
                                    </tr>
                                )
                        }
                        <tr>
                            <td><b>Итого</b></td>
                            {
                                participants.map((p, index) => {
                                    if (!response.calculations) {
                                        return
                                    }
                                    const values = response.calculations
                                        .find(r => r.name === p)

                                    console.log(values.productMap)

                                    return <td style={{ textAlign: 'right' }} key={index}>{Object.values(values.productMap).reduce((acc, val) => acc + val, 0).toFixed(2)}</td>
                                }
                                )
                            }
                        </tr>
                    </tbody>
                </Table>
            </Row>
            {
                response.duties.length == 0 &&
                <Row className="mt-5">
                    <h1> Похоже, никто никому ничего не должен... </h1>
                </Row>
            }
            {
                response.duties.length > 0 &&
                <Row className="mt-5">
                    <h1 style={{ textAlign: 'center' }}>Долги</h1>
                    <Table responsive striped bordered hover>
                        <thead>
                            <tr>
                                <th>Кто</th>
                                <th>Кому</th>
                                <th>Сколько</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                response.duties &&
                                response.duties.map(d =>
                                    <tr>
                                        <td>{d.from}</td>
                                        <td>{d.to}</td>
                                        <td style={{ textAlign: 'right' }}>{d.duty.toFixed(2)}</td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </Table>
                </Row>
            }
        </div> : <div style={{ textAlign: 'center' }}><Spinner animation="border" /></div>
    )
}