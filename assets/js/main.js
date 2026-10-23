const mainContainer = document.querySelector("main.main");
const sections = [...document.querySelectorAll("section[id]")];
const navbarLinks = [...document.querySelectorAll(".navbar__link")];

function updateActiveNavigation() {
	const viewportCenter = window.innerHeight / 2;
	const currentSection = sections.find((section) => {
		const bounds = section.getBoundingClientRect();
		return bounds.top <= viewportCenter && bounds.bottom > viewportCenter;
	});

	navbarLinks.forEach((link) => {
		const group = { portfolio: "ai-creative", services: "about", resume: "about" };
        const currentId = group[currentSection?.id] || currentSection?.id;
        const active = link.getAttribute("href") === `#${currentId}`;
        link.classList.toggle("active", active);
        if (active) link.setAttribute("aria-current", "location");
        else link.removeAttribute("aria-current");
	});
}

mainContainer?.addEventListener("scroll", updateActiveNavigation, { passive: true });
window.addEventListener("scroll", updateActiveNavigation, { passive: true });
window.addEventListener("resize", updateActiveNavigation);
updateActiveNavigation();

const copyrightYear = document.getElementById("copyrightYear");
if (copyrightYear) copyrightYear.textContent = String(new Date().getFullYear());

const contactForm = document.querySelector(".contact .form");
contactForm?.addEventListener("submit", (event) => {
	event.preventDefault();

	if (!(contactForm instanceof HTMLFormElement) || !contactForm.reportValidity()) return;

	const formData = new FormData(contactForm);
	const senderName = String(formData.get("fullname") || "").trim();
	const senderEmail = String(formData.get("email") || "").trim();
	const subject = String(formData.get("subject") || "Project enquiry");
	const status = document.getElementById("formStatus");
	const message = [
		`Name: ${senderName}`,
		`Email: ${senderEmail}`,
		"",
		String(formData.get("message") || "").trim(),
	].join("\n");
	const mailto = `mailto:talhahassanraza@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;

	if (status) status.textContent = "Opening your email app with the enquiry. Send it from there to reach Talha.";
	window.location.href = mailto;
});

const workFilters = [...document.querySelectorAll("[data-work-filter]")];
const workGroups = [...document.querySelectorAll("[data-work-group]")];
function filterWork(value) {
    workFilters.forEach((button) => {
        const selected = button.dataset.workFilter === value;
        button.classList.toggle("is-selected", selected);
        button.setAttribute("aria-pressed", String(selected));
    });
    workGroups.forEach((group) => { group.hidden = value !== "all" && group.dataset.workGroup !== value; });
    const status = document.querySelector(".work-filter-status");
    if (status) status.textContent = value === "all" ? "Showing all portfolio work." : `Showing ${workFilters.find(button => button.dataset.workFilter === value)?.textContent}.`;
    updateActiveNavigation();
}
workFilters.forEach(button => button.addEventListener("click", () => filterWork(button.dataset.workFilter)));
document.querySelectorAll("[data-show-all-work], .navbar__link[href='#ai-creative']").forEach(link => link.addEventListener("click", () => filterWork("all")));
// Keep direct links to the website section usable after filtering.
window.addEventListener("hashchange", () => { if (location.hash === "#portfolio") filterWork("all"); });
