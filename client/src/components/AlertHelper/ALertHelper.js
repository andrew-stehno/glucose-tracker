import React from "react";
import { render } from "react-dom";
import { Card, Button, CardTitle, CardText } from 'reactstrap';



const AlertHelper = (props) => {

    render() {
        return (
            <div>
                <Card body>
                    <CardTitle>Here are some general guidelines for blood sugar ranges:</CardTitle>
                    <CardText>
                        <P><br>Less than 100 mg/dL: Consider eating a small snack with about 15 grams of carbs to keep your blood sugar
                            from getting too low. Examples include a half cup of fruit juice, a small piece of fruit, or four crackers.
                            Glucose tabs are also a good choice.</br>

                            <br>100 to 160 mg/dL: Unless your doctor tells you otherwise, this is a good goal range for your blood sugar.</br>

                            <br>180 to 250 mg/dL: You’re getting close to the danger zone for higher blood sugar levels.
                            Consider some of the tips for lowering your blood sugar level. If you’re about to exercise, this is an acceptable range.</br>

                            <br>250 mg/dL or higher: Check your urine for ketones using a dipstick.
                            If ketones are present, call your doctor to see if you need to seek medical attention.</br>

                            <br>Sometimes, doctors recommend you maintain tighter or higher blood sugar goals.
                            hat’s why it’s important to talk with your doctor about goals for your glucose levels.</br></P>
                    </CardText>
                </Card>
            </div>
        )
    };
}

export default AlertHelper;