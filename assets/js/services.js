const Services = [
 { name: "AI Visuals & Video Ads", description: "AI-generated images and video ad creative for digital campaigns and SMD displays, alongside video editing and visual storytelling.", icon: '<i class="fa-solid fa-wand-magic-sparkles fa-fw icon"></i>' },
 { name: "Social Media Creative & Copy", description: "Social media post designs, ad creatives and content copy that bring a brand’s message into focus.", icon: '<i class="fa-solid fa-bullhorn fa-fw icon"></i>' },
 { name: "Branding & Print Design", description: "Brand visuals and print materials, including flyers, posters, leaflets, pamphlets and panaflex designs.", icon: '<i class="fa-solid fa-pen-nib fa-fw icon"></i>' },
 { name: "Website & Product Visuals", description: "Visual improvements for websites: hero banners, product images and campaign graphics for a stronger storefront appearance.", icon: '<i class="fa-solid fa-globe fa-fw icon"></i>' }
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
