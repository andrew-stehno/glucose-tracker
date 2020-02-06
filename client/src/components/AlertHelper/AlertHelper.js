import React, { useState, useEffect } from 'react';
import "./style.css"
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const AlertHelper = (props) => {
  const [messageText, setMessageText] = useState('')



  const less100 = "Less than 100 mg/dL: Consider eating a small snack with about 15 grams of carbs to keep your blood sugar from getting too low. Examples include a half cup of fruit juice, a small piece of fruit, or four crackers. Glucose tabs are also a good choice."
  const more250 = "250 mg/dL or higher: Check your urine for ketones using a dipstick. If ketones are present, call your doctor to see if you need to seek medical attention."
  const middle1 = "100 to 160 mg/dL: Unless your doctor tells you otherwise, this is a good goal range for your blood sugar."
  const middle2 = "180 to 250 mg/dL: You’re getting close to the danger zone for higher blood sugar levels. Consider some of the tips for lowering your blood sugar level. If you’re about to exercise, this is an acceptable range."



  useEffect(() => {
    const bloodSugar = Number.parseInt(props.bsLevel)
    let err;
    if (bloodSugar <= 100) {
      setMessageText(less100)
    } else if (bloodSugar > 101 && bloodSugar < 180) {
      setMessageText(middle1)
    } else if (bloodSugar > 181 && bloodSugar < 249) {
      setMessageText(middle2)
    } else if (bloodSugar >= 250) {
      setMessageText(more250)
    } else (console.log(err))

  }, [])



  return (
    <div>

      <Modal isOpen={props.isOpen} toggle={props.toggle}>
        <ModalHeader toggle={props.toggle}>Glucose Levels</ModalHeader>
        <ModalBody>
          <p>{messageText}</p>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={props.toggle}>Close</Button>{' '}

        </ModalFooter>
      </Modal>
    </div>
  );
}

export default AlertHelper;



