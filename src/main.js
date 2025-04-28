import "./style.css";



const login = document.getElementById("login");
const username = document.getElementById("username");
const password = document.getElementById("password");
const home = document.getElementById("homePage");
const transactions = document.getElementById("transactionsPage");
const budget = document.getElementById("budgetPage");
const subscription = document.getElementById("subscriptionPage");
const goal = document.getElementById("goalPage");
const report = document.getElementById("reportPage");

if (login) {
  login.addEventListener("click", (e) => {
    e.preventDefault();
    if (username.value == "admin" && password.value == "Password@123") {
      window.location.href = "/FMS/src/Other/home.html";
    } else {
      alert("Invalid username or password");
    }
  });
}

if (home) {
  home.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = "/FMS/src/Other/home.html";
  });
}

if (transactions) {
  transactions.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = "/FMS/src/Other/Transaction.html";
  });
}

if (budget) {
  budget.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = "/FMS/src/Other/Budget.html";
  });
}

if (subscription) {
  subscription.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = "/FMS/src/Other/Subscription.html";
  });
}

if (goal) {
  goal.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = "/FMS/src/Other/goal.html";
  });
}

if (report) {
  report.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = "/FMS/src/Other/report.html";
  });
}
