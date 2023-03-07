import { Button, Card, Col, Row } from "react-bootstrap";


export default function TaskCard() {
    return (
        <Card className='taskCard'>
            <Row>
                <Col xs={8}>
                    <h1>Name Sur.</h1>
                </Col>
                <Col xs={4}>
                    <Button variant='danger' >Cancel</Button>
                </Col>
            </Row>
            <p>Pending...</p>
        </Card>
    )
}