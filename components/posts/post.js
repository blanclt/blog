import Button from "../button/button";
import classes from "./posts.module.scss";
import classNames from "classnames/bind";
import Image from "next/image";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import {
  postDatas,
  getMobie,
  getWatch,
  getRetail,
  getFinance,
  getItem,
} from "@/data/posts-data";
import { categorySamsung } from "@/data/category-data";
import { useEffect, useState } from "react";
import Link from "next/link";
const cx = classNames.bind(classes);

const itemDataFunctions = {
  all: () => postDatas,
  Mobie: getMobie,
  Watch: getWatch,
  Retail: getRetail,
  Finance: getFinance,
};

function getItemData(name) {
  const itemDataFunction = itemDataFunctions[name];
  if (itemDataFunction) {
    return itemDataFunction();
  } else {
    return [];
  }
}

function Posts({ title }) {
  const [page, setPage] = useState(0);

  const data = getItem(getItemData("all"), page);
  const [posts, setPosts] = useState(data);
  
  const handleNextPage = () => {
    setPage((pev) => pev + 1);
  };
  const handlePevPage = () => {
    setPage((pev) => pev - 1);
  };
  const handleGetData = (data) => {
    const itemData = getItemData(data);
    setPosts(getItem(itemData, page));
  };
  return (
    <aside className={cx("post")}>
      <div className={cx("select")}>
        <h1 className={cx("title")}>{title}</h1>
        <ul className={cx("list")}>
          {categorySamsung.map((data) => (
            <li key={data.name}>
              <Button
                className="games"
                onClick={() => handleGetData(data.name)}
                name={data.name}
              />
            </li>
          ))}
        </ul>
        <div className={cx("button")}>
          <button>
            <BiChevronLeft  onClick={handlePevPage} />
          </button>
          <button onClick={handleNextPage}>
            <BiChevronRight />
          </button>
        </div>
      </div>
      <ul className={cx("content")}>
        {posts.map((item) => (
          <li key={item.title}>
            <Image src={item.image} alt={item.title} width={150} height={100} />
            <Link href="/">
              <p>{item.type}</p>
              <h3>{item.title}</h3>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default Posts;
