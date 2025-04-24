import React from 'react'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'

const TodoInput = () => {
  return (
    <InputGroup className="my-5">
      <InputGroup.Text>With textarea</InputGroup.Text>
      <Form.Control as="textarea" aria-label="With textarea" />
    </InputGroup>
  )
}

export default TodoInput
