// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"epB2":[function(require,module,exports) {
console.log("----jQuery 玩耍时间----");

var $webSiteList = $(".webSiteList");
var $lastLi = $webSiteList.find("li.lastLi");

// 拿到 localStorage 中存储的
var x = localStorage.getItem("hashArr");
var xObject = JSON.parse(x);

var hashMapArr = xObject;

if (hashMapArr.length < 2) {
  hashMapArr = [{
    logo: "A",
    url: "https://www.bilibili.com/",
    link: "acfun.com"
  }, {
    logo: "B",
    url: "https://www.bilibili.com/",
    link: "bilibili.com"
  }];
}

var simplifyUrl = function simplifyUrl(url) {
  return url.replace("https://", "").replace("http://", "").replace("www.", "").replace(".com", "").replace(/\/.*/, ""); // 删除 / 开头的内容
};

var render = function render() {
  // 第一次进入函数时, remove 也执行了, 通过 DOM 操作了 HTML , 不过 hashMapArr 的数据还在 JS 内存中, 所以立即就渲染了出来
  $webSiteList.find("li:not(.lastLi").remove();
  hashMapArr.forEach(function (node, index) {
    var $li = $("<li>\n    <div class=\"webSite\">\n      <div class=\"logo\">" + node.logo + "</div>\n      <div class=\"link\">" + simplifyUrl(node.link) + "</div>\n      <div class=\"close\">\n        <svg class=\"icon\">\n          <use xlink:href=\"#icon-close\"></use>\n        </svg>\n      </div>\n    </div>\n  </li>").insertBefore($lastLi);
    $li.on("click", function () {
      window.open(node.url);
    });

    $li.on("click", ".close", function (e) {
      // console.log("我点击了这里");
      e.stopPropagation(); // 阻止冒泡
      hashMapArr.splice(index, 1);
      render();
    });
  });
};

render();

$(".addButton").on("click", function () {
  var url = window.prompt("请问你要添加的网址是啥?");

  if (url.indexOf("http") !== 0) {
    url = "https://" + url;
  }
  // console.log(url);

  hashMapArr.push({
    logo: simplifyUrl(url)[0],
    url: url,
    link: url
  });
  render();

  // let dele = window.prompt("请问你确定要删除这个网址么?");
});

window.onbeforeunload = function () {
  console.log("123");
  var string = JSON.stringify(hashMapArr);
  // console.log(string);

  localStorage.setItem("hashArr", string);
};

$(document).on("keypress", function (e) {
  // const key = e.key, 可以简写, 当变量名和属性名是一样的时候;
  var key = e.key;

  for (var i = 0; i < hashMapArr.length; i++) {
    if (hashMapArr[i].logo.toLowerCase() === key) {
      window.open(hashMapArr[i].url);
    }
  }
});
},{}]},{},["epB2"], null)
//# sourceMappingURL=main.3b9762b6.map