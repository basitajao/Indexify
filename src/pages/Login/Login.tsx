import React, { SyntheticEvent, useState } from "react";
import { Container, FormContainer, Input, Button, Form } from "./styled";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { login } from "../../actions/action";
import { useDispatch, useSelector } from "react-redux";
import { UserState } from "../../reducers";
import { RootState } from "../../store";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const [email, setEmail] = useState<string>("amin@gmail.com");

  const { loading } = useSelector<RootState, UserState>(
    (state) => state.userAuth
  );

  const navigateTo = () => navigate("/");

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    dispatch(login(email, navigateTo));
  };
  return (
    <Container>
      <Logo />
      <FormContainer>
        <h4>Log In to your account</h4>
        <Form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <label htmlFor="email">Email Address</label>
          <Input
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Enter email address"
          />
          <Button disabled={loading || !email}>
            {loading ? "Loading..." : "Login"}
          </Button>
        </Form>
      </FormContainer>
    </Container>
  );
};

export default Login;
