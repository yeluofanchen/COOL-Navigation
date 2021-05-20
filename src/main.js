console.log("---jQuery 玩耍时间---");

const $webSiteList = $(".webSiteList");
const $lastLi = $webSiteList.find("li.lastLi");

// 拿到 localStorage 中存储的
const x = localStorage.getItem("hashArr");
const xObject = JSON.parse(x);

let hashMapArr = xObject;

if (hashMapArr.length < 2) {
  hashMapArr = [
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
}

const simplifyUrl = (url) => {
  return url
    .replace("https://", "")
    .replace("http://", "")
    .replace("www.", "")
    .replace(".com", "")
    .replace(/\/.*/, ""); // 删除 / 开头的内容
};

const render = () => {
  // 第一次进入函数时, remove 也执行了, 通过 DOM 操作了 HTML , 不过 hashMapArr 的数据还在 JS 内存中, 所以立即就渲染了出来
  $webSiteList.find("li:not(.lastLi").remove();
  hashMapArr.forEach((node, index) => {
    console.log(index);

    const $li = $(`<li>
    <div class="webSite">
      <div class="logo">${node.logo}</div>
      <div class="link">${simplifyUrl(node.link)}</div>
      <div class="close">
        <svg class="icon">
          <use xlink:href="#icon-close"></use>
        </svg>
      </div>
    </div>
  </li>`).insertBefore($lastLi);
    $li.on("click", () => {
      window.open(node.url);
    });

    $li.on("click", ".close", function (e) {
      console.log("我点击了这里");
      e.stopPropagation(); // 阻止冒泡
      hashMapArr.splice(index, 1);
      render();
    });
  });
};

render();

$(".addButton").on("click", () => {
  let url = window.prompt("请问你要添加的网址是啥?");

  if (url.indexOf("http") !== 0) {
    url = "https://" + url;
  }
  console.log(url);

  hashMapArr.push({
    logo: simplifyUrl(url)[0],
    url: url,
    link: url,
  });
  render();

  // let dele = window.prompt("请问你确定要删除这个网址么?");
});

window.onbeforeunload = () => {
  console.log("123");
  const string = JSON.stringify(hashMapArr);
  // console.log(string);

  localStorage.setItem("hashArr", string);
};
