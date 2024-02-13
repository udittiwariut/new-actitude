import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function FormSec() {
  return (
    <>
    <section className="form-box pt-5 mt-5">
      <div className="container">
        <h1 className='text-center'>Want to know more?</h1>
        <p className='text-center'>Sign up for our newsletter here.</p>
        <div className="row d-flex justify-content-center mt-5">
          <div className="col-md-6">
          <Form className=''>
    <Form.Group className="mb-3 breakiog" controlId="exampleForm.ControlInput1">
        <Form.Label>Company</Form.Label>
        <Form.Control type="email" placeholder="(optional)"/>
      </Form.Group>
      <Form.Group className="mb-3 breakiog" controlId="exampleForm.ControlInput2">
        <Form.Label>Name</Form.Label>
        <Form.Control type="email" placeholder="(optional)"/>
      </Form.Group>
      <Form.Group className="mb-3 breakiog" controlId="exampleForm.ControlInput3">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder=""  required/>
      </Form.Group>
      <div className="button-box d-flex justify-content-center">
      <Button variant="primary" className='form-submit' type="submit">
        SIGN UP
      </Button>
      </div>
      
    </Form>
          </div>
        </div>
      </div>
    </section>
      
    </>
  )
}

export default FormSec;
