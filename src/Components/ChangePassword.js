import { useRef, useState } from "react";
import { useHistory } from "react-router";
import { ApiUrl } from "./Helpers/ApiUrl";

const ChangePassword = () => {
  const history = useHistory();
  const currentPassword = useRef("");
  const newPassword = useRef("");
  const confirmedPassword = useRef("");

  const [incorrectInput, setIncorrectInput] = useState(false);

  const [fetchedPassword, setFetchedPassword] = useState("");

  const apiUrl = `${ApiUrl}user`;

  const fetchPassword = () => {
    fetch(apiUrl)
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        setFetchedPassword(response.password);
      });
  };
  fetchPassword();
  const changePasswordHandler = () => {
    setIncorrectInput(false);
    if (
      currentPassword.current.value === fetchedPassword &&
      newPassword.current.value === confirmedPassword.current.value
    ) {
      console.log(confirmedPassword.current.value);

      fetch(apiUrl, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ password: confirmedPassword.current.value }),
      });
      alert("Password has been changed!!!");
    } else {
      setIncorrectInput(true);
    }
  };

  const switchToUserHandler = () => {
    history.push("/profile");
  };

  return (
    <div className="row  d-flex justify-content-center">
      <div className="col-6">
        <form>
          <div className="form-group ">
            <label>Old Password</label>
            <input
              type="password"
              className="form-control"
              aria-describedby="emailHelp"
              placeholder="Old password"
              ref={currentPassword}
            ></input>
            {incorrectInput && (
              <small className="text-danger">Inputs are incorrect</small>
            )}
          </div>
          <div className="form-group">
            <label>New Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="New Password"
              ref={newPassword}
            ></input>
            {incorrectInput && (
              <small className="text-danger">Inputs are incorrect</small>
            )}
          </div>
          <div className="form-group">
            <label>Confirm Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Confirm Password"
              ref={confirmedPassword}
            ></input>
            {incorrectInput && (
              <small className="text-danger">Inputs are incorrect</small>
            )}
          </div>
          <div className="d-flex justify-content-between mt-3">
            <button
              type="button"
              className="btn btn-primary"
              onClick={switchToUserHandler}
            >
              Back
            </button>
            <button
              type="button"
              className="btn btn-danger"
              onClick={changePasswordHandler}
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;
