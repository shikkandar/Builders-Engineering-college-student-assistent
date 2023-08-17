// (A) SCORE SHEET & SUBJECTS
var scores = {
  Select: 0,
  O: 10, Aplus: 9, A: 8, Bplus: 7, B: 6 , RA:0, SA:0, W:0
};
var subjects = [
  "CS3452 Theory of Computation", "CS3491 Artificial Intelligence and Machine Learning",
   "CS3492 - DBMS", "CS3401 Algorithms",
   "CS3451 Introduction to Operating Systems","GE3451 Environmental Sciences and Sustainability",
   "NCC Credit Course Level 2","CS8461 - OPERATING SYSTEMS LABORATORY",
   "CS3461 Operating Systems Laboratory","CS3481 Database Management Systems Laboratory"
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