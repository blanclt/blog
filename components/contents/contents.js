import data from "../../data/data-content";
import Item from "./item";
import classes from "./contents.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(classes);
function Contents() {
  const latestItem = [...data].pop();
  const newData = [...data].splice(0, data.length - 1).reverse();
  return (
    <section className={cx("content")}>
      <div className={cx("main-content")}>
        <Item large item={latestItem} />
      </div>
      <ul className={cx("wrapper")}>
        {newData.map((item) => (
          <Item key={item.title} item={item} />
        ))}
      </ul>
    </section>
  );
}

export default Contents;
