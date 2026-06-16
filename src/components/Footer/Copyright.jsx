import { Col, Row, Typography } from "antd"

const { Paragraph } = Typography

const Copyright = () => {

  const year = new Date().getFullYear();

  return (
    <footer className="bg-primary py-2">
      <div className="container">
        <Row>
          <Col span={24} className="text-center">
            <Paragraph className="text-light mb-0">&copy; {year}. All Right Reserved. </Paragraph>
          </Col>
        </Row>
      </div>
    </footer>
  )
}

export default Copyright
