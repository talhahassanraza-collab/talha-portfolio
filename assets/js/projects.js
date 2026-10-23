const Projects = [
	{
		title: "Posch Care",
        image: "assets/images/projects/posch-care.webp",
		brand: "POSCH CARE",
		category: "Shopify",
		href: "https://www.poschcare.com",
		tags: ["Website", "Shopify"],
	},
	{
		title: "Schole International Academy",
        image: "assets/images/projects/schole.webp",
		brand: "SIA",
		category: "WordPress",
		href: "https://www.sia.edu.pk",
		tags: ["Website", "WordPress"],
	},
	{
		title: "SEGO Experience",
        image: "assets/images/projects/sego.webp",
		brand: "SEGO",
		category: "Shopify",
		href: "https://www.segoexperience.com",
		tags: ["Website", "Shopify"],
	},
	{
		title: "QMobile",
        image: "assets/images/projects/qmobile.webp",
		brand: "Q-MOBILE",
		category: "Shopify",
		href: "https://www.qmobile.com.pk",
		tags: ["Website", "Shopify"],
	},
];

const projectsContainer = document.querySelector("#portfolio .projects");

if (projectsContainer) {
	Projects.forEach(({ title, brand, category, href, tags, image }, index) => {
		const projectElement = document.createElement("a");
		projectElement.href = href;
		projectElement.target = "_blank";
		projectElement.rel = "noopener noreferrer";
		projectElement.className = image ? "project project--screenshot" : "project";
		projectElement.setAttribute("aria-label", `${title} — ${category}, opens in a new tab`);
		projectElement.innerHTML = `
			<div class="project__content project__content--${index % 5}">
				${image ? `<img class="project__screenshot" src="${image}" alt="${title} website homepage" loading="lazy" width="1280" height="720" />` : `<span class="project__brand">${brand}</span>`}
				${image ? "" : `<span class="project__category">${category}</span>`}
				<ul class="project__tags">
					${tags.map((tag) => `<li class="project__tag">${tag}</li>`).join("")}
				</ul>
			</div>
			<h3 class="project__title">${title} <span aria-hidden="true">&#8599;</span></h3><p class="project__platform">${category} website</p><p class="project__role"><span>My contribution</span> Visual appearance, hero banners &amp; product imagery.</p>
		`;
		projectsContainer.appendChild(projectElement);
	});
}
