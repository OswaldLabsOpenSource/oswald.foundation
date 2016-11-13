document.addEventListener("DOMContentLoaded", function() {
	var oswaldInitialize = [].slice.call(document.querySelectorAll(".dropdown"));
	oswaldInitialize.forEach(function(element) {
		element.addEventListener("mouseover", function() {
			this.classList.add("open");
		});
		element.addEventListener("mouseout", function() {
			this.classList.remove("open");
		});
	});
});