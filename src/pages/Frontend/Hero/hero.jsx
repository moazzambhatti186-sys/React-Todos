import { Col, Row, Typography } from "antd"

const { Title } = Typography

const Hero = () => {
    return (
        <main>
            <div className="container">
                <Row>
                    <Col span={24} className="text-center">
                        <Title level={1}>Hero</Title>
                    </Col>
                </Row>
            </div>
        </main>
    )
}

export default Hero
