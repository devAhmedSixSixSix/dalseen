// this component is used at [contact] pages 

"use client"
import { Col, Container, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import CustomBTN from "./CustomBTN";

const FormTwo = () => {
  return (
    <section className="py-4">
      <Container>
        <Form>
          <Row>
            <Col xs={12} md={4}>
              <h5 className="text-black-50">إتصل بنا</h5>
              <h2 className="fw-bolder">دعنا نقوم بمساعدتك.<br/> تواصل معنا الآن!</h2>
              <div className="my-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-facebook ms-3"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-twitter ms-3"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-instagram ms-3"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-linkedin ms-3"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </div>
            </Col>
            <Col xs={12} md={8}>
              <Row>
                <Col xs={12} md={6}>
                  <Form.Group className="mb-3">
                    <Form.Control type="text" placeholder="الاسم" className="rounded-5"/>
                  </Form.Group>
                </Col>
                <Col xs={12} md={6}>
                  <Form.Group className="mb-3">
                    <Form.Control type="text" placeholder="البريد الالكتروني" className="rounded-5"/>
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Control as="textarea" rows={8} placeholder="الرسالة" />
                  </Form.Group>
                  <CustomBTN text="ابدأ الان" arrow={true} />
                </Col>
              </Row>
            </Col>
          </Row>
        </Form>
      </Container>
    </section>
  )
}

export default FormTwo;

