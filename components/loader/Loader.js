const Loader = () => (
  <div>
    <div className="container">
      <h3>Loading, please wait.</h3>
      <div className="progress-bar">
        <div className="shadow"></div>
      </div>
    </div>
    <style jsx>
      {`
        .container {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 350px;
          height: 100px;
        }
        .container h3 {
          color: rgba(100, 100, 100, 0.9);
        }
        .container .progress-bar {
          width: 0%;
          height: 5px;
          background: linear-gradient(
            to right,
            rgb(76, 217, 105),
            rgb(90, 200, 250),
            rgb(0, 132, 255),
            rgb(52, 170, 220),
            rgb(88, 86, 217),
            rgb(255, 45, 83)
          );
          margin-top: 10px;
          background-size: 350px 5px;
          border-radius: 10px;
          animation: loading 6s ease-in-out infinite forwards;
        }

        .container .shadow {
          width: 100%;
          height: 40px;
          background: linear-gradient(
            to bottom,
            rgba(100, 100, 100, 0.17),
            rgba(100, 100, 100, 0.1),
            transparent
          );
          transform: skew(45deg) translate(15px, 5px);
        }
        @keyframes loading {
          to {
            width: 100%;
          }
        }
      `}
    </style>
  </div>
);

export default Loader;
