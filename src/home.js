import React from "react";
import { useNavigate } from "react-router-dom";

const Home = (props) => {
  const { loggedIn, email } = props;
  const navigate = useNavigate();

  const onButtonClick = () => {
    //
  };
  return (
    <div>
      <div className="mainContainer">
        <div className={"titleContainer"}>
          <div>Welcome!</div>
        </div>
        <div>Tis a home page</div>
        <div className={"buttonContainer"}>
          <input
            type="button"
            className={"inputButton"}
            onClick={onButtonClick}
            value={loggedIn ? "Log out" : "Log in"}
          />
          {loggedIn ? <div>Your email address is {email}</div> : <div />}
        </div>
      </div>
    </div>
  );
};

export default Home;