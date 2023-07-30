export const postDatas = [
  {
    category: "Mobie",
    type: "PLAYSTATION",
    title: "One UI 5 Open Beta program launched for Galaxy Series",
    image: "/images/posts-img/hello.webp",
  },
  {
    category: "Mobie",
    type: "MOCKUP",
    title: "Taiwan gas blasts likely caused by faulty pipe lin",
    image: "/images/posts-img/green-dts.webp",
  },
  {
    category: "Watch",
    type: "SAMSUNG",
    title: "Can a Smart Watch prolong your life for better standards",
    image: "/images/posts-img/red-abstract.webp",
  },
  {
    category: "Watch",
    type: "ZOOM",
    title: "Balmuda — the viral toaster brand — made a portable speaker",
    image: "/images/posts-img/color-ball.webp",
  },
  {
    category: "Retail",
    type: "GAMES",
    title: "Stepping back does not make Sussex safer and at peace",
    image: "/images/posts-img/colorful-girl.webp",
  },
  {
    category: "Retail",
    type: "HEALTH",
    title: "Finely balanced solution to French all problems",
    image: "/images/posts-img/php.webp",
  },
  {
    category: "Finance",
    type: "SAMSUNG",
    title: "Chipmakers caught in crossfire of rising US-China tensions",
    image: "/images/posts-img/blue-spiral.webp",
  },
  {
    category: "Finance",
    type: "APPLE",
    title: "Hunger still quite persists in many of India's tribal people",
    image: "/images/posts-img/girl-ballon.webp",
  },
];

export function getMobie() {
  const mobieItem = postDatas.filter(
    (data) => data.category === "Mobie" || data.category === "Watch"
  );
  return mobieItem;
}

export function getWatch() {
  const watchItem = postDatas.filter(
    (data) => data.category === "Watch" || data.category === "Retail"
  );
  return watchItem;
}

export function getRetail() {
  const retailItem = postDatas.filter(
    (data) => data.category === "Retail" || data.category === "Finance"
  );
  return retailItem;
}

export function getFinance() {
  const financeItem = postDatas.filter(
    (data) => data.category === "Finance" || data.category === "Mobie"
  );
  return financeItem;
}

export function getItem(data,currentPage) {
  if (data.length > 3) {
    const itemsPerPage = 3;
    const startIndex = currentPage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const nextItems = data.slice(startIndex, endIndex);
    currentPage++;
    return nextItems;
  } else return data;
}
                                                                                                                                                                                                                                                                                                                                                                                                                        