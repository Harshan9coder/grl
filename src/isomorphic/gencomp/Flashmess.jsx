import React from "react";

import './/..//Styles/Ecommerce.scss'

function Flashmess(popos) {
  return (
    <div>
      <div class="alert alert-success my-alret alert-dismissible fade show" role="alert">
        <strong>Hi</strong> Your email and password are correct
        <button
          type="button"
          class="close"
          data-dismiss="alert"
          aria-label="Close"
        >
          <span aria-hidden="true">×</span>
        </button>
      </div>
    </div>
  );
}

export default Flashmess;
