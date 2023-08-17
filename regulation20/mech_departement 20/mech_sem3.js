// (A) SCORE SHEET & SUBJECTS
var scores = {
  Select: 0,
  O: 10, Aplus: 9, A: 8, Bplus: 7, B: 6 , RA:0, SA:0, W:0
};
var subjects = [
  "MA3351 - T&PDE",
   "ME3391 - ENGINEERING THERMODYNAMICS", "CE3391 - FLUID MECHANICS AND MACHINERY",
   "ME3351 Engineering Mechanics","ME3392 Engineering Materials and Metallurgy",
   "ME3393 Manufacturing Processes","ME8381 - COMPUTER AIDED MACHINE DRAWING",
   "ME3381 Computer Aided Machine Drawing","GE3361 Professional Development"
   
];

// (B) DRAW HTML
window.addEventListener("load", () => {
  // (B1) GET HTML ELEMENTS
  let wrapper = document.getElementById("gpa-wrap"),
      table = document.createElement("table");

  // (B2) CREATE HTML GPA TABLE
  let row = table.insertRow(),
      cell = null, selector = null, option = null;
  for (let s of subjects) {
    cell = row.insertCell();
    cell.innerHTML = s;
    cell = row.insertCell();
    selector = document.createElement("select");
    cell.appendChild(selector);
    for (let grade in scores) {
      option = document.createElement("option");
      option.innerHTML = grade;
      option.value = scores[grade];
      selector.appendChild(option);
      selector.onchange = gpacalc;
    }
    row = table.insertRow();
  }
  wrapper.appendChild(table);
  gpacalc();
});

// (C) CALCULATE FUNCTION
var gpacalc = () => {
  let all = document.querySelectorAll("#gpa-wrap select"),
      score = 0;
  for (let i of all) {
    // use parseFloat if decimals are involved.
    score += parseInt(i.value);
  }
  document.getElementById("gpa-total").innerHTML = score
  document.getElementById("gpa-average").innerHTML = score / all.length;
};