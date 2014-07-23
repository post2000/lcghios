   $(function() {
	   var tabliclass ='disable' ;     //tabs enable or disable?
	    	 //set cover img size equals to the window
	   		 var imgHeight=$(window).height(),imgWidth=$(window).width();
	   		 $('#cover').height(imgHeight);
	   		 $('#cover').width(imgWidth);
	   		 
	   		 $(".content > div:gt(0)").hide();
             $(".tab li").css("cursor", "pointer");
             $(".tab li").hover(function() {
                 tabliclass=$(this).attr('class');
            	 if( tabliclass.indexOf('disable') == -1 ){ //Can be set to current when not in disable state. 
                	 $(this).addClass("tab_current");
                 }
             }, function() {
                 $(this).removeClass("tab_current");
             }).click(
                 function() {
                	 tabliclass=$(this).attr('class');
                	 if( tabliclass.indexOf('disable') == -1 ){ //Can be clicked when not in disable state. 
                		 $(this).addClass("tab_selected").siblings().removeClass("tab_selected");
                         $(".content > div").eq($(this).index()).siblings().hide().end().show();
                     }                	 
                 }
             );
             $('#cover').click(function(){
            	$(this).animate({height:'hide',width:'hide'},
            					'slow',
            					function(){
            							$('#tabcontainer').show();
            		
            	}); 
             });
             $("#guihua_next_a").click(function(){
					i_money_check=$("#money_input").val();
					if(premiumOK_lcgh()){
						i_money_all=$("#money_input").val();		
						//computeGuarantee_lcgh();  //moved into  $('#li_lcgh').click();
						//set li_lcgh tab enabled
						$('#li_lcgh').removeClass('disable');
						//$.mobile.changePage( "#lcgh_page2" );
						
						$('#li_lcgh').click();
					}
			});
             $('#li_lcgh').click(function(){
            	 computeGuarantee_lcgh();  //init values according customer's information
             });
             $('#btnstartevalu').click(function(){
            	 //set age radio of evaluation test
            	 var age=$('#age_lcgh').val();
            	 if (age==null||age==""||isNaN(age)){
            		 age=30;
            	 }
            	 else{
            		 age=age*1 ;//turn to number
            	 }
            	 var ageradioindex=0;
            	 //61岁以上;46-60岁;36-45岁;26-35岁;25岁以下(A\B\C\D\E)
            	 if(age>60){
            		 ageradioindex=0;
            	 }
            	 else if(age>45){
            		 ageradioindex=1;
            	 }
            	 else if(age>35){
            		 ageradioindex=2;
            	 }
            	 else if(age>25){
            		 ageradioindex=3;
            	 }
            	 else if(age<=25){
            		 ageradioindex=4;
            	 }
            	 //alert("index:"+ageradioindex);
            	 //$("#li_eval_facerisk").find(":radio").eq(2).attr("checked",true);
            	 //$("#li_eval_age").find(":radio").eq(ageradioindex).attr("checked",true);
            	 $("#li_eval_age").find(":radio").eq(ageradioindex).click();
            	 //var $currinput=$("input[name='eval_age']:eq(ageradioindex)");
            	// $currinput.attr("checked",true);
            	 //var a=$currinput.attr("checked"), b=$currinput.attr("name"),c=$currinput.attr("id"),d=$currinput.attr("value");
            	 $('#evaluation').show();          
            	 $('#sugestion .advice').hide();
             });
             $('#btnsubmitevalu').click(function(){
             	$('#evaluation').hide(); 
             	$("body,html").animate({
             		scrollTop:100 //让body的scrollTop等于0，可实现滚动到页面顶部
             		},100);  //animate speed,0 indicate immediately
             	//score risk appetite
             	var score=0;             	
             	$('#evaluationol li').find(':radio:checked').each(function(){
             		score+=$(this).val()*1;             		
             	});
             	//alert("score is:" + score);             	
             	// 10～15分：保守型 16～20分：轻度保守型   21～30分：中立型   31～38分：轻度进取型  39分以上：进取型
             	//select risk appetite & show advice             	
             	if(score<=15){               		
             		$('#formpianhao :radio').eq(0).click();             		
             		for(var i=0;i<5;i++){
             			$('#sugestion .advice').eq(i).hide();
             		}
             		$('#sugestion .advice').eq(0).show();
             	}
             	else if(score<=20){
             		//$("input[name='pianhao']:eq(1)").attr("checked",true);
             		$("input[name='pianhao']:eq(1)").click();
             		for(var i=0;i<5;i++){
             			$('#sugestion .advice').eq(i).hide();
             		}
             		$('#sugestion .advice').eq(1).show();
             	}
             	else if(score<=30){
             		//$("input[name='pianhao']:eq(2)").attr("checked",true);
             		$("input[name='pianhao']:eq(2)").click();
             		for(var i=0;i<5;i++){
             			$('#sugestion .advice').eq(i).hide();
             		}
             		$('#sugestion .advice').eq(2).show();
             	}
             	else if(score<=38){
             		//$("input[name='pianhao']:eq(3)").attr("checked",true);
             		$("input[name='pianhao']:eq(3)").click();
             		for(var i=0;i<5;i++){
             			$('#sugestion .advice').eq(i).hide();
             		}
             		$('#sugestion .advice').eq(3).show();
             	}
             	else if(score>=39){
             		//$("input[name='pianhao']:eq(4)").attr("checked",true);
             		$("input[name='pianhao']:eq(4)").click();
             		for(var i=0;i<5;i++){
             			$('#sugestion .advice').eq(i).hide();
             		}
             		$('#sugestion .advice').eq(4).show();
             	}
             });
            /*
             $("#box").unbind('click').click(function(){
				 $("#text").toggleClass("planning",800);
			});
			$("#box2").unbind('click').click(function(){
				 $("#text2").toggleClass("planning",800);
			});
			$("#box3").unbind('click').click(function(){
				 $("#text3").toggleClass("planning",800);
			});
			*/
			$('.planningcollapsed').click(function(){  //.unbind('click'),used to control
				$(this).toggleClass("planning",800);
				//toggle collapse icon 
				var $imgobj=$(this).find('img').first();
				var imgsrc=$imgobj.attr('src');
				
				if(imgsrc.indexOf('uparrow')>=0){
					$imgobj.attr('src','css/images/downarrow-grey.png');
				}
				else{
					$imgobj.attr('src','css/images/uparrow-grey.png');
				}				
			});
			/*理财规划跳转富富余3号*/	
			$("#getguarantee_fu3").unbind('click').click(function(){
				//if premiuOK,renew & show page nianbguarantee
				initfu3();
				initbbb();
				if(premiumOK_2()){					
					//set tab enabled
					$('#li_product').removeClass('disable');
					
					$('#fu3guarantee').show();		
					//$("#fu3guarantee").css("float","left"); //float to ahead of bbb div
					$('#bbb_guarantee').show();
					//$("#bbb_guarantee").css("float","none"); //none float display after fu3 div
					$('#li_product').click(); //show tab3
				}
			});			
			
			$("#getguarantee_bbb").unbind('click').click(function(){
				//if premiuOK,renew & show page nianbguarantee
				initfu3();
				initbbb();								
				//set tab enabled
				$('#li_product').removeClass('disable');
				
				$('#bbb_guarantee').show();
				//$("#bbb_guarantee").css("float","left"); //float to first
				if(premiumOK_2()){
					$('#fu3guarantee').show();
					//$("#fu3guarantee").css("float","none"); //none float to second
				}
				$('#li_product').click(); //show tab3
			});
			//use hammer.js,the application will respone to gesture,such as tap touch swipe doubletouch

			var hammer0 = new Hammer(document.getElementById("tab0"), { drag_max_touches: 0});
			var hammer1 = new Hammer(document.getElementById("tab1"), { drag_max_touches: 0});
			var hammer2 = new Hammer(document.getElementById("tab2"), { drag_max_touches: 0});
			var hammer3 = new Hammer(document.getElementById("tab3"), { drag_max_touches: 0});
			
			hammer0.on("swipeleft", function(ev) {	//swipeleft,pull to show tab1	
				var $nextLi=$('.tab li.tab_selected').next();
				$nextLi.click();
		    });
			hammer1.on("swiperight", function(ev) {	//swiperight,pull to show tab0	
				var $prevLi=$('.tab li.tab_selected').prev();
				$prevLi.click();
		    });
			hammer1.on("swipeleft", function(ev) {	//swipeleft,pull to show tab2	        
				//alert('tab1 swipe left');
				//ev.stopPropagation();
				$("#guihua_next_a").click(); //if ok ,show tab2 after refresh values
		    });		    
			hammer2.on("swiperight", function(ev) {	//swiperight,pull to show tab1	        
				//alert('swiperight');
				var $prevLi=$('.tab li.tab_selected').prev();
				$prevLi.click();
				//ev.stopPropagation();
		    });
			hammer2.on("swipeleft", function(ev) {	//swipeleft,pull to show tab3	        
				//alert('tab2 swipeleft');
				$("#getguarantee_fu3").click();
				//ev.stopPropagation();
		    });			
			hammer3.on("swiperight", function(ev) {	//swiperight,pull to show tab2	        
				//alert('tab3 swiperight');
				var $prevLi=$('.tab li.tab_selected').prev();
				$prevLi.click();
				//ev.stopPropagation();				
		    });			
   });
		//var diposit=30000,fPlanning=60000,insurance=10000;
		//var customer="李先生";
		//var bonusPremium=7000,insurancePremium=3000;
		//var profits=[ [2, 0, 1],[0, 5, 3],[0, 0, 16],[0, 0, 1]];
		//var insuranceProfits=[[5, 3, 4, 7],[2, 2, 3, 2],[3, 4, 4, 2]];	
		/*导航条*/
		/* $(function() {
				$('nav#menu').mmenu({
					slidingSubmenus: false
				});
		}); 
		*/
			
		function computeGuarantee_lcgh(){
				
				 customer=$("input[id='name']").val()+$(':radio[name="sex"]').filter(':checked').val();	
				//alert(customer);			
				 
				diposit=Math.round(i_money_all*0.3*100)/100;
				fPlanning=Math.round(i_money_all*0.6*100)/100;   //理财
				insurance=Math.round(i_money_all*0.1*100)/100;   //保险				
				            
				insurancePremium=0.3;         //意外型保险固定0.3万
				bonusPremium=Math.round((insurance-insurancePremium)*100)/100;     //分红型  				
				
				current_diposit=1;             //活期固定1万
				time_deposit=diposit-current_diposit;				
				
				$("#customer_f").text(customer);           //客户称呼
				
				$("#money_total").text(i_money_all*1);
				$("#money_diposit").text(diposit*1);                  //储蓄配置比重回显总额
				$("#money_time_deposit").text(time_deposit*1);      //定期				
				 
				$("#money_time_deposit_f1").text(time_deposit*10000);     //预计演算				
				var profit_d=1*10000*0.0075+time_deposit*10000*0.03;       //储蓄收益
				$("#deposit_profit").text(profit_d*1);
				
				var profit_f=Math.round(fPlanning*10000*0.042);       //理财收益
				$("#money_fPlanning").text(fPlanning*1);                  //理财配置比重回显总额
				$("#money_fPlanning_f1").text(Math.round(fPlanning*10000));           //预计演算
				$("#fPlanning_profit").text(profit_f*1);
				
				$("#money_insurance").text(insurance*1);                  //保险配置比重回显总额
				$("#money_bonusPremium").text(bonusPremium*1);           //分红型				
				
				var profit_d_all=i_money_all*0.0075*10000;         //全额储蓄收益
				var profit_f_all=i_money_all*0.042*10000 ;          //全额理财收益				
				var dividends=Math.round((profit_f_all-profit_d-profit_f)*2*100)/100;                //保险分红收益
				var insuranceguarantee=insurance*1;
				//理财方案对比柱状图,children arr are layers of profits,3 columns per layer:
				//layer0 profits[0]: deposit profit
				//layer1 profits[1]: finacial profit
				//layer2 profits[2]: insurance dividends
				//layer3 profits[3]: insurance
				profits=[ [profit_d_all/10000, 0, profit_d/10000],[0, profit_f_all/10000, profit_f/10000],
				          [0, 0, dividends/10000],[0, 0, insuranceguarantee]];      
			
				
				//insuranceProfits=[[5, 3, 4, 7],[2, 2, 3, 2],[3, 4, 4, 2]];              //保险保障利益演示图
				
				refreshContainer();
				refreshContainer2();
				refreshContainer3();
				refreshContainer4();
				refreshContainer5();
				
		}
		function initfu3(){
			//if premiuOK,renew & show page nianbguarantee
			 i_money_check=bonusPremium*10000;                    //强行赋值,检查函数使用 
			
				i_age=$("#age_lcgh").val();
				//i_sex=$("#male").is(':checked') ? 1:0;
				i_years=6;                                //固定6年
				i_premium=i_money_check; //old var  is customerinfo[3]				 
				computeGuarantee_fu3();
		}	
		function initbbb(){
			i_money_check=3000;                      //强行赋值,检查函数使用 
			 
			//if(premiumOK_bbb()){
				i_age=$("#age_lcgh").val();
				//i_sex=$("#male").is(':checked') ? 1:0;
				if(i_age>"40")
				{
					if(i_age>"60")
					{
						alert("超过投保年龄限制");
						return false;
					}
					else
					{
						i_years="5";
					}
				}
				else
				{
					i_years="5a";
				}
				i_liability="A";
				i_premium=i_money_check; //old var  is customerinfo[3]
				 
				computeGuarantee_bbb();
		}
		
		function computeGuarantee_fu3(){				
				 $("#showage_f3").text(i_age);
				//coverages used in table
				var i_copiesMain=i_premium/1000;
				var i_f3=9;
				
				if(i_age<=40)
				{
					i_f3=0;				
				}
				else
				{	
					if((i_age>=41)&&(i_age<=50))
					{
						i_f3=1;	
					}
					else
					{
						if((i_age>=51)&&(i_age<=55))
						{
							i_f3=2;	
						}
						else
						{
							if((i_age>=56)&&(i_age<=60))
							{
								i_f3=3;	
							}
							else
							{
								if((i_age>=61)&&(i_age<=65))
								{
									i_f3=4;	
								}
								else
								{
									i_f3=5;	
								}
							}
						}
					}
				}
				
				if(i_years==3){
					f_additionalcoverage=arr_fu3[1][i_f3]*i_copiesMain;
					f_all_coverage=f_additionalcoverage*3;
					$("#coverage_f3").text(formatNum(f_additionalcoverage*1));   //回显基本保额       
					$("#mainpremium_f3").text(formatNum(i_premium*1));     //回显保费
					$("#payperiodmain_f3").text(i_years+"年");
				}
				else{
					if(i_years==6)
					{
						f_additionalcoverage=arr_fu3[2][i_f3]*i_copiesMain;
						f_all_coverage=f_additionalcoverage*6;
						$("#coverage_f3").text(formatNum(f_additionalcoverage*1));   //回显基本保额       
						$("#mainpremium_f3").text(formatNum(i_premium*1));     //回显保费
						$("#payperiodmain_f3").text(i_years+"年");
					}
					else
					{
						f_additionalcoverage=arr_fu3[0][i_f3]*i_copiesMain;
						f_all_coverage=f_additionalcoverage*1;
						$("#coverage_f3").text(formatNum(f_additionalcoverage*1));   //回显基本保额       
						$("#mainpremium_f3").text(formatNum(i_premium*1));     //回显保费
						$("#payperiodmain_f3").text("一次性交费");
					}
				}
				
							 
				$("#mainpremium_f3_a").text(formatNum(i_premium*1));     //回显保费
				$("#f_all_coverage_f3").text(formatNum(f_all_coverage*1));     //回显满期保险金				 

				$("#unexpectedgomin_f3_a").text(formatNum(f_additionalcoverage));   //回显最低金额=三种缴费方式的基本保额*缴费1年
				$("#unexpectedgomin_f3_b").text(formatNum(f_additionalcoverage*2));   //回显最低金额=三种缴费方式的基本保额*缴费1年*2倍
				$("#unexpectedgomin_f3_c").text(formatNum(f_additionalcoverage*3));   //回显最低金额=三种缴费方式的基本保额*缴费1年*3倍
				
				$("#unexpectedgomax_f3_a").text(formatNum(f_all_coverage));   //回显最高金额=三种缴费方式的基本保额*缴费年度*1倍
				$("#unexpectedgomax_f3_b").text(formatNum(f_all_coverage*2));   //回显最高金额=三种缴费方式的基本保额*缴费年度*2倍
				$("#unexpectedgomax_f3_c").text(formatNum(f_all_coverage*3));   //回显最高金额=三种缴费方式的基本保额*缴费年度*3倍
				

			}	 /*fu3*/
		
		function computeGuarantee_bbb(){
				//$("#customerinfoshow").text("success:"+customerinfo.join());
				//alert($("#payperiodmain").text());
				 $("#showage_bbb").text(i_age);
				//coverages used in table				
				
				var i_copiesMain=i_premium/1000;
				var i_duration=0;
				var i_multiple=16;
				var i_age_check;
				 
				if(i_years==1){
					if(i_liability=="B") 
					{
						f_additionalcoverage=arr_bbb_bus_1y[i_age]*i_copiesMain;
					}
					else
					{
						f_additionalcoverage=arr_bbb_car_1y[i_age]*i_copiesMain;
					}
								
					$("#payperiodmain_bbb").text("一次性交费");     //缴费期间
					i_duration=5;					               //保险期间
					f_max_premium=i_premium*1;                     //满期保费(最大)
					i_age_check=i_age*1+5;                         //保险责任期间满看是否超过18岁
				}
				else{
					if(i_years==3)
					{
						if(i_liability=="B") 
						{
							f_additionalcoverage=arr_bbb_bus_3y[i_age]*i_copiesMain;
						}
						else
						{
							f_additionalcoverage=arr_bbb_car_3y[i_age]*i_copiesMain;
						}
						
						$("#payperiodmain_bbb").text(i_years+"年");     //缴费期间
						i_duration=6;	                            //保险期间
						f_max_premium=i_premium*3;                     //满期保费(最大)
						i_age_check=i_age*1+6;                         //保险责任期间满看是否超过18岁
					}
					else
					{
						if(i_years==5)
						{
							if(i_liability=="B") 
							{
								f_additionalcoverage=arr_bbb_bus_5y[i_age]*i_copiesMain;
							}
							else
							{
								f_additionalcoverage=arr_bbb_car_5y[i_age]*i_copiesMain;
							}
							
							$("#payperiodmain_bbb").text(i_years+"年");     //缴费期间
							i_duration=10;	                              //保险期间
							f_max_premium=i_premium*5;                     //满期保费(最大)
							i_age_check=i_age*1+10;                         //保险责任期间满看是否超过18岁
						}
						else
						{
							if(i_liability=="B") 
							{
								f_additionalcoverage=arr_bbb_bus_5ay[i_age]*i_copiesMain;
							}
							else
							{
								f_additionalcoverage=arr_bbb_car_5ay[i_age]*i_copiesMain;
							}
							
							$("#payperiodmain_bbb").text("5年");     //缴费期间
							i_duration=30;	                              //保险期间
							f_max_premium=i_premium*5;                     //满期保费(最大)
							i_age_check=i_age*1+30;                         //保险责任期间满看是否超过18岁
						}
					}
				}
				
				
				$("#duration_bbb").text(i_duration+"年");                  //回显保险期间
				$("#disease_bbb").text(formatNum(i_premium*1.05));                            //重疾	
				$("#disease_bbb_b").text(formatNum(i_premium*1.05));                          //重疾								
				$("#f_all_coverage_bbb").text(formatNum(f_additionalcoverage*1));      //回显满期保险金=基本保险金额
				$("#f_all_coverage_bbb_b").text(formatNum(f_additionalcoverage*1));     //回显满期保险金=基本保险金额
				$("#f_all_coverage_bbb_dun").text(formatNum(f_additionalcoverage*1));      //回显满期保险金=基本保险金额
				$("#f_all_coverage_bbb_b_dun").text(formatNum(f_additionalcoverage*1));     //回显满期保险金=基本保险金额
				
				$("#disease_bbb").text(formatNum(i_premium*1.05));                          //重疾_min		
				$("#unexpected_air_bbb").text(formatNum(i_premium*160));                    //意外身故_航空_min

				$("#disease_bbb_max").text(formatNum(f_max_premium*1.05));                          //重疾_max
				$("#disease_bbb_max_b").text(formatNum(f_max_premium*1.05));                          //重疾_max
				$("#disease_bbb_max_dun").text(formatNum(f_max_premium*1.05));                          //重疾_max
				$("#disease_bbb_max_b_dun").text(formatNum(f_max_premium*1.05));                          //重疾_max					
				$("#unexpected_air_bbb_max").text(formatNum(f_max_premium*160));                    //意外身故_航空_max
				$("#unexpected_air_bbb_max_dun").text(formatNum(f_max_premium*160));                    //意外身故_航空_max
				
				$("#unexpected_bbb").text(formatNum(i_premium*16));                       //意外身故_min
				$("#unexpected_bbb_max").text(formatNum(f_max_premium*16));                //意外身故_max
				$("#unexpected_bbb_max_dun").text(formatNum(f_max_premium*16));                //意外身故_max
				 
				$("#unexpected_bbb_b").text(formatNum(i_premium*16));                       //意外身故_min
				$("#unexpected_bbb_max_b").text(formatNum(f_max_premium*16));                //意外身故_max
				$("#unexpected_bbb_max_b_dun").text(formatNum(f_max_premium*16));                //意外身故_max
				$("#unexpected_bbb_max_dun").text(formatNum(f_max_premium*16));                //意外身故_max
			
				$("#age_bbb_min1").text(formatNum(i_premium*1.05));                          //18岁以下按照已交保费1.05赔付	
				$("#age_bbb_min2").text(formatNum(i_premium*1.05));                          //18岁以下按照已交保费1.05赔付	
				$("#age_bbb_min3").text(formatNum(i_premium*1.05));                          //18岁以下按照已交保费1.05赔付	
				$("#age_bbb_min4").text(formatNum(i_premium*1.05));                          //18岁以下按照已交保费1.05赔付	
				$("#age_bbb_min5").text(formatNum(i_premium*1.05));                          //18岁以下按照已交保费1.05赔付	
				$("#age_bbb_max1").text(formatNum(f_max_premium*1.05));                          //18岁以下按照已交保费1.05赔付
				$("#age_bbb_max2").text(formatNum(f_max_premium*1.05));                          //18岁以下按照已交保费1.05赔付
				$("#age_bbb_max3").text(formatNum(f_max_premium*1.05));                          //18岁以下按照已交保费1.05赔付
				$("#age_bbb_max4").text(formatNum(f_max_premium*1.05));                          //18岁以下按照已交保费1.05赔付
				$("#age_bbb_max5").text(formatNum(f_max_premium*1.05));                          //18岁以下按照已交保费1.05赔付
				$("#age_bbb_max1_dun").text(formatNum(f_max_premium*1.05));                          //18岁以下按照已交保费1.05赔付
				$("#age_bbb_max2_dun").text(formatNum(f_max_premium*1.05));                          //18岁以下按照已交保费1.05赔付
				$("#age_bbb_max3_dun").text(formatNum(f_max_premium*1.05));                          //18岁以下按照已交保费1.05赔付
				$("#age_bbb_max4_dun").text(formatNum(f_max_premium*1.05));                          //18岁以下按照已交保费1.05赔付
				$("#age_bbb_max5_dun").text(formatNum(f_max_premium*1.05));                          //18岁以下按照已交保费1.05赔付
				
				$("#age_bbb_min1_below").text(formatNum(i_premium*1.05));                          //18岁以下按照已交保费1.05赔付	
				$("#age_bbb_min2_below").text(formatNum(i_premium*1.05));                          //18岁以下按照已交保费1.05赔付	
				$("#age_bbb_min3_below").text(formatNum(i_premium*1.05));                          //18岁以下按照已交保费1.05赔付	
				$("#age_bbb_min4_below").text(formatNum(i_premium*1.05));                          //18岁以下按照已交保费1.05赔付	
				$("#age_bbb_min5_below").text(formatNum(i_premium*1.05));                          //18岁以下按照已交保费1.05赔付	
				$("#age_bbb_max1_below").text(formatNum(f_max_premium*1.05));                          //18岁以下按照已交保费1.05赔付
				$("#age_bbb_max2_below").text(formatNum(f_max_premium*1.05));                          //18岁以下按照已交保费1.05赔付
				$("#age_bbb_max3_below").text(formatNum(f_max_premium*1.05));                          //18岁以下按照已交保费1.05赔付
				$("#age_bbb_max4_below").text(formatNum(f_max_premium*1.05));                          //18岁以下按照已交保费1.05赔付
				$("#age_bbb_max5_below").text(formatNum(f_max_premium*1.05));                          //18岁以下按照已交保费1.05赔付
				$("#age_bbb_max1_below_dun").text(formatNum(f_max_premium*1.05));                          //18岁以下按照已交保费1.05赔付
				$("#age_bbb_max2_below_dun").text(formatNum(f_max_premium*1.05));                          //18岁以下按照已交保费1.05赔付
				$("#age_bbb_max3_below_dun").text(formatNum(f_max_premium*1.05));                          //18岁以下按照已交保费1.05赔付
				$("#age_bbb_max4_below_dun").text(formatNum(f_max_premium*1.05));                          //18岁以下按照已交保费1.05赔付
				$("#age_bbb_max5_below_dun").text(formatNum(f_max_premium*1.05));                          //18岁以下按照已交保费1.05赔付
				
				$("#disease_bbb_below").text(formatNum(i_premium*1.05));                            //重疾	
				$("#disease_bbb_b_below").text(formatNum(i_premium*1.05));                          //重疾			
				$("#disease_bbb_max_below").text(formatNum(f_max_premium*1.05));                          //重疾_max
				$("#disease_bbb_max_b_below").text(formatNum(f_max_premium*1.05));                          //重疾_max	
				$("#f_all_coverage_bbb_below").text(formatNum(f_additionalcoverage*1));      //回显满期保险金=基本保险金额
				$("#f_all_coverage_bbb_b_below").text(formatNum(f_additionalcoverage*1));     //回显满期保险金=基本保险金额
				
				$("#disease_bbb_below_dun").text(formatNum(i_premium*1.05));                            //重疾	
				$("#disease_bbb_b_below_dun").text(formatNum(i_premium*1.05));                          //重疾			
				$("#disease_bbb_max_below_dun").text(formatNum(f_max_premium*1.05));                          //重疾_max
				$("#disease_bbb_max_b_below_dun").text(formatNum(f_max_premium*1.05));                          //重疾_max	
				$("#f_all_coverage_bbb_below_dun").text(formatNum(f_additionalcoverage*1));      //回显满期保险金=基本保险金额
				$("#f_all_coverage_bbb_b_below_dun").text(formatNum(f_additionalcoverage*1));     //回显满期保险金=基本保险金额
				
				if(i_years==1)            //趸交
				{
					if(i_liability=="B") 
					{
						$("#unexpected_car_bbb_max_dun").text(formatNum(f_max_premium*16));                    //意外身故_自驾_max
						$("#unexpected_bus_bbb_max_dun").text(formatNum(f_max_premium*160));                    //意外身故_公共交通_max
						$("#unexpected_multiple_bus_dun").text(i_multiple*10+"倍");                 //公共倍数
						$("#unexpected_multiple_air_dun").text(i_multiple*10+"倍");                 //航空倍数
						$("#unexpected_multiple_car_dun").text(i_multiple*1+"倍");                 //自驾车倍数
						$("#group_bbb").text("公共交通计划");                  //回显保险组合
						if(i_age_check>=18)
						{
							$(".echo_bbb_b").hide();
							$(".echo_bbb_a").hide();
							$(".echo_bbb_a_below").hide();
							$(".echo_bbb_b_below").hide();
							$(".echo_bbb_b_dun").show();
							$(".echo_bbb_a_dun").hide();
							$(".echo_bbb_a_below_dun").hide();
							$(".echo_bbb_b_below_dun").hide();
							if(i_age<18)
							{						
								$(".alert_bbb").show();	
							}
							else
							{
								$(".alert_bbb").hide();
							}
						}
						else
						{
							$(".echo_bbb_a_below").hide();
							$(".echo_bbb_a").hide();
							$(".echo_bbb_b").hide();
							$(".echo_bbb_b_below").hide();
							$(".echo_bbb_a_below_dun").hide();
							$(".echo_bbb_a_dun").hide();
							$(".echo_bbb_b_dun").hide();
							$(".echo_bbb_b_below_dun").show();
						}
					}
					else
					{
						$("#unexpected_car_bbb_dun").text(formatNum(i_premium*160));                    //意外身故_自驾_min
						$("#unexpected_car_bbb_max_dun").text(formatNum(f_max_premium*160));                    //意外身故_自驾_max
						$("#unexpected_bus_bbb_dun").text(formatNum(i_premium*16));                    //意外身故_公共交通_min
						$("#unexpected_bus_bbb_max_dun").text(formatNum(f_max_premium*16));                    //意外身故_公共交通_max
						$("#unexpected_multiple_bus_dun").text(i_multiple+"倍");                 //公共倍数
						$("#unexpected_multiple_air_dun").text(i_multiple*10+"倍");                 //航空倍数
						$("#unexpected_multiple_car_dun").text(i_multiple*10+"倍");                 //自驾车倍数
						$("#group_bbb").text("自驾航空计划");                  //回显保险组合
						if(i_age_check>=18)
						{
							$(".echo_bbb_a").hide();
							$(".echo_bbb_b").hide();
							$(".echo_bbb_b_below").hide();
							$(".echo_bbb_a_below").hide();
							$(".echo_bbb_a_dun").show();
							$(".echo_bbb_b_dun").hide();
							$(".echo_bbb_b_below_dun").hide();
							$(".echo_bbb_a_below_dun").hide();
							if(i_age<18)
							{
								$(".alert_bbb").show();
							}
							else
							{
								$(".alert_bbb").hide();
							}
						}
						else
						{
							$(".echo_bbb_a_below").hide();
							$(".echo_bbb_a").hide();
							$(".echo_bbb_b").hide();
							$(".echo_bbb_b_below").hide();
							$(".echo_bbb_a_below_dun").show();
							$(".echo_bbb_a_dun").hide();
							$(".echo_bbb_b_dun").hide();
							$(".echo_bbb_b_below_dun").hide();
						}
					}
				}
				else               
				{
					if(i_liability=="B") 
					{
						$("#unexpected_car_bbb").text(formatNum(i_premium*16));                    //意外身故_自驾_min
						$("#unexpected_car_bbb_max").text(formatNum(f_max_premium*16));                    //意外身故_自驾_max
						$("#unexpected_bus_bbb").text(formatNum(i_premium*160));                    //意外身故_公共交通_min
						$("#unexpected_bus_bbb_max").text(formatNum(f_max_premium*160));                    //意外身故_公共交通_max
						$("#unexpected_multiple_bus").text(i_multiple*10+"倍");                 //公共倍数
						$("#unexpected_multiple_air").text(i_multiple*10+"倍");                 //航空倍数
						$("#unexpected_multiple_car").text(i_multiple*1+"倍");                 //自驾车倍数
						$("#group_bbb").text("公共交通计划");                  //回显保险组合
						if(i_age_check>=18)
						{
							$(".echo_bbb_b").show();
							$(".echo_bbb_a").hide();
							$(".echo_bbb_a_below").hide();
							$(".echo_bbb_b_below").hide();
							$(".echo_bbb_b_dun").hide();
							$(".echo_bbb_a_dun").hide();
							$(".echo_bbb_a_below_dun").hide();
							$(".echo_bbb_b_below_dun").hide();
							if(i_age<18)
							{						
								$(".alert_bbb").show();	
							}
							else
							{
								$(".alert_bbb").hide();
							}
						}
						else
						{
							$(".echo_bbb_a_below").hide();
							$(".echo_bbb_a").hide();
							$(".echo_bbb_b").hide();
							$(".echo_bbb_b_below").show();
							$(".echo_bbb_a_below_dun").hide();
							$(".echo_bbb_a_dun").hide();
							$(".echo_bbb_b_dun").hide();
							$(".echo_bbb_b_below_dun").hide();
						}
					}
					else
					{
						$("#unexpected_car_bbb").text(formatNum(i_premium*160));                    //意外身故_自驾_min
						$("#unexpected_car_bbb_max").text(formatNum(f_max_premium*160));                    //意外身故_自驾_max
						$("#unexpected_bus_bbb").text(formatNum(i_premium*16));                    //意外身故_公共交通_min
						$("#unexpected_bus_bbb_max").text(formatNum(f_max_premium*16));                    //意外身故_公共交通_max
						$("#unexpected_multiple_bus").text(i_multiple+"倍");                 //公共倍数
						$("#unexpected_multiple_air").text(i_multiple*10+"倍");                 //航空倍数
						$("#unexpected_multiple_car").text(i_multiple*10+"倍");                 //自驾车倍数
						$("#group_bbb").text("自驾航空计划");                  //回显保险组合
						if(i_age_check>=18)
						{
							$(".echo_bbb_a").show();
							$(".echo_bbb_b").hide();
							$(".echo_bbb_b_below").hide();
							$(".echo_bbb_a_below").hide();
							$(".echo_bbb_a_dun").hide();
							$(".echo_bbb_b_dun").hide();
							$(".echo_bbb_b_below_dun").hide();
							$(".echo_bbb_a_below_dun").hide();
							if(i_age<18)
							{
								$(".alert_bbb").show();
							}
							else
							{
								$(".alert_bbb").hide();
							}
						}
						else
						{
							$(".echo_bbb_a_below").show();
							$(".echo_bbb_a").hide();
							$(".echo_bbb_b").hide();
							$(".echo_bbb_b_below").hide();
							$(".echo_bbb_a_below_dun").hide();
							$(".echo_bbb_a_dun").hide();
							$(".echo_bbb_b_dun").hide();
							$(".echo_bbb_b_below_dun").hide();
						}
					}
				}
			}	 /*年年好百倍保*/