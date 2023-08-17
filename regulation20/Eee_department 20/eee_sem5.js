// (A) SCORE SHEET & SUBJECTS
var scores = {
  Select: 0,
  O: 10, Aplus: 9, A: 8, Bplus: 7, B: 6 , RA:0, SA:0, W:0
};
var subjects = [
  "EE3501 Power System Analysis", "EE3591 Power Electronics", 
  "EE3503 Control Systems", "Professional Elective I",
  "Professional Elective II","Professional Elective III",
  "EE3511 Power Electronics Laboratory","_____EE3512 Control and Instrumentation Laboratory_____",
 
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