const SubmitButton = () => (
  <div>
    {/* <!-- progress button --> */}
    <div id="progress-button" className="progress-button">
      {/* <!-- button with text --> */}
      <button>
        <span>Submit</span>
      </button>

      {/* <!-- svg circle for progress indication --> */}
      <svg className="progress-circle" width="70" height="70">
        <path d="m35,2.5c17.955803,0 32.5,14.544199 32.5,32.5c0,17.955803 -14.544197,32.5 -32.5,32.5c-17.955803,0 -32.5,-14.544197 -32.5,-32.5c0,-17.955801 14.544197,-32.5 32.5,-32.5z" />
      </svg>

      {/* <!-- checkmark to show on success --> */}
      <svg className="checkmark" width="70" height="70">
        <path d="m31.5,46.5l15.3,-23.2" />
        <path d="m31.5,46.5l-8.5,-7.1" />
      </svg>

      {/* <!-- cross to show on error --> */}
      <svg className="cross" width="70" height="70">
        <path d="m35,35l-9.3,-9.3" />
        <path d="m35,35l9.3,9.3" />
        <path d="m35,35l-9.3,9.3" />
        <path d="m35,35l9.3,-9.3" />
      </svg>
    </div>
    {/* <!-- /progress-button --> */}
    <style jsx>{`
      .progress-button {
        position: relative;
        display: inline-block;
        text-align: center;
      }
      .progress-button button {
        cdisplay: block;
        margin: 0 auto;
        padding: 0;
        width: 250px;
        height: 70px;
        border: 2px solid #1ecd97;
        border-radius: 40px;
        background: transparent;
        color: #1ecd97;
        letter-spacing: 1px;
        font-size: 18px;
        font-family: "Montserrat", sans-serif;
        -webkit-transition: background-color 0.3s, color 0.3s, width 0.3s,
          border-width 0.3s, border-color 0.3s;
        transition: background-color 0.3s, color 0.3s, width 0.3s,
          border-width 0.3s, border-color 0.3s;
        cursor: pointer;
      }
      .progress-button button:hover {
        background-color: #1ecd97;
        color: #fff;
      }
      .progress-button button:focus {
        outline: none;
      }
      .progress-button svg {
        position: absolute;
        top: 0;
        left: 50%;
        -webkit-transform: translateX(-50%);
        transform: translateX(-50%);
        pointer-events: none;
      }
      .progress-button svg path {
        opacity: 0;
        fill: none;
      }
      .progress-button svg.progress-circle path {
        stroke: #1ecd97;
        stroke-width: 5;
      }
      .progress-button svg.checkmark path,
      .progress-button svg.cross path {
        stroke: #fff;
        stroke-linecap: round;
        stroke-width: 4;
        -webkit-transition: opacity 0.1s;
        transition: opacity 0.1s;
      }
      .loading.progress-button button {
        width: 70px; /* make a circle */
        border-width: 5px;
        border-color: #ddd;
        background-color: transparent;
        color: #fff;
      }
      .loading.progress-button span {
        -webkit-transition: opacity 0.15s;
        transition: opacity 0.15s;
      }
      .loading.progress-button span,
      .success.progress-button span,
      .error.progress-button span {
        opacity: 0; /* keep it hidden in all states */
      }
      /* Transition for when returning to default state */
      .progress-button button span {
        -webkit-transition: opacity 0.3s 0.1s;
        transition: opacity 0.3s 0.1s;
      }
      .success.progress-button button,
      .error.progress-button button {
        -webkit-transition: background-color 0.3s, width 0.3s, border-width 0.3s;
        transition: background-color 0.3s, width 0.3s, border-width 0.3s;
      }
      .success.progress-button button {
        border-color: #1ecd97;
        background-color: #1ecd97;
      }

      .error.progress-button button {
        border-color: #fb797e;
        background-color: #fb797e;
      }
      .loading.progress-button svg.progress-circle path,
      .success.progress-button svg.checkmark path,
      .error.progress-button svg.cross path {
        opacity: 1;
        -webkit-transition: stroke-dashoffset 0.3s;
        transition: stroke-dashoffset 0.3s;
      }
      .elastic.progress-button button {
        -webkit-transition: background-color 0.3s, color 0.3s,
          width 0.3s cubic-bezier(0.25, 0.25, 0.4, 1), border-width 0.3s,
          border-color 0.3s;
        -webkit-transition: background-color 0.3s, color 0.3s,
          width 0.3s cubic-bezier(0.25, 0.25, 0.4, 1.6), border-width 0.3s,
          border-color 0.3s;
        transition: background-color 0.3s, color 0.3s,
          width 0.3s cubic-bezier(0.25, 0.25, 0.4, 1.6), border-width 0.3s,
          border-color 0.3s;
      }

      .loading.elastic.progress-button button {
        -webkit-transition: background-color 0.3s, color 0.3s,
          width 0.3s cubic-bezier(0.6, 0, 0.75, 0.75), border-width 0.3s,
          border-color 0.3s;
        -webkit-transition: background-color 0.3s, color 0.3s,
          width 0.3s cubic-bezier(0.6, -0.6, 0.75, 0.75), border-width 0.3s,
          border-color 0.3s;
        transition: background-color 0.3s, color 0.3s,
          width 0.3s cubic-bezier(0.6, -0.6, 0.75, 0.75), border-width 0.3s,
          border-color 0.3s;
      }
    `}</style>
  </div>
);

export default SubmitButton;