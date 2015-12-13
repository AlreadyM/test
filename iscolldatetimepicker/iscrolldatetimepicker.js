	function loaded () {
		var myScroll,myScroll1,result,customClass;
		function newscroll(scrollName,scroller,lineHeight,customClass){
			scrollName = new IScroll("#"+scroller,  {
			 mouseWheel: true,
			 snap:"li"
			});
			scrollName.on('scrollEnd', function(){
		 		var position,index=0;
		 		// console.log(this.y);
		 		// console.log(parseInt(lineHeight));
		 		$("."+customClass+scroller).removeClass(customClass+scroller);
		 		position = this.y;
		 		index = position/parseInt(lineHeight);
		 		var scrollElement = $("#"+scroller).find('li').eq(-index+1).addClass(customClass+scroller);
		 		var result = $(".scrolling"+scroller).text();
		 		console.log("本次滚动的结果是:"+result);
			 });
		}
		newscroll(myScroll,"wrapper","40","scrolling");
		newscroll(myScroll1,"wrapper1","40","scrolling");
		// document.addEventListener('touchmove', function (e) { e.preventDefault(); }, true);
	}


	loaded();

	function elementEvent (element){
		$(element).click(function(){
		var date = $(".scrollingwrapper").text();
		var time = $(".scrollingwrapper1").text();
		alert(date);
		alert(time);
		})
	};
