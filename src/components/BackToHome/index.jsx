import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleLeft } from "@fortawesome/free-solid-svg-icons";

const BackToHome = ({icon = faChevronCircleLeft, size = "2x", ...props}) => {
  return (
    <Link {...props}>
      <FontAwesomeIcon icon={icon} size={size} /> Back to home
    </Link>
  );
};

BackToHome.propTypes = {
  icon: PropTypes.node,
  size: PropTypes.string,
}

export default BackToHome;
