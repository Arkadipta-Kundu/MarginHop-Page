// Paste your published Microsoft Store listing or official installer HTTPS URL here.
const downloadUrl = "";
if (downloadUrl.startsWith("https://")) {
  const link = document.createElement("a");
  link.className = "button";
  link.href = downloadUrl;
  link.textContent = "Get MarginHop for Windows ↗";
  for (const action of document.querySelectorAll(".release-link")) {
    action.href = downloadUrl;
    action.textContent = "Get MarginHop for Windows";
  }
  document.getElementById("release").replaceChildren(link);
}
