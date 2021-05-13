import React, { useRef, useState } from "react";
import ReactDOM from "react-dom";

import styled from "styled-components";
import Button from "./button";

const Card = styled.div`
  background: ${(props) => (props.primary ? props.primary : "white")};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 10px;
  position: fixed;
  top: 30vh;
  left: 10%;
  width: ${(props) => (props.width ? props.width : "80%")};
  z-index: 100;
  overflow: hidden;
`;
const Header = styled.header`
  background: #4f005f;
  padding: 1rem;
`;
const Content = styled.div`
  padding: 1rem;
`;
const Footer = styled.footer`
  padding: 1rem;
  display: flex;
  justify-content: flex-end;
`;

const ModelStructure = (props) => {
  const [close, setClose] = useState(false);

  const onClosing = () => {
    setClose(true);
    props.close();
  };
  const onOpening = () => {
    props.toOpen();
  };

  return (
    <React.Fragment>
      {close === false && (
        <Card width={props.width} height={props.height} primary={"white"}>
          <Header>
            <h2>{props.title}</h2>
          </Header>
          <Content>
            <p>{props.message}</p>
          </Content>
          <Footer>
            <div />
            <Button onClick={onOpening}>Open Another Modal</Button>
            <Button bgcolor={"#D12B2B"} onClick={onClosing}>
              X
            </Button>
          </Footer>
        </Card>
      )}
    </React.Fragment>
  );
};

const ClickableModal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <ModelStructure
          title={props.title}
          message={props.message}
          toOpen={props.toOpen}
          close={props.close}
          width={props.width}
          height={props.height}
        />,
        document.getElementById("modal-root")
      )}
    </React.Fragment>
  );
};

export default ClickableModal;
