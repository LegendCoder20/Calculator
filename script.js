let string = "";
let buttons = document.querySelectorAll(".btn");
console.log(buttons); // All the Buttons which are Selected with ClassName .btn will be Displayed
buttons.forEach((buttonFont) => {
  buttonFont.style.fontFamily = "League Spartan";
  buttonFont.style.fontWeight = 700;
  buttonFont.style.fontSize = "30px";
});
Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML === "=") {
      string = eval(string);
      //   console.log(string);
      document.querySelector("input").value = addCommas(string);
    } else if (e.target.innerHTML === "RESET") {
      console.log(e.target);
      string = "";
      document.querySelector("input").value = string;
    } else if (e.target.innerHTML === "DEL") {
      // string = document.querySelector("input").value.length - 1;
      // document.querySelector("input").value = string;
      if (string.length > 0) {
        string = string.slice(0, -1);
        document.querySelector("input").value = string;
      }
    } else {
      console.log(e.target);
      string = string + e.target.innerHTML;
      document.querySelector("input").value = string;
    }
    function addCommas(number) {
      return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
  });
});
