const problem = document.getElementById("problem");
const answer = document.getElementById("answer");
const title = document.getElementById("answer-title");

document.querySelectorAll(".example").forEach(button => {
  button.addEventListener("click", () => {
    problem.value = button.dataset.value;
    problem.focus();
  });
});

function showError(message) {
  title.textContent = "Let's check that expression";
  answer.innerHTML = `<div class="error">${message}</div>`;
}

document.getElementById("solve").addEventListener("click", () => {
  const expression = problem.value.trim();
  if (!expression) return showError("Please enter a mathematical expression first.");
  if (!window.math) return showError("The math library has not loaded. Check your internet connection and refresh the page.");
  try {
    // Evaluate with math.js. This prototype deliberately accepts expressions,
    // not arbitrary JavaScript code.
    const result = math.evaluate(expression);
    if (typeof result === "function" || result === undefined) {
      return showError("That input did not produce a numeric or symbolic result. Try one of the examples.");
    }
    const formatted = math.format(result, {precision: 14});
    title.textContent = "Solution";
    answer.innerHTML = `<p><strong>Problem</strong></p><div class="result">${escapeHtml(expression)}</div><p><strong>Result</strong></p><div class="result">${escapeHtml(formatted)}</div><p>This is the first calculation prototype. Step-by-step teaching and broader symbolic mathematics are coming in the next development stages.</p>`;
  } catch (error) {
    showError("I couldn't evaluate that expression. Check the syntax, or try an example such as 2*(3+4) or sqrt(81).");
  }
});

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, char => ({
    "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&#39;"
  }[char]));
}

if ("serviceWorker" in navigator && location.protocol.startsWith("http")) {
  window.addEventListener("load", () => navigator.serviceWorker.register("./sw.js").catch(() => {}));
}
