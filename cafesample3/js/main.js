var cnt = 2;
/**
 * グローバルナビのクローンを生成
 */
$(function() {
	window.addEventListener('scroll', fixedGlobalNav);
	setTimeout(changeImage, 4000);
});

function changeImage() {
	var ele = $("#main-visual");
	ele.css("background-image", 'url("images/main-'+ cnt +'.png")');
	cnt++;
	if (cnt == 5) {
		cnt = 1;
	}
	setTimeout(changeImage, 4000);
}

/**
 * グローバルナビのクローンをページ上部に移動・固定
 */
function fixedGlobalNav() {
	var scrollY = window.pageYOffset;
	var trigger = document.getElementById('js-trigger');
	var gNav = document.getElementById('js-global-nav');

	var triggerClientRect = trigger.getBoundingClientRect();
	var triggerY = scrollY + triggerClientRect.top;
	if(scrollY > triggerY) {
		gNav.classList.add('is-fixed-nav');
		trigger.classList.add('is-fixed-trigger');
	} else {
		gNav.classList.remove('is-fixed-nav');
		trigger.classList.remove('is-fixed-trigger');
	}
}
