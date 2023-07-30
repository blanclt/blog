import classNames from "classnames/bind";
import styles from "./itemDiscover.module.scss";
import { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";
const cx = classNames.bind(styles);
function ItemDiscover({ data }) {
  return (
    <Fragment>
      <Link href="/">
        <Image
          className={cx("image")}
          src={data.image}
          alt={data.title}
          width={190}
          height={130}
        />
        <p className={cx("title")}>
          {data.title}
          <sup>5</sup>
        </p>
      </Link>
    </Fragment>
  );
}

export default ItemDiscover;
