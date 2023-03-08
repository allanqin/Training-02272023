const items = [
  {
    name: "apple",
    category: "fruit",
  },
  {
    name: "Cucumber",
    category: "vegetable",
  },
  {
    name: "Banana",
    category: "fruit",
  },
  {
    name: "Celery",
    category: "vegetable",
  },
  {
    name: "orange",
    category: "fruit",
  },
  {
    name: "sausage",
    category: "meat",
  },
  {
    name: "bacon",
    category: "meat",
  },
];

// sort data
const categories = [];
const categoryObj = items.reduce((acc, current) => {
  if (acc[current.category]) {
    acc[current.category].push(current.name);
  } else {
    acc[current.category] = [];
    acc[current.category].push(current.name);
    categories.push(current.category);
  }
  return acc;
}, {});

// getting elements from DOM
const categorySelectEle = document.getElementById("category");
const itemSelectEle = document.getElementById("item");
const title = document.getElementById("title");

// adding event listeners
categorySelectEle.addEventListener("change", (event) => {
  const currentCategory = event.target.value;
  itemSelectEle.innerHTML = "";
  appendOptions(itemSelectEle, categoryObj[currentCategory]);
  title.innerText = categoryObj[currentCategory][0];
});

itemSelectEle.addEventListener("change", (event) => {
  title.innerText = event.target.value;
});

const appendOptions = (parentEle, options) => {
  options.forEach((item, index) => {
    const option = document.createElement("option");
    option.innerText = item;
    option.value = item;
    if (index === 0) {
      option.setAttribute("selected", "");
    }
    parentEle.append(option);
  });
};

const initialize = () => {
  const defaultCategory = categories[0];
  appendOptions(categorySelectEle, categories);
  appendOptions(itemSelectEle, categoryObj[defaultCategory]);
  title.innerText = categoryObj[defaultCategory][0];
};

initialize();

// document.querySelectorAll("div").forEach((item) => {
//   console.log(item);
// });

// console.log(document.querySelector("[selected]").parentNode);

// innerText, textContent

// event listeners: change, click, keydown, keyup, mouse, scroll
