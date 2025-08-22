// Helper: log with timestamp + bright styling for dark consoles
function logWithTime(type, message, ...args) {
  const now = new Date().toLocaleTimeString();
  switch (type) {
    case "log":
      console.log(`%c[${now}] ${message}`, "color: cyan; font-weight: bold;", ...args);
      break;
    case "warn":
      console.warn(`%c[${now}] ${message}`, "color: yellow; font-weight: bold;", ...args);
      break;
    case "error":
      console.error(`%c[${now}] ${message}`, "color: #ff5555; font-weight: bold;", ...args);
      break;
    case "info":
      console.log(`%c[${now}] ${message}`, "color: lime; font-weight: bold;", ...args);
      break;
    default:
      console.log(`[${now}] ${message}`, ...args);
  }
}

function toggleSection(id) {
  logWithTime("log", `🔀 Switching to section: ${id}`);
  const sections = document.querySelectorAll(".section");
  sections.forEach(sec => sec.style.display = "none");
  document.getElementById(id).style.display = "block";
}

function calculatePercentage() {
  logWithTime("log", "🧮 Running calculatePercentage()");
  const value = parseFloat(document.getElementById("value").value);
  const percentage = parseFloat(document.getElementById("percentage").value);

  if (isNaN(value) || isNaN(percentage)) {
    logWithTime("warn", "⚠️ Invalid input for calculatePercentage()");
    document.getElementById("result").innerHTML = "<span class='error'>⚠ Please enter valid numbers.</span>";
    return;
  }

  const result = (value * percentage) / 100;
  logWithTime("info", `✅ ${percentage}% of ${value} = ${result}`);
  document.getElementById("result").innerHTML =
    `<span class="highlight">${percentage}%</span> of 
     <span class="highlight">${value.toLocaleString()}</span> = 
     <span class="highlight big">${result.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</span>`;
}

function resetPercentage() {
  logWithTime("log", "🧹 Resetting percentage calculator inputs");
  document.getElementById("value").value = "";
  document.getElementById("percentage").value = "";
  document.getElementById("result").innerText = "";
}

function calculateReverse() {
  logWithTime("log", "🧮 Running calculateReverse()");
  const part = parseFloat(document.getElementById("part").value);
  const whole = parseFloat(document.getElementById("whole").value);

  if (isNaN(part) || isNaN(whole) || whole === 0) {
    logWithTime("warn", "⚠️ Invalid input for calculateReverse()");
    document.getElementById("reverseResult").innerHTML = "<span class='error'>⚠ Please enter valid numbers.</span>";
    return;
  }

  const result = (part / whole) * 100;
  logWithTime("info", `✅ ${part} is ${result}% of ${whole}`);
  document.getElementById("reverseResult").innerHTML =
    `<span class="highlight">${part.toLocaleString()}</span> is 
     <span class="highlight big">${result.toFixed(2)}%</span> of 
     <span class="highlight">${whole.toLocaleString()}</span>`;
}

function resetReverse() {
  logWithTime("log", "🧹 Resetting reverse calculator inputs");
  document.getElementById("part").value = "";
  document.getElementById("whole").value = "";
  document.getElementById("reverseResult").innerText = "";
}

/* 🌈 Randomize gradient colors each reload */
function randomColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0");
}

window.onload = () => {
  logWithTime("log", "🚀 Page loaded. Initializing...");

  // Pick 4 random colors for gradient
  const colors = [randomColor(), randomColor(), randomColor(), randomColor()];
  document.body.style.background = `linear-gradient(-45deg, ${colors.join(", ")})`;
  document.body.style.backgroundSize = "400% 400%";
  document.body.style.animation = "gradientShift 15s ease infinite";
  logWithTime("info", "🎨 Gradient applied with colors:", colors);

  // 🌙 Theme toggle
  const container = document.querySelector(".container");
  const themeBtn = document.getElementById("themeToggle");

  themeBtn.addEventListener("click", () => {
    container.classList.toggle("dark");
    if (container.classList.contains("dark")) {
      themeBtn.textContent = "☀️ Light Mode";
      logWithTime("info", "🌙 Dark mode enabled");
    } else {
      themeBtn.textContent = "🌙 Dark Mode";
      logWithTime("info", "☀️ Light mode enabled");
    }
  });

  // ✅ Self-test with styled logs
  logWithTime("log", "🧪 Running self-test...");

  const testValue = 200, testPercent = 10;
  const expected = (testValue * testPercent) / 100;
  if (expected === 20) {
    console.log("%c✅ calculatePercentage test passed (10% of 200 = 20)", "color: lime; font-weight: bold; background: #003300; padding: 2px;");
  } else {
    console.log("%c❌ calculatePercentage test FAILED!", "color: #ff5555; font-weight: bold; background: #330000; padding: 2px;");
  }

  const testPart = 50, testWhole = 200;
  const expectedReverse = (testPart / testWhole) * 100;
  if (expectedReverse === 25) {
    console.log("%c✅ calculateReverse test passed (50 is 25% of 200)", "color: lime; font-weight: bold; background: #003300; padding: 2px;");
  } else {
    console.log("%c❌ calculateReverse test FAILED!", "color: #ff5555; font-weight: bold; background: #330000; padding: 2px;");
  }
};
