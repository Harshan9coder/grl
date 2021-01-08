import React from "react";
import ".//../Styles/inbox.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretLeft,
  faCaretRight,
  faExclamation,
  faTrash,
  faFilePdf,
  faTags,
  faFileDownload,
} from "@fortawesome/free-solid-svg-icons";
import Emailsnames from "./Emailsnames";

function Inbox() {
  return (
    <div className="main-inbox">
      <div className="inbox1">
        <div className="bnt-area">
          <button className="btn btn-primary butt">COMPOSE</button>
        </div>
        <hr />
        <div className="mail-items">
          <p>Email</p>
          <p>Sent</p>
          <p>Draft</p>
          <p>Trash</p>
          <p>Important</p>
          <p>spam</p>
          <p>starred</p>
        </div>
        <hr />
        <div className="lab">
          <label>Label</label>
        </div>
        <hr />
        <div className="mail-items">
          <div className="flex-item">
            <span className="dosts dclr1"></span>
            <p>Family</p>
          </div>
          <div className="flex-item">
            <span className="dosts dclr2"></span>
            <p>Teachers</p>
          </div>
          <div className="flex-item">
            <span className="dosts dclr3"></span>
            <p>Friends</p>
          </div>
        </div>
      </div>
      <div className="inbox2">
        <div className="inbox-part">
          <div>
            <p>inbox</p>
          </div>
          <div className="inbox-icons">
            <FontAwesomeIcon className="left-icon" icon={faCaretLeft} />
            <FontAwesomeIcon className="right-icon" icon={faCaretRight} />
          </div>
        </div>
        <hr />
        <input
          type="text"
          placeholder="Search Email"
          className="search-email"
        />
        <hr />

        {/* <div className="inbox-mail-names">
          <div>
            <p>#</p>
          </div>
          <div>
            <p>marjorie Runlfsdoottir</p>
            <p>marjorie Runlfsdoottir</p>
          </div>
          <div>
            <p>22-05-17</p>
          </div>
        </div> */}
        <div className="email-overflow">
          <Emailsnames className="email-color" />
          <Emailsnames />
          <Emailsnames />
          <Emailsnames />
          <Emailsnames />
          <Emailsnames />
          <Emailsnames />
          <Emailsnames />
          <Emailsnames />
          <Emailsnames />
          <Emailsnames />
          <Emailsnames />
        </div>
      </div>
      <div className="inbox3">
        <div className="email-items">
          <div>
            <FontAwesomeIcon className="left-icon" icon={faFileDownload} />
            <FontAwesomeIcon className="left-icon" icon={faExclamation} />
            <FontAwesomeIcon className="left-icon" icon={faTrash} />
            <FontAwesomeIcon className="left-icon" icon={faFilePdf} />
            <FontAwesomeIcon className="left-icon" icon={faTags} />
          </div>
          <div>
            <FontAwesomeIcon className="left-icon" icon={faCaretRight} />
          </div>
        </div>
        <hr />
        <div className="sub-item">
          <div>
            <p className="email-head"> quae aperiam quia </p>
          </div>
          <div>
            <p className="family-btn">Family</p>
          </div>
        </div>
        <hr />
        <div className="email-details">
          <div>
            <p>#</p>
          </div>
          <div>
            <p>
              Marjorie Runolfsdottir{" "}
              <span className="mail-add">&lt;Reynold76hotmail.com&gt;</span>
            </p>
          </div>
          <div>
            <p className="mail-add">22-5-17</p>
          </div>
        </div>
        <div className="email-body">
          <p className="email-body-text">
            Consequatur occaecati id est. Quis et fuga voluptate distinctio sit.
            Modi dolore inventore quam autem asperiores in placeat. Porro quam
            perspiciatis eos exercitationem non quisquam cumque esse. Vero
            molestiae enim possimus tempora est sapiente voluptate officiis. Sed
            tenetur tempore qui. Quae amet et beatae eum repellendus est et sed.
            Perspiciatis dolore cupiditate eaque error dolores doloribus. Quos
            cum iste sit delectus qui dicta quo saepe. Quaerat repudiandae sequi
            aliquam et maiores sunt saepe qui.
          </p>
        </div>

        <hr />
        <div className="reply">
          <p>click here to reply</p>
        </div>
        <hr />
      </div>
      ``
    </div>
  );
}

export default Inbox;
