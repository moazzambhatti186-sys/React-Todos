import { Col, Divider, Row, Typography } from "antd"
import { useAuthContext } from "../../context/Auth"

const { Title } = Typography

const User = () => {

    const { user, setUser } = useAuthContext()

    return (
        <main className="bg-primary">
            <div className="container mt-5">
                <Row>
                    <Col span={24} className="text-center py-4">
                        <Title level={1} className="text-light">User Dashboard</Title>
                        <hr style={{ border: '2px solid white' }} />
                    </Col>
                    <Col span={24}>
                        <table class="table text-center">
                            <thead>
                                <tr>
                                    <th scope="col">Full Name</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Password</th>
                                    <th scope="col">Confirm Password</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">UID</th>
                                </tr>
                            </thead>
                            {
                                <tbody>
                                    <tr>
                                        <td> {user.fullName} </td>
                                        <td> {user.email} </td>
                                        <td> {user.password} </td>
                                        <td> {user.confirmPassword} </td>
                                        <td> {user.status} </td>
                                        <td> {user.id} </td>
                                    </tr>
                                </tbody>
                            }
                        </table>
                    </Col>
                </Row>
            </div>
        </main>

    )
}

export default User
