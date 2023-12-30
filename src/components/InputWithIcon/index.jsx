import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import "./style.scss";

const InputWithIcon = ({ type, placeholder, icon }) => {
  return (
    <div className="input-with-icon">
      <FontAwesomeIcon className="icon" icon={icon} />
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
