var canScale=1; //signal,used to set interval of each swipe for 0.2 sec
$(function(){
  var str="";
  var primeRatio=1.0 ; // ratio of img
  var currRatio=1.0;	//curr img ratio to the prime
  var continuScaleNum=0; //
  
  
	//scale font-size
	var $objBody=$("body");
	var hammertime = Hammer($objBody.get(0),{
						swipe: true,
						swipe_max_touches: 1,
						swipe_velocity: 7  //0.7
		});
	
	// hammertime.on("tap", function(ev) {  //pinchin
    hammertime.on("pinchin", function(ev) {  //pinchin
        
        if (canScale==1){
        	canScale=0;   //stop scale for 0.2 sec
        	setTimeout("canScale=1",200); 
        	//scale 
        	var thisEle = $objBody.css("font-size"); 
			var textFontSize = parseFloat(thisEle , 10);
			var unit = thisEle.slice(-2); //获取单位
			var cName = $(this).attr("class");
			textFontSize = textFontSize*0.8;				
			$objBody.css("font-size",  textFontSize + unit );
			
			//scale imgs
			currRatio=currRatio*0.9 ;			
			scaleImg(0.9);			
	        //record the 
	        str=$('#txtTouchMsg').val();
			$('#txtTouchMsg').val(str+" / "+' hammer pinchin-tap');	        	
	    }        
    });	
   //hammertime.on("hold", function(ev) { //pinchout
    hammertime.on("pinchout", function(ev) { //pinchout  
        if (canScale==1){  //
        	canScale=0;   //stop scale for 0.2 sec
        	setTimeout("canScale=1",200); 
        	//scale
    		var thisEle = $objBody.css("font-size"); 
			var textFontSize = parseFloat(thisEle , 10);
			var unit = thisEle.slice(-2); //获取单位
			var cName = $(this).attr("class");
			textFontSize = textFontSize*1.2;
			$objBody.css("font-size",  textFontSize + unit );
			//scale imgs
			currRatio=currRatio*1.2 ;			
			scaleImg(1.2);    		
	        //record the 
	        str=$('#txtTouchMsg').val();
			$('#txtTouchMsg').val(str+" / "+'hammer pinchout-hold');
		}
    });	
    
}); //the end

	//scale img
	function scaleImg(ratio){
		$('img').each(function(){
			var width = $(this).width();    // 图片实际宽度
	    	var height = $(this).height();  // 图片实际高度
	    	height = height * ratio;    // 计算等比例缩放后的高度
        	$(this).css("height", height * ratio);  // 设定等比例缩放后的高度
        	width = width * ratio;    // 计算等比例缩放后的高度
        	$(this).css("width", width * ratio);    // 设定等比例缩放后的高度        	
    	});		
	}
	
jQuery(document).ready(function(){
			jQuery(".nav ul li").hover(
			function(){
			jQuery(this).children(".drop_dwon").slideDown(200);
			jQuery(this).children(".nav ul li a").attr("id","currlayout")
		},
		function(){
			jQuery(this).children(".drop_dwon").slideUp(100);
			jQuery(this).children(".nav ul li a").attr("id","")
		}
	);
	
	
});