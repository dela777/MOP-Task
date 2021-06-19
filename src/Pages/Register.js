import { useRef, useState } from "react";
import { regex } from "../Components/Helpers/regex";

const Register = (props) => {
  const firstName = useRef("");
  const lastName = useRef("");
  const email = useRef("");
  const password = useRef("");

  const [enteredEmailValid, setEnteredEmailValid] = useState(false);
  const [enteredPasswordValid, setEnteredPasswordValid] = useState(false);
  const [enteredFirstNameValid, setEnteredFirstNameValid] = useState(false);
  const [enteredLastNameValid, setEnteredLastNameValid] = useState(false);

  const onSubmit = (event) => {
    event.preventDefault();
    if (!formValid) {
        console.log('invalid')
      return;
    }

    const registerObj = {
      firstName: firstName.current.value,
      lastName: lastName.current.value,
      email: email.current.value,
      password: password.current.value,
    };
    props.registerUser(registerObj);
  };
  const checkEmail = () => {
    regex.test(email.current.value)
      ? setEnteredEmailValid(true)
      : setEnteredEmailValid(false);
  };

  const checkPassword = () => {
    password.current.value.length >= 5
      ? setEnteredPasswordValid(true)
      : setEnteredPasswordValid(false);
  };
  const checkFirstName = () => {
    firstName.current.value !== ""
      ? setEnteredFirstNameValid(true)
      : setEnteredFirstNameValid(false);
  };
  const checkLastName = () => {
    lastName.current.value !== ""
      ? setEnteredLastNameValid(true)
      : setEnteredLastNameValid(false);
  };
  const formValid =
    enteredEmailValid &&
    enteredFirstNameValid &&
    enteredLastNameValid &&
    enteredPasswordValid
      ? true
      : false;
  return (
    <div className="container ">
      <div className="row d-flex justify-content-center align-items-center">
        <div className="col-8 mt-3 rounded border border-secondary">
          <div>
            <h3 className="text-secondary text-center mt-4">REGISTER</h3>
          </div>
          <form onSubmit={onSubmit}>
            <div className="form-group mt-2">
              <label htmlFor="name" className="text-muted">
                First Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                onChange={checkFirstName}
                ref={firstName}
              ></input>
            </div>
            <div className="form-group mt-2">
              <label htmlFor="lastName" className="text-muted">
                Last Name
              </label>
              <input
                type="text"
                className="form-control"
                id="lastName"
                onChange={checkLastName}
                ref={lastName}
              ></input>
            </div>
            <div className="form-group mt-2">
              <label htmlFor="registerEmail" className="text-muted">
                Email address
              </label>

              <input
                type="email"
                className="form-control"
                id="registerEmai"
                aria-describedby="emailHelp"
                onChange={checkEmail}
                ref={email}
              ></input>
              {!enteredEmailValid && (
                <small id="registerEmai" className="text-danger ">
                  Please enter a valid email!!!
                </small>
              )}
            </div>
            <div className="form-group mt-2">
              <label htmlFor="registerPassword" className="text-muted">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="registerPassword"
                aria-describedby="password"
                onChange={checkPassword}
                ref={password}
              
              ></input>
              {!enteredPasswordValid && (
                <small id="registerPassword" className="text-danger">
                  Password must be greater than 5 characters!
                </small>
              )}
            </div>
            <button
              type="submit"
              className="btn btn-primary w-100 mt-4 mb-4 rounded"
              disabled={!formValid}
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
