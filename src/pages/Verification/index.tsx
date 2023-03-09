import { Button, Col, Row } from "antd";
import React from "react";
import DigitInput from "../../components/Verification/DigitInput";
import { CloseCircleFilled } from '@ant-design/icons';

const VerificationPage : React.FC = () => {

  const [digit, setDigit] = React.useState('');
  const onChange = (value: string) => setDigit(value);

  const [render, setRender] = React.useState(false);

  React.useEffect(() => {
    onChange('')
    setRender(false)
  }, [render])


    return (
      <div className="container">
      <h2>Enter your 4 digits verification code</h2>

      <Row>
      <DigitInput value={digit} valueLength={4} onChange={onChange} />
      </Row>
      <Col />
      <Row>
      <Button onClick={() => {setRender(true);}} type="primary" danger>
      <CloseCircleFilled /> CLEAR </Button>
      </Row>
    </div>
    );

}

export default VerificationPage;
