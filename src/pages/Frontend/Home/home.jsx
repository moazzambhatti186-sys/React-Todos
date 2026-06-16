import { Col, Row, Typography } from "antd"

const { Title } = Typography

const Home = () => {
    return (
        <main>
            <div className="container">
                <Row>
                    <Col span={24} className="text-center">
                        <Title level={1}>Home</Title>
                    </Col>
                </Row>
            </div>
        </main>
    )
}

export default Home
