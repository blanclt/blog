import { BiChevronDown, BiSearch, BiChevronRight } from "react-icons/bi";

const datas = [
  {
    title: "HOME",
  },
  {
    title: "ABOUT",
    icon: <BiChevronDown />,
    children: ["Out Team", "Subscribe", "Contact"],
  },
  {
    title: "GUIDES",
    icon: <BiChevronDown />,
    children: [
      {
        title: "Start up",
      },
      {
        title: "Android",
        icon: <BiChevronDown />,
        children: ["Games", "Coding", "Mobie", "Funding"],
      },
      {
        title: "iOS",
        icon: <BiChevronDown />,
        children: ["Music", "Bitcoin", "Discrupt"],
      },
    ],
  },
  {
    title: "DESIGN",
    icon: <BiChevronDown />,
    children: ["Mockup", "Heath", "Themes"],
  },
  {
    title: "SHOP",
  },
];

export default datas;
