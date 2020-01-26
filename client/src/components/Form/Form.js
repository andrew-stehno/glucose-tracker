import React from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

const FormPage = props => {
  return (
    <Form>
      <FormGroup>
        <Label for="exampleEmail">Email</Label>
        <Input
          type="email"
          name="email"
          id="exampleEmail"
          placeholder="with a placeholder"
        />
      </FormGroup>
    </Form>
  );
};

export default FormPage;
