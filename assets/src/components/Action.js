import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Action = () => {
  const focusDiv = useRef();
  const navigate = useNavigate();
  const [input, setInput] = useState({
    code: "",
  });
  const [generateCode, setGenerateCode] = useState(null);

  // getting inut value
  const handleInputCode = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  // handle for code input
  const handleJoinTheMeeting = () => {
    document.getElementById("jointhemeeting").focus();
  };
  // creating new meeitng
  const handleNewMeeting = () => {};

  // useEffect for focusing input everytime when the page will refresh
  useEffect(() => {
    if (focusDiv.current) focusDiv.current.focus();

    const generateCode = Math.floor(Math.random() * 100000000);
    setGenerateCode(generateCode);
  }, [focusDiv]);

  return (
    <>
      <div style={{ paddingTop: "4.5rem" }}>
        <nav className="navbar navbar-expand-md fixed-top">
          <img
            src="/img/google-meet-icon.png"
            className="logo"
            alt="google meet icon"
          />
          <Link to="#" className="navbar-brand text-dark">
            Google meet
          </Link>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <Link to="#">At a glance</Link>
              </li>
              <li className="nav-item">
                <Link to="#">How it works</Link>
              </li>
              <li className="nav-item">
                <Link to="#">Plan and price</Link>
              </li>
            </ul>
            <ul className="navbar-nav me-0">
              <li className="nav-item sign-in  display-center">
                <Link to="#">Sign in</Link>
              </li>
              <li className="nav-item">
                <button
                  className="btn btn-outline-secondary btn-lg text-info font-weight-bold"
                  onClick={handleJoinTheMeeting}
                >
                  Join the meeting
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="btn btn-info btn-lg text-light font-weight-bold"
                  onClick={handleNewMeeting}
                >
                  Start a meeting
                </button>
              </li>
            </ul>
          </div>
        </nav>
        <div className="jumbotron h-100 d-flex">
          <div className="container w-50">
            <h1 className="font-3rem">
              Premium video meeting. Now it is available for free to everyone.
            </h1>
            <p className="font-20">
              We're redising Google Meet services for secure business meetings
              and making it free for everyone to use.
            </p>
            <ul className="display-center justify-content-start">
              <li className="p-0">
                <Link to={`/meetingId=${generateCode}`}>
                  <button
                    className="btn btn-lg text-light font-weight-bold display-center"
                    style={{ backgroundColor: "#01796b" }}
                  >
                    <span className="material-icons  me-2">video_call</span>
                    New meeting
                  </button>
                </Link>
              </li>
              <li className="ps-3">
                <button
                  className="btn btn-lg text-dark btn-outline-secondary font-weight-bold display-center"
                  style={{ backgroundColor: "#fff" }}
                >
                  <span className="material-icons  me-2">keyboard</span>
                  <input
                    ref={focusDiv}
                    type="text"
                    placeholder="Enter a code"
                    style={{ border: "none", outline: "none" }}
                    id="jointhemeeting"
                    onChange={handleInputCode}
                    name="code"
                    value={input.code}
                  />
                </button>
              </li>
              <li className="text-dark ps-2 font-weight-bold cursor-pointer">
                <Link to={`/meetingId=${input.code}`}>Join</Link>
              </li>
            </ul>
          </div>
          <div className="container w-50">
            <img
              src="/img/google-meet-people.jpg"
              alt="google meet people"
              className="signInImage"
            />
          </div>
        </div>
      </div>
      <div className="container">
        <h6>
          Learn more about {""}
          <span className="learnMore text-info">google meet.</span>{" "}
        </h6>
      </div>
    </>
  );
};

export default Action;
