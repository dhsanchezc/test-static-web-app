const status = document.getElementById("status");
const btn = document.getElementById("btn");
const list = document.getElementById("asset-list");

const API_URL =
  "https://automata-api.kindriver-6e8c6edd.canadacentral.azurecontainerapps.io/api/assets";

function renderItems(items) {
  list.innerHTML = "";
  if (!Array.isArray(items) || items.length === 0) {
    const li = document.createElement("li");
    li.textContent = "No assets found.";
    list.appendChild(li);
    return;
  }

  items.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item?.name ?? "(missing name)";
    list.appendChild(li);
  });
}

async function loadAssets() {
  status.textContent = "Loading...";
  try {
    const res = await fetch(API_URL);
    if (!res.ok) {
      throw new Error(`Request failed: ${res.status}`);
    }
    const data = await res.json();
    renderItems(data);
    status.textContent = `Loaded ${Array.isArray(data) ? data.length : 0} assets.`;
  } catch (err) {
    status.textContent =
      "Failed to load. Check CORS on the API or the URL.";
    list.innerHTML = "";
  }
}

btn.addEventListener("click", loadAssets);
