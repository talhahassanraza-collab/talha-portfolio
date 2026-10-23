const TimeLines = [
	{
		date: "2025 — 2026",
		experiences: [
			{
				title: "Creative Head",
				description: "Salamtec · July 2025 — February 2026",
			},
		],
	},
	{
		date: "2024 — 2025",
		experiences: [
			{
				title: "Multimedia Designer & Digital Specialist",
				description: "BuzzAgency · February 2024 — June 2025",
			},
		],
	},
	{
		date: "2020 — 2024",
		experiences: [
			{
				title: "Design Lead",
				description: "Posch Care · September 2020 — February 2024",
			},
		],
	},
	{
		date: "2018 — 2020",
		experiences: [
			{
				title: "Senior Graphic Designer",
				description: "Sartim Solutions · July 2018 — August 2020",
			},
		],
	},
	{
		date: "2017 — 2018",
		experiences: [
			{
				title: "Senior Graphic Designer",
				description: "AIB Global Marketing · July 2017 — June 2018",
			},
		],
	},
	{
		date: "2012 — 2013",
		experiences: [
			{
				title: "Graphic Designer",
				description: "EGO Clothing (Moosajee Group) · February 2012 — February 2013",
			},
		],
	},
	{
		date: "Education",
		experiences: [
			{
				title: "Arena Multimedia Specialist Program",
				description: "Diploma · 2015",
			},
			{
				title: "Allama Iqbal Open University",
				description: "Bachelor’s degree · In progress",
			},
		],
	},
];

const TimeLinesContainer = document.querySelector("#resume .timelines");

const timeLineLayout = ({ date, experiences }) => `
    <p class="timeline__date">${date}</p>
    <ul class="timeline__experiences">
        ${experiences
					.map(
						(experience) => `
            <li class="timeline__experience experience">
                <h5 class="experience__title">${experience.title}</h5>
                <p class="experience__description">${experience.description}</p>
            </li>
        `
					)
					.join(" ")}
    </ul>
`;

if (TimeLinesContainer) {
	TimeLines.forEach((timeLine) => {
		const timeLineElement = document.createElement("div");
		timeLineElement.className = "timeline";
		timeLineElement.innerHTML = timeLineLayout(timeLine);
		TimeLinesContainer.appendChild(timeLineElement);
	});
}
