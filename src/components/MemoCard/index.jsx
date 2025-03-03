import PropTypes from "prop-types";
import styles from "./MemoCard.module.scss";

const MemoCard = ({ image, alt, text, memoClass = '', ...props }) => {
  return (
    <div className={`${styles.memo_card} ${memoClass}`.trim()} {...props}>
      <img className={styles.memo_card_logo} src={image} alt={alt} />
      <p className={styles.memo_card_title}>{text}</p>
    </div>
  );
};

MemoCard.propTypes = {
  image: PropTypes.string,
  alt: PropTypes.string,
  text: PropTypes.string,
  memoClass: PropTypes.string,
};

export default MemoCard
