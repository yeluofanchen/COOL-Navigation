console.log("---jQuery 玩耍时间---");

$(".addButton").on("click", () => {
  let url = window.prompt("请问你要添加的网址是啥?");

  if (url.indexOf("http") !== 0) {
    url = "https://" + url;
  }
  console.log(url);

  const $webSiteList = $(".webSiteList");
  const $lastLi = $webSiteList.find("li.lastLi");
  const $site = $(`
<a href="${url}">
  <div class="webSite">
    <div class="logo">${url[0]}</div>
    <div class="link">${url}</div>
  </div>
</a>
</li>`).insertBefore($lastLi);
});
