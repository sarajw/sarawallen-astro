function openDetails() {
	const hash = window.location.hash.substring(1);
	if (
		["privacy-policy", "a11y-statement"].includes(hash)
	) {
		const details = document.getElementById(`${hash}-details`);
    
    [...document.querySelectorAll("details")].forEach(
      (details) => (details.open = false)
    );
		// if (details.open) return;

		details.setAttribute("open", "");
	}
}

window.addEventListener("hashchange", openDetails);