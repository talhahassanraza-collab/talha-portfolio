const Services = [
	{
		name: "Brand & Graphic Design",
		description: "Brand identities, logos, packaging, print design and campaign visuals.",
		icon: '<i class="fa-solid fa-pen-nib fa-fw icon"></i>',
	},
	{
		name: "Video & Motion",
		description: "Video editing, motion graphics and platform-ready promotional content.",
		icon: '<i class="fa-solid fa-film fa-fw icon"></i>',
	},
	{
		name: "3D & Product Visuals",
		description: "Product modelling, texturing, lighting, animation and rendering.",
		icon: '<i class="fa-solid fa-cube fa-fw icon"></i>',
	},
	{
		name: "Web & E-commerce",
		description: "Responsive websites, Shopify and WordPress builds, and Amazon A+ content.",
		icon: '<i class="fa-solid fa-globe fa-fw icon"></i>',
	},
	{
		name: "Photography",
		description: "Product and campaign photography with considered lighting and composition.",
		icon: '<i class="fa-solid fa-camera fa-fw icon"></i>',
	},
	{
		name: "Digital Content",
		description: "Social media creative and digital marketing content for brand campaigns.",
		icon: '<i class="fa-solid fa-bullhorn fa-fw icon"></i>',
	},
];

const servicesContainer = document.querySelector("#services .services__wrapper");

const serviceLayout = ({ name, description, icon }) => `
	<h4 class="service__name">${name}</h4>
	<p class="service__description">${description}</p>
	${icon}
`;

if (servicesContainer) {
	Services.forEach((service) => {
		const serviceElement = document.createElement("div");
		serviceElement.className = "service";
		serviceElement.innerHTML = serviceLayout(service);
		servicesContainer.appendChild(serviceElement);
	});
}
