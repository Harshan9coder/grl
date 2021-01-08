import React from "react";

import girl from ".//../media/girl.jpg";

function Chatbox() {
  return (
    <div>
      <div className="main-chat">
        <div className="first-chat">
          <div className="search">
            <div>serch contact </div>
            <div>+</div>
          </div>

          <div className="image-set">
            <img className="girl-img" src={girl} alt="fireSpot" />

            <div>jao smith</div>
            <div className="time-color"> 10 hours age</div>
          </div>
          <div className="image-set">
            <img className="girl-img" src={girl} alt="fireSpot" />

            <div>jao smith</div>
            <div className="time-color"> 10 hours age</div>
          </div>
          <div className="image-set">
            <img className="girl-img" src={girl} alt="fireSpot" />

            <div>jao smith</div>
            <div className="time-color"> 10 hours age</div>
          </div>

          <div className="image-set">
            <img className="girl-img" src={girl} alt="fireSpot" />

            <div>jao smith</div>
            <div className="time-color"> 10 hours age</div>
          </div>

          <div className="btn-space">
            <button className="btn-space-b">compose</button>
          </div>
        </div>

        <div className="second-chat">
          <div className="right-heading"> jao smith</div>

          <div>
            <hr />

            <div className="right-chats">
              <div className="chat-message">ee</div>
              <img className="girl-img-chat" src={girl} alt="fireSpot" />
            </div>
            <div className="time-test">16days</div>

            <div className="right-chats">
              <div className="chat-message">l</div>
              <img className="girl-img-chat" src={girl} alt="fireSpot" />
            </div>
            <div className="time-test">16days</div>

            <div className="right-chats">
              <div className="chat-message">ok i wil come</div>
              <img className="girl-img-chat" src={girl} alt="fireSpot" />
            </div>
            <div className="time-test">16days</div>

            <div className="right-chats">
              <div className="chat-message">ok i wil come</div>
              <img className="girl-img-chat" src={girl} alt="fireSpot" />
            </div>
            <div className="time-test">16days</div>

            <div className="right-chats">
              <div className="chat-message">sure</div>
              <img className="girl-img-chat" src={girl} alt="fireSpot" />
            </div>
            <div className="time-test">16days</div>

            <div className="right-chats">
              <div className="chat-message">np it is ok</div>
              <img className="girl-img-chat" src={girl} alt="fireSpot" />
            </div>
            <div className="time-test">16days</div>

            <div>
              <image />
            </div>
          </div>
        </div>
      </div>
        <div >
        <p className="footer">Isomorphic @ 2020 Created by RedQ, Inc </p>
        </div>
        
    </div>
  );
}

export default Chatbox;
