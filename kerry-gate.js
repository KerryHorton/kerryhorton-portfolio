(function () {
  var form = document.getElementById("gate-form");
  var input = document.getElementById("password");
  var button = form.querySelector("button");
  var error = document.getElementById("gate-error");

  function destination() {
    var requested = new URLSearchParams(window.location.search).get("next");
    return requested && requested.charAt(0) === "/" && requested.slice(0, 2) !== "//"
      ? requested
      : "/";
  }

  form.addEventListener("submit", async function (event) {
    event.preventDefault();
    error.textContent = "";
    button.disabled = true;
    button.textContent = "Checking…";

    try {
      var response = await fetch("/api/auth", {
        method: "POST",
        credentials: "same-origin",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password: input.value })
      });

      if (!response.ok) {
        error.textContent = response.status === 401
          ? "That’s not quite it — try again, or request access below."
          : "Access is temporarily unavailable. Please try again shortly.";
        input.value = "";
        input.focus();
        return;
      }

      window.location.replace(destination());
    } catch {
      error.textContent = "Couldn’t reach the server. Check your connection and try again.";
    } finally {
      button.disabled = false;
      button.innerHTML = 'Enter <span class="arr">→</span>';
    }
  });
})();

