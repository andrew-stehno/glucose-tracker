import React from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";

function InputForm(props) {
  return (
    <Form>
      <FormGroup>
        <Label for="glucose reading">
          <h4>Glucose Levels</h4>
        </Label>
        <Input
          type="text"
          name="glucoseLevel"
          placeholder="mg/dl"
          {...props}
        />
      </FormGroup>
      <Button onClick={props.saveToDatabase}>Submit</Button>
    </Form>
  );
}
export default InputForm;
