let mainNavLinks = document.querySelectorAll("nav-box nav ul li a");
console.log(mainNavLinks)
// let mainNavLinks = document.getElementsByClassName("inner_anchor");
		// let od_mainNavLinks = document.querySelectorAll("#od nav ul li a");


		//let mainSections = document.querySelectorAll("main section");

		let lastId;
		let cur = [];

		window.addEventListener("scroll", event => {
			let fromTop = window.scrollY;
			// console.log("rohan")
			mainNavLinks.forEach(link => {
				let section = document.querySelector(link.hash);
				//console.log(section)

				if (section.offsetTop <= fromTop + 1 && section.offsetTop + section.offsetHeight > fromTop + 1 )  {
					mainNavLinks.forEach(function(linktoremove){
						linktoremove.classList.remove("currect");
					})
					link.classList.add("currect");
				}
			});

			
		});

		
		
		// function resetTopPositionT20(){
		// 	let d = document.getElementById("t20");
		// 	let dheight = d.offsetHeight;
		// 	let topPos = d.offsetTop;
		// 	//let scrollToposition = dheight-topPos-800;	
		
		// 	window.scrollTo(0, topPos-100);
		// 	var elems = document.querySelectorAll(".inner_anchor.currect");
		// 	[].forEach.call(elems, function(el) {
		// 		el.classList.remove("currect");
		// 	});
		// 	console.log("this is working")
		// }

		// function resetTopPositionOD(){
		// 	let d = document.getElementById("od");
		// 	let dheight = d.offsetHeight;
		// 	let topPos = d.offsetTop;
		// 	//let scrollToposition = dheight-topPos-50;	
		// 	window.scrollTo(0, topPos-100);
		// 	var elems = document.querySelectorAll(".inner_anchor.currect");
		// 	[].forEach.call(elems, function(el) {
		// 		el.classList.remove("currect");
		// 	});
		// }

		// function resetTopPositionTest(){
		// 	let d = document.getElementById("test");
		// 	let dheight = d.offsetHeight;
		// 	let topPos = d.offsetTop;
		// 	//let scrollToposition = dheight-topPos-50;	
		// 	window.scrollTo(0, topPos-100);
		// 	var elems = document.querySelectorAll(".inner_anchor.currect");
		// 	[].forEach.call(elems, function(el) {
		// 		el.classList.remove("currect");
		// 	});
		// }

		// function resetTopPositionT10(){
		// 	let d = document.getElementById("t10");
		// 	let dheight = d.offsetHeight;
		// 	let topPos = d.offsetTop;
		// 	//let scrollToposition = dheight-topPos-50;	
		// 	window.scrollTo(0, topPos-100);
		// 	var elems = document.querySelectorAll(".inner_anchor.currect");
		// 	[].forEach.call(elems, function(el) {
		// 		el.classList.remove("currect");
		// 	});
		// }

		// function resetTopPositionTheHundred(){
		// 	let d = document.getElementById("the_hundred");
		// 	let dheight = d.offsetHeight;
		// 	let topPos = d.offsetTop;
		// 	//let scrollToposition = dheight-topPos-50;	
		// 	window.scrollTo(0, topPos-100);
		// 	var elems = document.querySelectorAll(".inner_anchor.currect");
		// 	[].forEach.call(elems, function(el) {
		// 		el.classList.remove("currect");
		// 	});
		// }

		// function resetTopPositionOtherT20(){
		// 	let d = document.getElementById("other_t20");
		// 	let dheight = d.offsetHeight;
		// 	let topPos = d.offsetTop;
		// 	//let scrollToposition = dheight-topPos-50;	
		// 	window.scrollTo(0, topPos-100);
		// 	var elems = document.querySelectorAll(".inner_anchor.currect");
		// 	[].forEach.call(elems, function(el) {
		// 		el.classList.remove("currect");
		// 	});
		// }

		// function resetTopPositionOtherOD(){
		// 	let d = document.getElementById("other_od");
		// 	let dheight = d.offsetHeight;
		// 	let topPos = d.offsetTop;
		// 	//let scrollToposition = dheight-topPos-50;	
		// 	window.scrollTo(0, topPos-100);
		// 	var elems = document.querySelectorAll(".inner_anchor.currect");
		// 	[].forEach.call(elems, function(el) {
		// 		el.classList.remove("currect");
		// 	});
		// }

		// function resetTopPositionOtherTest(){
		// 	let d = document.getElementById("other_test");
		// 	let dheight = d.offsetHeight;
		// 	let topPos = d.offsetTop;
		// 	//let scrollToposition = dheight-topPos-50;	
		// 	window.scrollTo(0, topPos-100);
		// 	var elems = document.querySelectorAll(".inner_anchor.currect");
		// 	[].forEach.call(elems, function(el) {
		// 		el.classList.remove("currect");
		// 	});
		// }

		// function resetTopPositionIPL(){
		// 	let d = document.getElementById("ipl");
		// 	let dheight = d.offsetHeight;
		// 	let topPos = d.offsetTop;
		// 	//let scrollToposition = dheight-topPos-50;	
		// 	window.scrollTo(0, topPos-100);
		// 	var elems = document.querySelectorAll(".inner_anchor.currect");
		// 	[].forEach.call(elems, function(el) {
		// 		el.classList.remove("currect");
		// 	});
		// }

		// function t20scroll(){
		// 	console.log("scrolling")
		// }
