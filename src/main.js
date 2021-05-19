console.log("---jQuery 玩耍时间---");

const $webSiteList = $(".webSiteList");
const $lastLi = $webSiteList.find("li.lastLi");

const render = () => {
  // 第一次进入函数时, remove 也执行了, 通过 DOM 操作了 HTML , 不过 hashMapArr 的数据还在 JS 内存中, 所以立即就渲染了出来
  $webSiteList.find("li:not(.lastLi").remove();
  hashMapArr.forEach((node) => {
    const $li = $(`<li>
  <a href="${node.url}">
    <div class="webSite">
      <div class="logo">${node.logo[0]}</div>
      <div class="link">${node.link}</div>
    </div>
  </a>
  </li>`).insertBefore($lastLi);
  });
};

const hashMapArr = [
  {
    logo: "A",
    url: "https://www.bilibili.com/",
    link: "acfun.com",
  },
  {
    logo: "B",
    url: "https://www.bilibili.com/",
    link: "bilibili.com",
  },
];

render();

$(".addButton").on("click", () => {
  let url = window.prompt("请问你要添加的网址是啥?");

  if (url.indexOf("http") !== 0) {
    url = "https://" + url;
  }
  console.log(url);

  hashMapArr.push({
    logo: url[0],
    url: url,
    link: url,
  });
  // $webSiteList.find("li:not(.lastLi").remove();
  render();
});
