// メニュー
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
    name: "パン",
    category: "sweet",
    img: "パン.jpg",
    price: 450,
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
        </div>
      `;

      menulist.insertAdjacentHTML("beforeend", content);
    }
  }
}

const params = new URLSearchParams(window.location.search);
const category = params.get("category");

if (category) {
  displayMenu(category);

  button.forEach((button) => {
    if(button.dataset.category === category) {
      button.classList.add("active");
    }
  });
} else {
  displayMenu("all");
  button.forEach((button) => {
    if(button.dataset.category === "all") {
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

// お問い合わせフォーム
function submitForm(event) {
  event.preventDefault();

  console.log("お問い合わせを送信しました");

  window.location.href = "contact_finish.html";
}

const form = document.querySelector(".form-box");

if (form) {
  form.addEventListener("submit", submitForm);
}
