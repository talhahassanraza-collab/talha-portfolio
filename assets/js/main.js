const preloader = document.getElementById("preloader");
const settingsOpenBtn = document.getElementById("settingsOpenBtn");
const settingsCloseBtn = document.getElementById("settingsCloseBtn");
const settingsContainer = document.getElementById("settingsContainer");

window.addEventListener("load", () => {
	window.setTimeout(() => preloader?.classList.add("hidden"), 300);
});

settingsOpenBtn?.addEventListener("click", () => {
	settingsContainer?.classList.add("active");
});

settingsCloseBtn?.addEventListener("click", () => {
	settingsContainer?.classList.remove("active");
});

document.addEventListener("keyup", (event) => {
	if (event.key === "Escape") settingsContainer?.classList.remove("active");
});

settingsContainer?.addEventListener("click", (event) => {
	if (event.target === settingsContainer) settingsContainer.classList.remove("active");
});

const bgVideoPlayer = document.getElementById("bgVideoPlayer");
const bgVideoSource = document.getElementById("bgVideoSource");
const buttonsContainer = document.getElementById("buttonsContainer");
const videoOptions = [
	["Simple strings", "simple-strings.mp4"],
	["Water waves", "water-waves.mp4"],
	["Liquids wavy", "liquids-wavy.mp4"],
	["3D abstract ball", "3d-abstract-ball.mp4"],
	["Earth lines sphere", "earth-lines-sphere.mp4"],
];

function selectBackgroundVideo(source, selectedButton) {
	if (!bgVideoPlayer || !bgVideoSource) return;

	bgVideoSource.src = source;
	bgVideoPlayer.load();
	bgVideoPlayer.play().catch((error) => {
		console.warn("Background video playback was blocked.", error);
	});

	buttonsContainer?.querySelectorAll("button").forEach((button) => {
		button.setAttribute("aria-pressed", String(button === selectedButton));
	});
	settingsContainer?.classList.remove("active");

	try {
		localStorage.setItem("bgVideoSource", source);
	} catch (error) {
		console.warn("Could not save the selected background video.", error);
	}
}

if (buttonsContainer && bgVideoPlayer && bgVideoSource) {
	for (const [label, filename] of videoOptions) {
		const button = document.createElement("button");
		const source = `assets/videos/${filename}`;
		button.type = "button";
		button.textContent = label;
		button.addEventListener("click", () => selectBackgroundVideo(source, button));
		buttonsContainer.appendChild(button);
	}

	try {
		const savedSource = localStorage.getItem("bgVideoSource");
		const savedVideo = videoOptions.find(([, filename]) => savedSource === `assets/videos/${filename}`);
		if (savedSource && savedVideo) {
			bgVideoSource.src = savedSource;
			bgVideoPlayer.load();
			const selectedButton = [...buttonsContainer.querySelectorAll("button")].find(
				(button) => button.textContent === savedVideo[0],
			);
			selectedButton?.setAttribute("aria-pressed", "true");
		}
	} catch (error) {
		console.warn("Could not restore the selected background video.", error);
	}
}

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
		link.classList.toggle("active", link.getAttribute("href") === `#${currentSection?.id}`);
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
		`Phone: ${String(formData.get("phone") || "").trim() || "Not provided"}`,
		`Budget: ${String(formData.get("budget") || "").trim() || "Not provided"}`,
		"",
		String(formData.get("message") || "").trim(),
	].join("\n");
	const mailto = `mailto:talhahassanraza@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;

	if (status) status.textContent = "Opening your email app with the enquiry. Send it from there to reach Talha.";
	window.location.href = mailto;
});
