import React, { useState, useRef } from "react";
import styled from "styled-components";
import Wrapper from "../Wrappers/wrapper";
import Button from "../widgets/button";
import ClickableModal from "../widgets/clickableModal";

const Card = styled.div`
  background: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 10px;
`;

const ButtonModal = (props) => {
  const [btnClicked, setBtnClicked] = useState(false);

  const [modalVisibility, setModalVisibility] = useState(false);
  const [modalStack, setModalStack] = useState([]);

  const btnClick = () => {
    setModalVisibility(true);
  };

  const onClosingModal = () => {
    setModalVisibility(false);
  };
  const toOpen = () => {
    setBtnClicked(true);
    setModalStack((modalStack) => [
      ...modalStack,
      <Wrapper>
        <ClickableModal
          title={"Stacked Modal"}
          message={"Another Modal.."}
          toOpen={toOpen}
          close={onClosingModal}
          width= {"80%"}
          height = {"10%"}
        />
      </Wrapper>,
    ]);
  };

  return (
    <Wrapper>
      {modalVisibility && (
        <Wrapper>
          <ClickableModal
            title={"Modal"}
            message={"Your First Modal is opened :)"}
            toOpen={toOpen}
            close={onClosingModal}
            width= {"80%"}
            height = {"15%"}
          />
        </Wrapper>
      )}

      {btnClicked && modalStack}

      <Card>
        <Button type="submit" onClick={btnClick}>
          Click To open Stack Modals
        </Button>
      </Card>
    </Wrapper>
  );
};
export default ButtonModal;
