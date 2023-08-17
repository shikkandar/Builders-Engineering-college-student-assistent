// (A) SCORE SHEET & SUBJECTS
var scores = {
  Select: 0,
  O: 10, A_plus: 9, A: 8, Bplus: 7, B: 6 , C:0
};
var subjects = [
  "HS3151 - PROFESSIONAL ENGLISH - I", "MA3151 - MATRICES AND CALCULUS", "PH3151 - ENGINEERING PHYSICS", 
  "CY3151 - ENGINEERING CHEMISTRY","GE3151 - PSPP","BS3171 - PHYSICS AND CHEMISTRY LABORATORY","GE3171 - PSPP-LAB","BS8161 - PHYSICS AND CHEMISTRY LABORATORY"
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