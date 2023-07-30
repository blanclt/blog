import classNames from "classnames/bind";
import styles from "./button.module.scss";
const cx = classNames.bind(styles);

function Button({ item, name, className, onClick }) {
  const button = cx(
    { [className]: className },
    {
      ["coding"]: item?.type === "CODING" || item?.type === "STARTUP",
      ["games"]: item?.type === "GAMES",
      ["movies"]: item?.type === "MOVIES" || item?.type === "APPLE",
    }
  );
  return (
    <button onClick={onClick} className={button}>
      {name}
    </button>
  );
}

export default Button;
