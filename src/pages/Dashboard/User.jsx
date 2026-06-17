// import About from "../Frontend/About/about"
// import Contact from "../Frontend/Contact/contact"
// import Hero from "../Frontend/Hero/hero"
// import Home from "../Frontend/Home/home"

import { Col, Row, Typography } from "antd"

const {Title} = Typography

const User = () => {
    return (
        <>
            {/* <Hero />
            <Home />
            <About />
            <Contact /> */}

<div className="container">
    <Row>
        <Col span={24} className="text-center">
        <Title level={1}>User Dashboard</Title>
        </Col>
    </Row>
</div>
        </>

    )
}

export default User
