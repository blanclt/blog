import classNames from "classnames/bind";
import styles from "./item.module.scss";
import Image from "next/image";
import Link from "next/link";
import Button from "../button/button";
const cx = classNames.bind(styles);
function Item({ item, large, small, className }) {
  let width, height;
  const classes = cx("wrapper", {
    [className]: className,
    large,
    small,
  });

  if (large) {
    width = 430;
    height = 284;
  } else {
    width = 148;
    height = 98;
  }
  return (
    <Link className={classes} href="/">
      <Image
        className={cx("image")}
        src={item.image}
        alt={item.title}
        width={width}
        height={height}
      />
      <div className={cx("content")}>
        <Button className={cx("button")} item={item} name={item.type} />
        <p className={cx("title")}>{item.title}</p>
      </div>
      {large && item.author && (
        <div className={cx("author")}>
          <Image
            className={cx("avatar")}
            src={item.author.image}
            alt={item.author.name}
            width={34}
            height={34}
          />
          <p>{item.author.name}</p>
        </div>
      )}
    </Link>
  );
}

export default Item;
