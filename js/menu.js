const menulist = document.querySelector(".menu-list");
const buttons = document.querySelectorAll(".menu-button");

const menus = [
  {
    name: "シュトーレン",
    category: "limited",
    img: "シュトーレン.jpg",
    price: 750,
  },
  {
    name: "パネトーネ",
    category: "limited",
    img: "パネトーネ.jpg",
    price: 550,
  },
  {
    name: "こだわり食パン",
    category: "bread",
    img: "こだわり食パン.jpg",
    price: 400,
  },
  {
    name: "マーブル食パン(苺)",
    category: "bread",
    img: "マーブル食パン(苺).jpg",
    price: 450,
  },
  {
    name: "マーブル食パン(チョコ)",
    category: "bread",
    img: "マーブル食パン(チョコ).jpg",
    price: 450,
  },
  {
    name: "マーブル食パン(抹茶)",
    category: "bread",
    img: "マーブル食パン(抹茶).jpg",
    price: 450,
  },
  {
    name: "マーブル食パン(あんこ)",
    category: "bread",
    img: "マーブル食パン(あんこ).jpg",
    price: 450,
  },
  {
    name: "ハムチーズクロワッサン",
    category: "savoury",
    img: "ハムチーズクロワッサン.jpg",
    price: 350,
  },
  {
    name: "マヨコーンパン",
    category: "savoury",
    img: "マヨコーンパン.jpg",
    price: 300,
  },
  {
    name: "クロワッサン",
    category: "sweet",
    img: "クロワッサン.jpg",
    price: 250,
  },
  {
    name: "シナモンロール",
    category: "sweet",
    img: "シナモンロール.jpg",
    price: 300,
  },
];

function displayMenu(category) {
  console.log("選択されたカテゴリー:", category);
  menulist.innerHTML = "";

  for (let i = 0; i < menus.length; i++) {

    if (category === "all" || menus[i].category === category) {

      const { name, img, price } = menus[i];

      const content = `
        <div>
          <img src="img/${img}" alt="">
          <h2>${name}</h2>
          <p>${price}円</p>
          <button class="favorite-button">♡</button>
        </div>
      `;

      menulist.insertAdjacentHTML("beforeend", content);
    }
  }
  
  const favoriteButtons = document.querySelectorAll(".favorite-button");

  favoriteButtons.forEach((button) => {
    button.addEventListener("click", () => {
      button.classList.toggle("favorite");

      if (button.classList.contains("favorite")) {
        button.textContent = "♥";
      } else {
        button.textContent = "♡";
      }
    });
  });
}

const params = new URLSearchParams(window.location.search);
const category = params.get("category");

if (category) {
  displayMenu(category);

  buttons.forEach((button) => {
    if (button.dataset.category === category) {
      button.classList.add("active");
    }
  });
} else {
  displayMenu("all");

  buttons.forEach((button) => {
    if (button.dataset.category === "all") {
      button.classList.add("active");
    }
  });
}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const category = button.dataset.category;

    displayMenu(category);

    buttons.forEach((button) => {
      button.classList.remove("active");
    });

    button.classList.add("active");
  });
});

