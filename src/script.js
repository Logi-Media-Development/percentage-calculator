function toggleSection(id) {
  const sections = document.querySelectorAll(".section");
  sections.forEach(sec => sec.style.display = "none");
  document.getElementById(id).style.display = "block";
}

function calculatePercentage() {
  const value = parseFloat(document.getElementById("value").value);
  const percentage = parseFloat(document.getElementById("percentage").value);

  if (isNaN(value) || isNaN(percentage)) {
    document.getElementById("result").innerHTML = "<span class='error'>⚠ Please enter valid numbers.</span>";
    return;
  }

  const result = (value * percentage) / 100;
  document.getElementById("result").innerHTML =
    `<span class="highlight">${percentage}%</span> of 
     <span class="highlight">${value.toLocaleString()}</span> = 
     <span class="highlight big">${result.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</span>`;
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
    document.getElementById("reverseResult").innerHTML = "<span class='error'>⚠ Please enter valid numbers.</span>";
    return;
  }

  const result = (part / whole) * 100;
  document.getElementById("reverseResult").innerHTML =
    `<span class="highlight">${part.toLocaleString()}</span> is 
     <span class="highlight big">${result.toFixed(2)}%</span> of 
     <span class="highlight">${whole.toLocaleString()}</span>`;
}

function resetReverse() {
  document.getElementById("part").value = "";
  document.getElementById("whole").value = "";
  document.getElementById("reverseResult").innerText = "";
}

/* 🌈 Randomize gradient colors each reload */
function randomColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0");
}

window.onload = () => {
  // Pick 4 random colors for gradient
  const colors = [randomColor(), randomColor(), randomColor(), randomColor()];
  document.body.style.background = `linear-gradient(-45deg, ${colors.join(", ")})`;
  document.body.style.backgroundSize = "400% 400%";
  document.body.style.animation = "gradientShift 15s ease infinite";

  // 🌙 Theme toggle
  const container = document.querySelector(".container");
  const themeBtn = document.getElementById("themeToggle");

  themeBtn.addEventListener("click", () => {
    container.classList.toggle("dark");
    if (container.classList.contains("dark")) {
      themeBtn.textContent = "☀️ Light Mode";
    } else {
      themeBtn.textContent = "🌙 Dark Mode";
    }
  });
};
