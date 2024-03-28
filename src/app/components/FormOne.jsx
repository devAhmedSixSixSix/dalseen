// this component is used at [home] pages 

"use client"
import { Col, Container, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form"
import Button from 'react-bootstrap/Button';
import CustomBTN from "./CustomBTN";

const FormOne = () => {
  const customShadowAndBg = {
        boxShadow: "0px 48px 126px -53px rgba(29, 30, 31, .12)",
        backgroundColor: "#FAFAFC"
  }
  
  return (
    <section>
      <Container>
        <div style={customShadowAndBg} className="p-5 my-5 rounded">
          <Form>
            <Row>
              <Col xs={12} md={6} lg={4}>
                <Form.Group className="mb-3">
                  <Form.Control type="text" placeholder="الاسم بالكامل" className="rounded-5"/>
                </Form.Group>
              </Col>
              <Col xs={12} md={6} lg={4}>
                <Form.Group className="mb-3">
                  <Form.Control type="text" placeholder="رقم الهاتف" className="rounded-5"/>
                </Form.Group>
              </Col>
              <Col xs={12} md={6} lg={4}>
                <Form.Group className="mb-3">
                  <Form.Select aria-label="اختر الخيار" className="rounded-5 mb-3">
                    <option>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col xs={12} md={6} lg={4}>
                <CustomBTN text="ابدأ الان" arrow={true} />
              </Col>
            </Row>
          </Form>
        </div>
      </Container>
    </section>
  )
}

export default FormOne
