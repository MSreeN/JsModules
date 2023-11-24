const budget = Object.freeze([
  { value: 250, description: "Sold old TV 📺", user: "jonas" },
  { value: -45, description: "Groceries 🥑", user: "jonas" },
  { value: 3500, description: "Monthly salary 👩‍💻", user: "jonas" },
  { value: 300, description: "Freelancing 👩‍💻", user: "jonas" },
  { value: -1100, description: "New iPhone 📱", user: "jonas" },
  { value: -20, description: "Candy 🍭", user: "matilda" },
  { value: -125, description: "Toys 🚂", user: "matilda" },
  { value: -1800, description: "New Laptop 💻", user: "jonas" },
]);

budget[0].description = "sold mobile phone";

const spendingLimits = {
  jonas: 1500,
  matilda: 100,
};

const getLimit = (user) => spendingLimits?.[user] ?? 0;

const add = function (value, description, user = "jonas") {
  user = user.toLowerCase();

  if (value <= getLimit(user)) {
    // budget.push({ value: -value, description, user });
  }
};
add(10, "Pizza 🍕");
add(100, "Going to movies 🍿", "Matilda");
add(200, "Stuff", "Jay");

const checkExpenses = function () {
  for (const entry of budget) {
    // let lim;
    // if (spendingLimits[entry.user]) {
    //   lim = spendingLimits[entry.user];
    // } else {
    //   lim = 0;
    // }
    if (entry.value < -getLimit(entry.user)) {
      entry.flag = "limit";
    }
  }
};
checkExpenses();

console.log(budget);

const logBigExpenses = function (limit) {
  let output = "";
  for (const entry of budget) {
    entry.value <= -limit
      ? (output += `${entry.description.slice(-2)} / `)
      : "";
    // if (entry.value <= -limit) {
    //   output += `${entry.description.slice(-2)} / `; // Emojis are 2 chars
    // }
  }
  output = output.slice(0, -2); // Remove last '/ '
  console.log(output);
};

logBigExpenses(500);

//Imperative programming is about specifying "how to do", like specifying each and every step
//Declarative programming is about describing "what to do", like specifying what to do like using map method on array, we tell map method to loop through the array but we don't tell it how to do it
