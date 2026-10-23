const Projects = [
	{
		title: "Swansi",
		brand: "SWANSI",
		category: "Shopify",
		href: "https://www.swansi.com.pk",
		tags: ["Website", "Shopify"],
	},
	{
		title: "Posch Care",
		brand: "POSCH CARE",
		category: "Shopify",
		href: "https://www.poschcare.com",
		tags: ["Website", "Shopify"],
	},
	{
		title: "Habeeb Services",
		brand: "HABEEB SERVICES",
		category: "WordPress",
		href: "https://www.habeebservices.link",
		tags: ["Website", "WordPress"],
	},
	{
		title: "Schole International Academy",
		brand: "SIA",
		category: "WordPress",
		href: "https://www.sia.edu.pk",
		tags: ["Website", "WordPress"],
	},
	{
		title: "SEGO Experience",
		brand: "SEGO",
		category: "Shopify",
		href: "https://www.segoexperience.com",
		tags: ["Website", "Shopify"],
	},
	{
		title: "QMobile",
		brand: "Q-MOBILE",
		category: "Shopify",
		href: "https://www.qmobile.com.pk",
		tags: ["Website", "Shopify"],
	},
];

const projectsContainer = document.querySelector("#portfolio .projects");

if (projectsContainer) {
	Projects.forEach(({ title, brand, category, href, tags }, index) => {
		const projectElement = document.createElement("a");
		projectElement.href = href;
		projectElement.target = "_blank";
		projectElement.rel = "noopener noreferrer";
		projectElement.className = "project";
		projectElement.setAttribute("aria-label", `${title} — ${category}, opens in a new tab`);
		projectElement.innerHTML = `
			<div class="project__content project__content--${index % 5}">
				<span class="project__brand">${brand}</span>
				<span class="project__category">${category}</span>
				<ul class="project__tags">
					${tags.map((tag) => `<li class="project__tag">${tag}</li>`).join("")}
				</ul>
			</div>
			<h3 class="project__title">${title}</h3>
		`;
		projectsContainer.appendChild(projectElement);
	});
}
