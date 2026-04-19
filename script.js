function calculate() {
  let high = Number(document.getElementById("high").value);
  let low = Number(document.getElementById("low").value);
  let price = Number(document.getElementById("price").value);

  let signal = "";

  if (price > high) {
    signal = "BUY";
  } else if (price < low) {
    signal = "SELL";
  } else {
    signal = "NO TRADE";
  }

  document.getElementById("result").innerText = "Signal: " + signal;
}
