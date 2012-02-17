var webapp = webapp || {};

webapp.pageSectionController = (function(window, $) {
	var mobilePages;
	
	function setMobilePage(){		
		var hash = location.hash; 
			
		if (hash.length > 1){
			mobilePages.addClass("hideOnMobile");
			$("div" + hash).removeClass("hideOnMobile");
		}
	}
	
	function init(){
		mobilePages = $("div[data-role='mobile-page']");
		setMobilePage();
		$(window).hashchange(setMobilePage);
	}
	
	return {
		init: init
	};		
}(window, jQuery));

$(function () {
	webapp.pageSectionController.init();
});