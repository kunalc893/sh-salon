const nav = document.querySelector(".nav nav");
const header = document.querySelector(".nav");
if (nav && header) {
  const toggle = document.createElement("button");
  toggle.className = "menu-toggle";
  toggle.type = "button";
  toggle.setAttribute("aria-label", "Open navigation menu");
  toggle.setAttribute("aria-expanded", "false");
  toggle.textContent = "☰";
  header.insertBefore(toggle, nav);
  toggle.addEventListener("click", () => {
    const open = header.classList.toggle("menu-open");
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute(
      "aria-label",
      open ? "Close navigation menu" : "Open navigation menu",
    );
    toggle.textContent = open ? "×" : "☰";
  });
  nav.addEventListener("click", (event) => {
    if (event.target.closest("a")) {
      header.classList.remove("menu-open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", "Open navigation menu");
      toggle.textContent = "☰";
    }
  });
}

// Open gallery images in a lightweight, keyboard-friendly viewer.
const gallery = document.querySelectorAll(".photos img");
if (gallery.length) {
  const viewer = document.createElement("dialog");
  viewer.className = "photo-viewer";
  viewer.innerHTML =
    '<button type="button" aria-label="Close image">×</button><img alt="">';
  document.body.append(viewer);
  const viewImage = viewer.querySelector("img");
  const closeButton = viewer.querySelector("button");
  gallery.forEach((image) => {
    image.tabIndex = 0;
    image.setAttribute("role", "button");
    image.setAttribute("aria-label", `View larger: ${image.alt}`);
    const open = () => {
      viewImage.src = image.src;
      viewImage.alt = image.alt;
      viewer.showModal();
    };
    image.addEventListener("click", open);
    image.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        open();
      }
    });
  });
  closeButton.addEventListener("click", () => viewer.close());
  viewer.addEventListener("click", (event) => {
    if (event.target === viewer) viewer.close();
  });
}
