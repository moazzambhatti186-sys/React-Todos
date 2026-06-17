import { Col, Row, Typography } from "antd"
// import { useEffect, useState } from "react"
import { useAuthContext } from "../../../context/Auth"

const { Title } = Typography

const Hero = () => {
    
    // const [user, setUser] = useState({})

    // useEffect(
    //     () => {
    //         const user = JSON.parse(localStorage.getItem('user'))
    //         if (user) {
    //             setUser(user)
    //             console.log('user', user)
    //         }
    //     }, []
    // )
    const {user, setUser} = useAuthContext()

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
