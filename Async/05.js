const heading1 = document.querySelector(".heading1");

function changeText(element, text, color, time) {
  setTimeout(() => {
    if (element) {
      element.textContext = text;
      element.style.color = color;
    } else {
      console.log("your element does't exist");
    }
  }, time);
}
changeText(heading1, "one", "red", 3000);
