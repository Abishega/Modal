import React, { useState, useRef } from "react";
import styled from "styled-components";
import Wrapper from "../Wrappers/wrapper";
import Button from "../widgets/button";
import Modal from "../widgets/modal";

const Card = styled.div`
  background: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 10px;
  margin-bottom: 30%;
    margin-right: 20%;
`;

const GetName = (props) => {
  // const [showModal, setShowModal] = useState(false);
  const nameInputRef = useRef();
  const [visibleModal, setVisibility] = useState(false);

  const addName = (event) => {
    if (nameInputRef.current.value === "") {
      setVisibility(true);
    }
  };
  const onClosingModal = () => {
    setVisibility(false);
  };

  return (
    <Wrapper>

      { visibleModal &&
      <Wrapper>
        <Modal
          title={"Error"}
          message={"Please Enter Your Name"}
          name={nameInputRef}
          onClose={onClosingModal}
        />
        <Modal
          title={"Error"}
          message={"Please Enter Your Name"}
          name={nameInputRef}
          onClose={onClosingModal}
        />
      </Wrapper>
}

      <Card>
        <h4>It will throw Error Modal If submitted empty Input</h4>
        <div>
          <label>Give your Name</label>
          <input ref={nameInputRef} type="text" />
          <Button type="submit" onClick={addName}>
              Enter
          </Button>
        </div>
      </Card>
    </Wrapper>
  );
};
export default GetName;
