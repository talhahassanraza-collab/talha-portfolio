const Skills = [
	{ name: "Photoshop", category: "Design & imaging" },
	{ name: "Illustrator", category: "Brand & vector design" },
	{ name: "InDesign", category: "Print & layout" },
	{ name: "Premiere Pro", category: "Video editing" },
	{ name: "After Effects", category: "Motion graphics" },
	{ name: "3ds Max", category: "3D modelling" },
	{ name: "Maya", category: "3D modelling & animation" },
	{ name: "Blender", category: "3D design & rendering" },
	{ name: "HTML5 & CSS3", category: "Web development" },
	{ name: "WordPress", category: "Website development" },
	{ name: "Shopify", category: "E-commerce" },
	{ name: "Amazon Seller Central", category: "Marketplace content" },
];

const skillsContainer = document.querySelector("#skills .skills__wrapper");

if (skillsContainer) {
	Skills.forEach(({ name, category }, index) => {
		const skillElement = document.createElement("div");
		skillElement.className = "skill";
		skillElement.innerHTML = `
			<div class="skill__content">
				<span class="skill__index">${String(index + 1).padStart(2, "0")}</span>
				<h3 class="skill__tool">${name}</h3>
			</div>
			<p class="skill__name">${category}</p>
		`;
		skillsContainer.appendChild(skillElement);
	});
}
