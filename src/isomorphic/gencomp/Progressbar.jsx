import React from "react";

function Progressbar() {
  return (
    <div class="progress">
      <p>
        Example 1 - <strong>80%</strong>
      </p>
      <div data-progress="80"></div>
      <p>
        Example 2 - <strong>20%</strong>
      </p>
      <div data-progress="20"></div>
      <p>
        Example 3 - <strong>33%</strong>
      </p>
      <div data-progress="33"></div>
      <p>
        Example 4 - <strong>100%</strong>
      </p>
      <div data-progress="100"></div>
      <p>
        Example 5 - <strong>1%</strong>
      </p>
      <div data-progress="1"></div>
      <p>
        Example 6 - <strong>25.75%</strong>
      </p>
      <div data-progress="25.75"></div>
    </div>
  );
}

export default Progressbar;
