import { faSquareCheck, faSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../App.css";

export default function Checkbox({ checked = false, onClick }) {
  return (
    <div onClick={onclick}>
      {!checked && (
        <div className="checkbox unchecked">
          <FontAwesomeIcon icon={faSquare} />
        </div>
      )}
      {checked && (
        <div className="checkbox checked">
          <FontAwesomeIcon icon={faSquareCheck} />
        </div>
      )}
    </div>
  );
}
