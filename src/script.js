function toggleSection(id) {
  // Hide all sections
  const sections = document.querySelectorAll(".section");
  sections.forEach(sec => sec.style.display = "none");

  // Show only the clicked one
  const selected = document.getElementById(id);
  selected.style.display = "block";
}

function calculatePercentage() {
  const value = parseFloat(document.getElementById("value").value);
  const percentage = parseFloat(document.getElementById("percentage").value);

  if (isNaN(value) || isNaN(percentage)) {
    document.getElementById("result").innerText = "Please enter valid numbers.";
    return;
  }

  const result = (value * percentage) / 100;
  document.getElementById("result").innerText =
    percentage + "% of " + value + " = " + result.toFixed(2);
}

function resetPercentage() {
  document.getElementById("value").value = "";
  document.getElementById("percentage").value = "";
  document.getElementById("result").innerText = "";
}

function calculateReverse() {
  const part = parseFloat(document.getElementById("part").value);
  const whole = parseFloat(document.getElementById("whole").value);

  if (isNaN(part) || isNaN(whole) || whole === 0) {
    document.getElementById("reverseResult").innerText = "Please enter valid numbers.";
    return;
  }

  const result = (part / whole) * 100;
  document.getElementById("reverseResult").innerText =
    part + " is " + result.toFixed(2) + "% of " + whole;
}

function resetReverse() {
  document.getElementById("part").value = "";
  document.getElementById("whole").value = "";
  document.getElementById("reverseResult").innerText = "";
}
