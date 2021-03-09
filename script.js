const list = document.querySelector(".list");

const rankHighBtn = document.getElementById("rankUp");

const rankLowBtn = document.getElementById("rankDown");

const nameHighBtn = document.getElementById("nameUp");

const nameLowBtn = document.getElementById("nameDown");

const apps = [
  {
    image: "icon/netflix.png",
    name: "Netflix",
    rank: 6,
  },
  {
    image: "icon/disney.png",
    name: "Disney +",
    rank: 3,
  },
  {
    image: "icon/zoom.png",
    name: "Zoom",
    rank: 1,
  },
  {
    image: "icon/tiktok.png",
    name: "TikTok",
    rank: 2,
  },
  {
    image: "icon/youtube.png",
    name: "YouTube",
    rank: 4,
  },
  {
    image: "icon/facebook.png",
    name: "Facebook",
    rank: 7,
  },
  {
    image: "icon/gmail.png",
    name: "Gmail",
    rank: 9,
  },
  {
    image: "icon/instagram.png",
    name: "Instagram",
    rank: 5,
  },
  {
    image: "icon/spotify.png",
    name: "Spotify",
    rank: 8,
  },
];

const displayGraph = (arr) => {
  list.innerHTML = "";

  for (let i = 0; i < arr.length; i++) {
    let item = arr[i];

    let item_ele = document.createElement("div");
    item_ele.classList.add("list-item");

    let imageDiv = document.createElement("div");
    imageDiv.classList.add("item-img");
    let img = document.createElement("img");
    img.src = `${item.image}`;
    imageDiv.appendChild(img);

    item_ele.appendChild(imageDiv);

    let nameDiv = document.createElement("div");
    nameDiv.classList.add("item-name");
    nameDiv.innerText = item.name;

    item_ele.appendChild(nameDiv);

    let rankDiv = document.createElement("div");
    rankDiv.classList.add("item-rank");
    rankDiv.innerText = item.rank;

    item_ele.appendChild(rankDiv);

    list.appendChild(item_ele);
  }
};

displayGraph(apps);

let click = false;
rankHighBtn.addEventListener("click", () => {
  let arr = sortRankByAtt(apps, "rank");
  displayGraph(arr);
});

rankLowBtn.addEventListener("click", () => {
  let arr = sortDownRankByAtt(apps, "rank");
  displayGraph(arr);
});

nameHighBtn.addEventListener("click", () => {
  let arr = sortRankByAtt(apps, "name");
  displayGraph(arr);
});

nameLowBtn.addEventListener("click", () => {
  let arr = sortDownRankByAtt(apps, "name");
  displayGraph(arr);
});

const sortRankByAtt = (arr, Attr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    let arrObj = arr[i];
    let arr_index = i;
    for (let j = i; j < arr.length; j++) {
      if (arr[j][Attr] < arrObj[Attr]) {
        arrObj = arr[j];
        arr_index = j;
      }
    }
    arr[arr_index] = arr[i];
    arr[i] = arrObj;
  }
  return arr;
};

const sortDownRankByAtt = (arr, Attr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    let arrObj = arr[i];
    let arr_index = i;
    for (let j = i; j < arr.length; j++) {
      if (arr[j][Attr] > arrObj[Attr]) {
        arrObj = arr[j];
        arr_index = j;
      }
    }
    arr[arr_index] = arr[i];
    arr[i] = arrObj;
  }
  return arr;
};
