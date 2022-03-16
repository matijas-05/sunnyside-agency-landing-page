let mobileNavState = false;
function toggleMobileNav() {
	const mobileNav = document.querySelector(".mobile-nav");
	mobileNav.classList.replace(`mobile-nav--${mobileNavState ? "open" : "closed"}`, `mobile-nav--${!mobileNavState ? "open" : "closed"}`);
	mobileNavState = !mobileNavState;
}

window.addEventListener("click", e => {
	if(!mobileNavState)
		return;

	const classList = e.target.classList;
	if(!classList.contains("mobile-nav") && !classList.contains("mobile-nav__item") && !document.querySelector("#hamburger").contains(e.target))
		toggleMobileNav();
});
