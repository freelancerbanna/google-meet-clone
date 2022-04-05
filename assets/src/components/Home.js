import React from "react";
import { useParams } from "react-router-dom";

const Home = () => {
  const { meetingId } = useParams();
  return (
    <main className="d-flex flex-column homeWrap">
      <div className="gTop  text-light">
        <div className="topRemoteVideo d-flex">
          <div id="meetingContainer" className="w-75 d-none">
            <div className="callWrap" style={{ backgroundColor: "black" }}>
              <div className="videoWrap d-flex flex-wrap " id="users">
                <div id="me" className="userBox display-center flex-column">
                  <h2 className="display-center font-14"></h2>
                  <div className="display-center">
                    <video autoplay muted id="localVideoPlayer"></video>
                  </div>
                </div>
                {/* other user display none */}
                <div
                  id="otherTemplate"
                  className="userbox display-center flex-column d-none"
                >
                  <h2 className="display-center font-14"></h2>
                  <div className="display-center">
                    <video autoplay muted id=""></video>
                    <video
                      autoplay
                      controls
                      muted
                      id=""
                      className="d-none"
                    ></video>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="gTopLeft bg-light text-secondary w-25 align-items-center justify-content-between px-2 d-flex">
          <div className="topLeftParticipantWrap cursor-pointer pt-2">
            <div className="topLeftParticipantIcon">
              <span className="material-icons">people</span>
            </div>
            <div className="topLeftParticipantCount">5</div>
          </div>
          <div className="topLeftChatWrap pt-2 cursor-pointer">
            <span className="material-icons">message</span>
          </div>
          <div className="topLeftTimeWrap"></div>
        </div>
      </div>
      <div className="gBottom bg-light m-0 d-flex justify-content-between align-items-center">
        <div className="bottomLeft d-flex" style={{ height: "10vh" }}>
          <div className="cursor-pointer display-center meetingDetailsButton">
            Meeting details{" "}
            <span className="material-icons">keyboard_arrow_down</span>
          </div>
        </div>
        <div
          className="bottomMiddle d-flex justify-content-center align-items-center"
          style={{ height: "10vh" }}
        >
          <div
            className="micToggleWrap actionIconStyle display-center me-2 cursor-pointer"
            id="micMuteUnmute"
          >
            <span className="material-icons">mic_off</span>
          </div>
          <div className="endCallWrap actionIconStyle display-center me-2 cursor-pointer">
            <span className="material-icons text-danger">call</span>
          </div>
          <div className="videoToggleWrap actionIconStyle display-center cursor-pointer">
            <span className="material-icons">videocam_off</span>
          </div>
        </div>
        <div
          className="bottomRight d-flex justify-content-center align-items-center me-3"
          style={{ height: "10vh" }}
        >
          <div className="presentNowWrap d-flex justify-content-center align-items-center me-5 flex-column cursor-pointer">
            <span className="material-icons">present_to_all</span>
            <div>Present now</div>
          </div>
          <div
            className="optionWrap  display-center cursor-pointer"
            style={{ height: "10vh", position: "relative" }}
          >
            <div className="optionIcon">
              <span className="material-icons">more_vert</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
