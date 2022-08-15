import { useEffect, useState } from "react"
import { Row, Table } from "react-bootstrap"
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

    return (
        <div>
            <Row>
                <Table responsive striped bordered hover>
                    <thead>
                        <tr>
                            <th></th>
                            {participants.map(p => <th key={p}>{p}</th>)}
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((p, index) =>
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
                                            return (<td>{price ? price : 0}</td>)
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

                                    return <td key={index}>{Object.values(values.productMap).reduce((acc, val) => acc + val, 0).toFixed(2)}</td>
                                }
                                )
                            }
                        </tr>
                    </tbody>
                </Table>
            </Row>
            <Row>

            </Row>
        </div>

    )
}