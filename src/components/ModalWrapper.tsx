import React, { ReactNode, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { ReactComponent as CloseIcon } from "../assets/close.svg";

interface Prop {
  show: boolean;
  onClose: () => void;
  children: ReactNode;
}

export const Modal = ({ show, onClose, children }: Prop) => {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const modalContent = show ? (
    <Container>
      <CloseButtonContainer>
        <ModalContainer>
          <CloseButton onClick={() => onClose()}>
            <CloseIcon />
          </CloseButton>
          <div>{children}</div>
        </ModalContainer>
      </CloseButtonContainer>
    </Container>
  ) : null;

  if (isBrowser) {
    return ReactDOM.createPortal(
      modalContent,
      document.getElementById("modal-root")!
    );
  } else {
    return null;
  }
};

const CloseButtonContainer = styled.div`
  padding: 0 40px;
  position: relative;
`;

const ModalContainer = styled.div`
  background: #ffffff;
  border: 1px solid #f0f0f0;
  box-sizing: border-box;
  border-radius: 5px;
  font-family: inherit;
  width: 500px;
`;
const Container = styled.div`
  position: fixed;
  background: rgba(0, 17, 41, 0.5);
  width: 100vw;
  height: 100vh;
  display: flex;
  z-index: 200;
  justify-content: center;
  align-items: center;
`;
const CloseButton = styled.button`
  position: absolute;
  background: none;
  right: 0;
`;

export const ModalRoot = styled.div`
  position: absolute;
  top: 0;
  width: 100vw;
  height: 100vh;
  z-index: 999;
  background: rgba(0, 17, 41, 0.5);
`;
