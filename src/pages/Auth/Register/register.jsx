import { Button, Col, Form, Input, message, Row, Typography } from "antd"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const { Title } = Typography
const initialState = { fullName: '', email: '', password: '', confirmPassword: '' }

const Register = () => {
  
  const navigate = useNavigate()
  const [isProcessing, setIsProcessing] = useState(false)
  const [state, setState] = useState(initialState)



  const handleChange = e => setState(
    s => ({ ...s, [e.target.name]: e.target.value })
  )



  const handleRegister = () => {

    let { fullName, email, password, confirmPassword } = state

    const id = Math.random().toString(36).slice(2) + Math.random().toString(36).slice(2)

    const user = { fullName, email, password, confirmPassword, id, status: 'active' }

    if (password !== confirmPassword) {
      message.error("Password does not match")
      setIsProcessing(false)
      return
    }
    const users = JSON.parse(localStorage.getItem('Users')) || []


    const isuserFound = users.find(
      user => user.email === email
    )

    if (isuserFound) {
      message.error("User already exist")
      setIsProcessing(false)
      return
    }
    setIsProcessing(true)
    users.push(user)
    localStorage.setItem('Users', JSON.stringify(users))
    message.success("A user successfully registered")
    setIsProcessing(false)

    navigate('/')

  }

  return (
    <main className="auth">
      <div className="container">
        <div className="card p-3">
          <Title level={2} className="text-center">Register</Title>
          <Form layout='vertical'>
            <Row>
              <Col span={24}>
                <Form.Item label='Full Name' required>
                  <Input type='text' size="large" placeholder="Enter your full name" name="fullName" onChange={handleChange} />
                </Form.Item>
              </Col>
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
                <Form.Item label='Confirm Password' required>
                  <Input.Password size="large" placeholder="Confirm password" name="confirmPassword" onChange={handleChange} />
                </Form.Item>
              </Col>
              <Col span={24}>
                <Button size="large" block type="primary" htmlType="submit" loading={isProcessing} onClick={handleRegister}>Register</Button>
              </Col>
            </Row>
          </Form>
        </div>
      </div>
    </main>
  )
}

export default Register
