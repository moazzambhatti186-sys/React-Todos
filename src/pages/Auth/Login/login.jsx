import { Button, Col, Form, Input, message, Row, Typography } from "antd"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const { Title } = Typography

const initialState = { email: '', password: '' }
const Login = () => {
  const navigate = useNavigate()

  const [isProcessing, setIsProcessing] = useState(false)
  const [state, setState] = useState(initialState)

  const handleChange = e => setState(
    s => ({ ...s, [e.target.name]: e.target.value })
  )


  const handleLogin = () => {

    let { email, password } = state

    const user = { email, password }

    const users = JSON.parse(localStorage.getItem('Users')) || []

const User = users.find( user => user.email === email && user.password === password )

if(!User){
  message.error("Invalid Credentials")
  setIsProcessing(false)
  return
}

setIsProcessing(true)
localStorage.setItem("user", JSON.stringify(User))
message.success("Login Successful")
setIsProcessing(false)

navigate('/')

  }


  return (
    <main className="auth">
      <div className="auth">
        <div className="container">
          <div className="card p-3">
            <Title level={2} className="text-center">Login</Title>
            <Form layout='vertical'>
              <Row>
                <Col span={24}>
                  <Form.Item label='Email' required>
                    <Input type='email' size="large" placeholder="Enter your email" name="email" onChange={handleChange} />
                  </Form.Item>
                </Col>
                <Col span={24}>
                  <Form.Item label='Password' required>
                    <Input.Password size="large" placeholder="Enter password" name="password" onChange={handleChange} />
                  </Form.Item>
                </Col>
                <Col span={24}>
                  <Button size="large" htmlType="submit" block type="primary" loading={isProcessing} onClick={handleLogin}>Login</Button>
                </Col>
              </Row>
            </Form>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Login
