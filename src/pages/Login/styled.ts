import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
export const FormContainer = styled.div`
  background: #ffffff;
  border: 1px solid #f0f0f0;
  border-radius: 5px;
  padding: 36px 58px 53px 58px;
  display: flex;
  margin: 40px 0 100px 0;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  h4 {
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 23px;
    text-align: center;
    letter-spacing: -0.005em;
    color: #000;
    margin-bottom: 40px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  label {
    font-size: 12px;
    color: #000;
    margin-bottom: 8px;
  }
`;
export const Input = styled.input`
  width: 297px;
  height: 41px;
  font-family: inherit;
  font-size: 14px;
  padding-left: 15px;
  outline: none;
  margin-bottom: 40px;
`;
export const Button = styled.button`
  padding: 12px 62px;
  background: #428af5;
  border-radius: 5px;
  border: 0px;
  color: #fff;
  font-family: inherit;
  font-weight: bold;
  cursor: pointer;

  :disabled,
  [disabled] {
    cursor: not-allowed !important;
  }
`;
