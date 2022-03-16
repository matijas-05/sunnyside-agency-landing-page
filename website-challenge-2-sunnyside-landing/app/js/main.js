let mobileNavState = false;
function toggleMobileNav() {
	const mobileNav = document.querySelector(".mobile-nav");
	mobileNav.classList.replace(`mobile-nav--${mobileNavState ? "open" : "closed"}`, `mobile-nav--${!mobileNavState ? "open" : "closed"}`);
	mobileNavState = !mobileNavState;
}