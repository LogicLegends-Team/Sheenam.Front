import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";

const InputWithIcon = ({ type, placeholder, icon }) => {
  return (
    <div>
      <FontAwesomeIcon icon={icon} />
      <input type={type} placeholder={placeholder} />
    </div>
  );
};

InputWithIcon.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  icon: PropTypes.object,
};

export default InputWithIcon;
