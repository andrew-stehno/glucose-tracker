import React, { useState } from 'react';
import InputForm from "../InputForm";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const AlertHelper = (props) => {
    super();
    this.state = {
      modal: props.initialModalState
    };

    this.toggle = this.toggle.bind(this);
  

  toggle() {
    this.setState({
      modal: !this.state.glucoseLevel
    });
  }
  // const {
  //   buttonLabel,
  //   className
  // } = props;

  // const [modal, setModal] = useState(false);

  // const toggle = () => setModal();

  // const externalCloseBtn = <button className="close" style={{ position: 'absolute', top: '15px', right: '15px' }} onClick={toggle}>&times;</button>;
  return (
    <div>
      <Button onClick={() => this.saveToDatabase()}>Submit</Button>
      <Modal isOpen={this.state.glucoseLevel} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Glucose Levels</ModalHeader>
      {/* <Modal isOpen={modal} toggle={toggle} className={className} external={externalCloseBtn}>
        <ModalHeader>Glucose levels</ModalHeader> */}
        <ModalBody>
          <b>
              <br>Less than 100 mg/dL: Consider eating a small snack with about 15 grams of carbs to keep your blood sugar
                from getting too low. Examples include a half cup of fruit juice, a small piece of fruit, or four crackers.
                Glucose tabs are also a good choice.</br>

                <br>100 to 160 mg/dL: Unless your doctor tells you otherwise, this is a good goal range for your blood sugar.</br>

                <br>180 to 250 mg/dL: You’re getting close to the danger zone for higher blood sugar levels.
                Consider some of the tips for lowering your blood sugar level. If you’re about to exercise, this is an acceptable range.</br>

                <br>250 mg/dL or higher: Check your urine for ketones using a dipstick.
                If ketones are present, call your doctor to see if you need to seek medical attention.</br>
                <br>Sometimes, doctors recommend you maintain tighter or higher blood sugar goals.
                that’s why it’s important to talk with your doctor about goals for your glucose levels.</br>
          </b>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>Do Something</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default AlertHelper;