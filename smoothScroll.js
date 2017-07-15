var moveToTopLibrary=function(top) {

	var element=document.getElementById(top);
	
	var intervId;

	var moveToTop=function(event){
		var currentY=window.scrollY;
		var deltaY=1.0 * currentY / (2000.0/50);
			
		if(intervId != null) {
				clearInterval(intervId);
		}

		window.addEventListener('wheel', function(event) {
			if(intervId != null && event.deltaY > 0) {
				clearInterval(intervId);
			}
		})

		intervId = setInterval(function(){

			var currentY=window.scrollY;		

			if(window.scrollY == 0){
				clearInterval(intervId);
			}
			tempY = (currentY-deltaY);
			window.scrollTo(0, tempY);

		}, 50);
	}

	element.addEventListener('click', moveToTop);
}
moveToTopLibrary('scrollToTop');