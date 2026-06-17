import { Button, Col, Form, Input, Row, Typography } from "antd"

const { Title } = Typography

const Register = () => {
  return (
    <main className="auth">
      <div className="container">
        <div className="card p-3">
          <Title level={2} className="text-center">Register</Title>
          <Form layout='vertical'>
            <Row>
              <Col span={24}>
                <Form.Item label='Full Name' required>
                  <Input type='text' size="large" placeholder="Enter your full name" name="fullName" />
                </Form.Item>
              </Col>
              <Col span={24}>
                <Form.Item label='Email' required>
                  <Input type='email' size="large" placeholder="Enter your email" name="email" />
                </Form.Item>
              </Col>
              <Col span={24}>
                <Form.Item label='Password' required>
                  <Input.Password size="large" placeholder="Enter password" name="password" />
                </Form.Item>
              </Col>
              <Col span={24}>
                <Form.Item label='Confirm Password' required>
                  <Input.Password size="large" placeholder="Confirm password" name="confirmPassword" />
                </Form.Item>
              </Col>
              <Col span={24}>
                <Button size="large" block type="primary">Register</Button>
              </Col>
            </Row>
          </Form>
        </div>
      </div>
    </main>
  )
}

export default Register
