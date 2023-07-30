import Contents from "@/components/contents/contents";
import Discover from "@/components/discover/discover";
import Posts from "@/components/posts/post";
import { Fragment } from "react";

function HomePage() {
  return (
    <Fragment>
      <Contents />
      <Discover />
      <Posts title="Sam Sung"/>
    </Fragment>
  );
}

export default HomePage;
