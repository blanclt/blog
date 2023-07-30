import classNames from "classnames/bind";
import styles from "./discover.module.scss";
const cx = classNames.bind(styles);
import ItemDiscover from "./itemDiscover";
import datas from "@/data/discover";

function Discover() {
  return (
    <div className={cx("discover")}>
      <h1 className={cx("title")}>Discover</h1>
      <ul className={cx("wrapper")}>
        {datas.map(data => <ItemDiscover key={data.title} data={data}/>)}
        
      </ul>
    </div>
  );
}

export default Discover;
