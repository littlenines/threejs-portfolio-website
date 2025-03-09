import PropTypes from "prop-types";
const CircleText = ({ className = "", text = "" }) => {
  return (
    <svg className={className}
         xmlns="http://www.w3.org/2000/svg"
         xmlLang="en"
         xmlnsXlink="http://www.w3.org/1999/xlink"
         viewBox="0 0 500 500"
    >
      <defs>
        <path id="textcircle"
              d="M250,400 a150,150 0 0,1 0,-300a150,150 0 0,1 0,300Z"
              transform="rotate(12,250,250)"
        />
      </defs>
      <g>
        <text textLength="940">
          <textPath xlinkHref="#textcircle" aria-label={text} textLength="940">
            {text} | {text} | {text} |&#160;
          </textPath>
        </text>
      </g>
    </svg>
  );
};

CircleText.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string,
};

export default CircleText;
