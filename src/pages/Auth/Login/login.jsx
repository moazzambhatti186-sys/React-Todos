import { Button, Col, Form, Input, Row, Typography } from "antd"

const { Title } = Typography

const Login = () => {
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
                    <Input type='email' size="large" placeholder="Enter your email" name="email" />
                  </Form.Item>
                </Col>
                <Col span={24}>
                  <Form.Item label='Password' required>
                    <Input.Password size="large" placeholder="Enter password" name="password" />
                  </Form.Item>
                </Col>
                <Col span={24}>
                  <Button size="large" block type="primary">Login</Button>
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
