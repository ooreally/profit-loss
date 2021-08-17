var initialPrice = document.querySelector("#initial-price");
var finalPrice = document.querySelector("#final-price");
var noOfStock = document.querySelector("#stock");
var submitBtn = document.querySelector("#btn");
var outputDiv = document.querySelector(".output");

const calculateProfit = (sp, cp) => {
  var profit = sp - cp;
  var profitPercent = (profit / cp) * 100;
  return [profit, profitPercent];
};

const calculateLoss = (sp, cp) => {
  var loss = cp - sp;
  var lossPercent = (loss / cp) * 100;
  return [loss, lossPercent];
};

const showOutput = (color, text) => {
  outputDiv.style.display = "flex";
  outputDiv.style.color = color;
  outputDiv.innerText = text;
};

const clickHandler = () => {
  var stocks = noOfStock.value;
  var costPrice = initialPrice.value * stocks;
  var sellingPrice = finalPrice.value * stocks;
 
  if (sellingPrice > 0 && costPrice > 0 && stocks > 0) {
    if (sellingPrice > costPrice) {
      var profit = calculateProfit(sellingPrice, costPrice);

      var msg =
        "Yay! You earned a profit of Rs." +
        profit[0] +
        " with profit percentage " +
        profit[1].toFixed(2) +
        "%";

      showOutput("rgb(49, 211, 49)", msg);
    }
     else if (sellingPrice < costPrice) {
      var loss = calculateLoss(sellingPrice, costPrice);

      var msg =
        "Oops! You had a loss of Rs." +
        loss[0] +
        " with loss percentage " +
        loss[1].toFixed(2) +
        "%";

      showOutput("rgb(240, 106, 106) ", msg);
    }
     else {
      var msg = "You neither earned nor lost.";
      showOutput("rgb(49, 211, 49)", msg);
    }
  } else {
    var msg = "Enter Valid Input";
    showOutput("rgb(240, 106, 106)", msg);
  }
};

submitBtn.addEventListener("click", clickHandler);
