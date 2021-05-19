console.log("---jQuery 玩耍时间---");

const $webSiteList = $(".webSiteList");
const $lastLi = $webSiteList.find("li.lastLi");

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

hashMapArr.forEach((node) => {
  const $li = $(`<li>
  <a href="${node.url}">
  <div class="webSite">
    <div class="logo">${node.logo}</div>
    <div class="link">${node.link}</div>
  </div>
</a>
  </li>`).insertBefore($lastLi);
});

$(".addButton").on("click", () => {
  let url = window.prompt("请问你要添加的网址是啥?");

  if (url.indexOf("http") !== 0) {
    url = "https://" + url;
  }
  console.log(url);

  hashMapArr.push({ logo: url[0], url: url, link: url });
  $webSiteList.find("li:not(.lastLi").remove();
  hashMapArr.forEach((node) => {
    const $li = $(`<li>
    <a href="${node.url}">
    <div class="webSite">
      <div class="logo">${node.logo}</div>
      <div class="link">${node.link}</div>
    </div>
  </a>
    </li>`).insertBefore($lastLi);
  });
});
