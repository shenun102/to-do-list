import { projectContainer } from "./initialize";

export default function highlightPage(page) {
  // Highlight the page loaded
  // Select the corresponding sidebar page element
  const element = document.querySelector(`[data-page="${page.title}"]`);
  if (!element.classList.contains("selected")) {
    // Remove all selected classes from all project pages
    const pages = projectContainer.querySelectorAll(".project");
    // Remove all selected classes from all nav pages
    const navOnePages = document.querySelectorAll(".nav-page");
    pages.forEach((page) => page.classList.remove("selected"));
    navOnePages.forEach((page) => page.classList.remove("selected"));
    // Add selected to the target page
    element.classList.toggle("selected");
  }
}
