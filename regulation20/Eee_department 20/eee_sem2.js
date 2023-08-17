// (A) SCORE SHEET & SUBJECTS
var scores = {
  Select: 0,
  O: 10, Aplus: 9, A: 8, Bplus: 7, B: 6 , RA:0, SA:0, W:0
};
var subjects = [
  "HS3251 Professional English - II", "MA3251 Statistics and Numerical Methods", 
  "PH3202 Physics for Electrical Engineering", "BE3252 - BASIC CIVIL AND MECHANICAL ENGINEERIN",
  "GE3251 Engineering Graphics","EE3251 Electric Circuit Analysis",
  "NCC Credit Course Level1","GE3252 த􀯘ழ􀯠ம் ெதா􀯯ல்􀯎ட்ப􀯚ம்/ Tamils and Technology",
  "GE3271 Engineering Practices Laboratory","EE3271 Electric Circuits Laboratory","GE3272 Communication Laboratory / Foreign Language"
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