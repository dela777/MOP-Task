import { useRef, useState } from "react";
import { regex } from "../Components/Helpers/regex";

const LogIn = (props) => {
  const emailInput = useRef("");
  const passwordInput = useRef("");

  const [enteredEmailValid, setEnteredEmailValid] = useState(false);
  const [enteredPasswordValid, setEnteredPasswordValid] = useState(false);

  const onSubmit = (event) => {
    event.preventDefault();
    if (!formValid) {
      return;
    }
    const logInObj = {
      email: emailInput.current.value,
      password: passwordInput.current.value,
    };

    props.logInUser(logInObj);
  };

  const checkEmail = () => {
    regex.test(emailInput.current.value)
      ? setEnteredEmailValid(true)
      : setEnteredEmailValid(false);
  };

  const checkPassword = () => {
    passwordInput.current.value.length >= 5
      ? setEnteredPasswordValid(true)
      : setEnteredPasswordValid(false);
  };

  const formValid = enteredEmailValid && enteredPasswordValid ? true : false;
  return (
    <div className="container ">
      <div className="row d-flex justify-content-center align-items-center">
        <div className="col-8 mt-3 rounded border border-secondary">
          <div>
            <h3 className="text-secondary text-center mt-4">SIGN IN</h3>
          </div>
          <form onSubmit={onSubmit}>
            <div className="form-group mt-4">
              <label htmlFor="email" className="text-muted">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                aria-describedby="emailHelp"
                // placeholder="Enter email"
                ref={emailInput}
                onChange={checkEmail}
              ></input>
              {!enteredEmailValid && (
                <small id="emailHelp" className="text-danger ">
                  Please enter a valid email!!!
                </small>
              )}
            </div>
            <div className="form-group mt-4">
              <label htmlFor="password" className="text-muted">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                aria-describedby="password"
                // placeholder="Enter password"
                onChange={checkPassword}
                ref={passwordInput}
              ></input>
              {!enteredPasswordValid && (
                <small id="password" className="text-danger">
                  Password must be greater than 5 characters!
                </small>
              )}
            </div>
            <button
              type="submit"
              className="btn btn-primary w-100 mt-4 mb-4 rounded"
              disabled={!formValid}
            >
              Sign in
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
