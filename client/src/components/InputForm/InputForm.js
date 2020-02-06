import React from "react";
import "./style.css";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";

function InputForm(props) {
  return (
    <Form ib="form">
      <FormGroup id="formGroup">
        <Label id="label" for="glucose reading">
          <h4>Glucose Levels</h4>
        </Label>
        <Input id="input"
          type="text"
          name="glucoseLevel"
          placeholder="mg/dl"
          {...props}
        />
      </FormGroup>
      <Button id="button" onClick={props.saveToDatabase}>Submit</Button>
    </Form>
  );
}
export default InputForm;
