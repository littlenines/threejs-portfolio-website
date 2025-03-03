import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleLeft } from "@fortawesome/free-solid-svg-icons";

const BackToHome = (icon = faChevronCircleLeft, size = "2x", ...props) => {
  return (
    <Link {...props}>
      <FontAwesomeIcon icon={icon} size={size} /> Back to home
    </Link>
  );
};

export default BackToHome;
