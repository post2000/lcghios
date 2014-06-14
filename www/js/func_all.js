﻿
/**
 * @name		中邮保险销售辅助工具V3.0.1
 * @author		广东分公司
 * @version 	V3.0.1
 */
 	
//首先需要初始化

			var arr_mainCoverage3y=new Array(3304,3304,3304,3304,3304,3304,3304,3304,3304,3304,3304,3304,3304,3304,3304,3304,3304,3304,3304,3304,3304,3304,3304,3304,3304,3304,3304,3304,3304,3304,3304,3304,3304,3304,3304,3304,3304,3304,3304,3304,3304,3304,3304,3304,3304,3304,3304,3304,3304,3304,3304,3304,3304,3304,3304,3304);
			var arr_additionalCoverageMale3y=new Array(1666,1878,2086,2296,2483,2630,2734,2770,2722,2685,2620,2535,2437,2346,2267,2199,2137,2087,2017,1926,1841,1762,1687,1610,1533,1456,1377,1297,1216,1137,1056,1004,949,892,835,778,722,668,617,569,520,472,429,391,358,329,303,279,258,239,222,206,191,178,166,155);
			var arr_additionalCoverageFemale3y=new Array(2036,2263,2459,2622,2733,2809,2842,2823,2775,2797,2806,2807,2814,2823,2838,2843,2835,2803,2693,2518,2340,2172,2005,1841,1681,1530,1391,1268,1154,1052,958,913,871,832,796,764,726,693,663,636,601,558,520,485,453,425,401,378,356,334,314,296,278,261,244,228);
			var arr_mainCoverage5y=new Array(5315,5315,5315,5315,5315,5315,5315,5315,5315,5315,5315,5315,5315,5315,5315,5315,5315,5315,5315,5315,5315,5315,5315,5315,5315,5315,5315,5315,5314,5314,5314,5314,5314,5314,5314,5314,5314,5314,5314,5314,5313,5313,5313,5313,5313,5313,5312,5312,5312,5311,5311,5311,5310,5310,5309,5308);
			var arr_additionalCoverageMale5y=new Array(2861,3226,3584,3945,4268,4520,4699,4762,4680,4616,4504,4358,4190,4032,3897,3780,3673,3586,3466,3309,3163,3028,2898,2766,2633,2501,2365,2227,2089,1952,1814,1724,1629,1532,1433,1335,1239,1146,1058,976,892,809,735,670,613,562,517,477,441,408,378,351,326,303,282,263);
			var arr_additionalCoverageFemale5y=new Array(3498,3889,4227,4506,4697,4828,4885,4854,4770,4809,4823,4826,4836,4853,4877,4886,4873,4819,4629,4328,4021,3734,3445,3164,2889,2628,2390,2179,1981,1806,1646,1568,1495,1427,1366,1310,1245,1188,1137,1091,1030,957,891,831,776,728,686,646,608,572,537,505,475,445,416,388);
			var arr_fu1=new Array(1070,1067,1066,1064,1058);
			var arr_fu3=new Array(new Array("1080","1079","1078","1076","1073","1068"),new Array("1062","1061","1060","1059","1057","1053"),new Array("1032","1032","1031","1031","1029","1027"));
			var arr_main2_5y=new  Array(1242,1242,1242,1242,1242,1242,1225,1225,1225,1225,1225,1195,1195,1195,1195,1195,1170,1170,1170,1170,1170,1145,1145,1145,1145,1145,1129,1129,1129,1129,1129,1116,1116,1116,1116,1116,1105,1105,1105,1105,1105,1086,1086,1086,1086,1086,1065,1065,1065,1065,1065,1038,1038,1038,1038,1038);
			var arr_main2_10y=new Array(1252,1252,1252,1252,1252,1252,1235,1235,1235,1235,1235,1205,1205,1205,1205,1205,1180,1180,1180,1180,1180,1155,1155,1155,1155,1155,1139,1139,1139,1139,1139,1126,1126,1126,1126,1126,1115,1115,1115,1115,1115,1096,1096,1096,1096,1096,1075,1075,1075,1075,1075,1048,1048,1048,1048,1048);
			var arr_n_a=new Array(1186,1187,1188);
			var arr_bbb_car_1y=new Array(1140,1140,1140,1140,1140,1140,1140,1140,1140,1140,1140,1140,1140,1140,1116,1090,1064,1036,1008,1008,1008,1008,1008,1008,1008,1008,1008,1008,1008,1008,1008,1008,1008,1008,1008,1008,1008,1008,1008,1008,1008,1008,1008,1007,1007,1007,1007,1007,1007,1007,1007,1007,1007,1006,1006,1006,1006,1005,1005,1005,1004);
			var arr_bbb_car_3y=new Array(3422,3422,3422,3422,3422,3422,3422,3422,3422,3422,3422,3422,3422,3348,3272,3192,3110,3054,3025,3024,3024,3024,3024,3024,3024,3024,3024,3024,3024,3024,3024,3024,3024,3024,3024,3024,3024,3023,3023,3023,3023,3023,3023,3023,3022,3022,3022,3022,3021,3021,3020,3020,3020,3019,3018,3017,3016,3015,3014,3012,3011);
			var arr_bbb_car_5y=new Array(6305,6305,6305,6305,6305,6305,6305,6305,6305,6183,6055,5923,5787,5645,5499,5378,5283,5218,5184,5184,5184,5184,5184,5184,5184,5184,5184,5184,5183,5183,5183,5183,5183,5182,5182,5182,5182,5181,5181,5180,5180,5180,5179,5178,5178,5177,5176,5175,5174,5173,5172,5170,5168,5166,5164,5161,5158,5154,5150,5145,5140);
			var arr_bbb_car_5ay=new Array(10306,10121,9929,9730,9524,9311,9090,8861,8623,8377,8122,7858,7583,7299,7003,6758,6568,6436,6368,6369,6370,6371,6371,6372,6374,6375,6376,6378,6380,6382,6384,6387,6391,6395,6399,6405,6410,6417,6424,6432,6442);
			var arr_bbb_bus_1y=new Array(1140,1140,1140,1140,1140,1140,1140,1140,1140,1140,1140,1140,1140,1140,1117,1093,1069,1043,1017,1017,1017,1017,1017,1017,1017,1017,1017,1016,1016,1016,1016,1016,1016,1016,1016,1016,1016,1016,1016,1016,1016,1016,1016,1016,1016,1016,1016,1016,1016,1016,1015,1015,1015,1015,1015,1015,1014,1014,1014,1013,1013);
			var arr_bbb_bus_3y=new Array(3422,3422,3422,3422,3422,3422,3422,3422,3422,3422,3422,3422,3422,3353,3281,3207,3130,3078,3050,3050,3050,3050,3050,3050,3050,3050,3050,3050,3050,3050,3050,3050,3050,3049,3049,3049,3049,3049,3049,3049,3049,3049,3048,3048,3048,3048,3048,3047,3047,3047,3046,3046,3045,3045,3044,3043,3042,3041,3040,3039,3037);
			var arr_bbb_bus_5y=new Array(6305,6305,6305,6305,6305,6305,6305,6305,6305,6190,6071,5948,5820,5688,5551,5437,5349,5288,5256,5256,5256,5256,5256,5256,5256,5256,5256,5256,5256,5256,5255,5255,5255,5255,5255,5254,5254,5254,5253,5253,5253,5252,5252,5251,5251,5250,5249,5249,5248,5247,5246,5244,5243,5241,5239,5236,5233,5230,5226,5222,5218);
			var arr_bbb_bus_5ay=new Array(10422,10249,10069,9884,9691,9492,9285,9071,8849,8619,8380,8133,7877,7611,7335,7106,6928,6806,6743,6744,6745,6747,6748,6750,6752,6754,6757,6759,6763,6766,6771,6776,6782,6789,6797,6805,6815,6826,6839,6853,6869);
			var arr_n_a_cash1=new Array(1035,1035,1035,1035,1035,1035,1035,1035,1035,1035,1035,1035,1035,1035,1035,1035,1035,1035,1035,1035,1035,1035,1035,1035,1035,1035,1035,1035,1035,1035,1035,1035,1035,1035,1035,1035,1035,1035,1035,1035,1035,1035,1035,1035,1035,1035,1035,1035,1035,1035,1035,1035,1035,1035,1035,1035,1034,1034,1034,1034,1034,1034,1034,1034,1034,1034);
			var arr_n_a_cash2=new Array(1071,1071,1071,1071,1071,1071,1071,1071,1071,1071,1071,1071,1071,1071,1071,1071,1071,1071,1071,1071,1071,1071,1071,1071,1071,1071,1071,1071,1071,1071,1071,1071,1071,1071,1070,1070,1071,1071,1071,1071,1071,1071,1071,1071,1071,1071,1071,1071,1070,1070,1070,1070,1070,1070,1070,1070,1070,1070,1070,1069,1070,1070,1069,1069,1070,1069);
			var arr_n_a_cash3=new Array(1108,1108,1108,1108,1108,1108,1108,1108,1108,1108,1108,1108,1108,1108,1108,1108,1108,1108,1108,1108,1108,1108,1108,1108,1108,1108,1108,1108,1108,1108,1108,1108,1108,1108,1108,1108,1108,1108,1108,1108,1108,1108,1108,1108,1108,1108,1108,1108,1108,1108,1108,1107,1107,1107,1107,1107,1107,1107,1107,1107,1107,1107,1107,1106,1107,1107);
			var arr_n_a_cash4=new Array(1146,1146,1146,1146,1146,1146,1146,1146,1146,1146,1146,1146,1146,1146,1146,1146,1146,1146,1146,1146,1146,1146,1146,1146,1146,1146,1146,1146,1146,1146,1146,1146,1146,1146,1146,1146,1146,1146,1146,1146,1146,1146,1146,1146,1146,1146,1146,1146,1146,1146,1146,1146,1146,1146,1146,1146,1146,1146,1145,1145,1146,1146,1146,1146,1146,1146);
 
 

 
		var INSURANCEPERIOD=10; //use an constant, fixed 10years insurance
			var arr_n_a_cash=arr_n_a_cash1.concat(arr_n_a_cash2,arr_n_a_cash3,arr_n_a_cash4);  //concat the four arrays
			var i_age=25;
			var i_sex=0;
			var i_years=5;
			var i_premium=5000;
			var f_mainpremium=0;
			var f_additionalpremium=0;
			var f_maincoverage=0;
			var f_additionalcoverage=0;
			var i_money_check=0; 
			
		$(function(){
			var p = navigator.platform;
		    if( p.indexOf('Linux') == -1){
		    	$('.prn').show();		    	
		    }
		    else{		    	
		    	$('.prn').hide();
		    }	    
						
			$('.prnbtn').click(function(){
				window.print();
				});
		});
			function showBlankDiv(currInput){
				//used for the premium input,so it would not be cover by the soft keyboard
				var h=$(window).height();
				//h=h+1; //just for break point
				$(currInput).find(".blankdiv").first().height(0.4*h); //raise the premium input in window
				var scroll_offset = $(currInput).offset(); //得到premium的offset，包含两个值，top和left
				$("body,html").animate({
					scrollTop:scroll_offset.top //让body的scrollTop等于pos的top，就实现了滚动
				},0);
			}
			function hideBlankDiv(currInput){
				//var h=$(window).height();
				//h=h+1;  //just for break point
				$(currInput).find(".blankdiv").first().height(0); //fall back the premium input in window
				$("body,html").animate({scrollTop:0	},0);
			}
			function premiumOK(){ //value must be  integer multiple of 1000
				var premium=i_money_check;
				 
				if(((Math.round(premium/1000)*1000) != premium)||(Math.round(premium/1000)*1000) ==0){
				//alert("a");
					//showBlankDiv();
					$(".premiumalert").show();
					$("#premium").select();
					return(false);
				}
				else{
				//alert("b");
					$(".premiumalert").hide();
					//hideBlankDiv();
					return(true);
				}
			}
			
			function premiumOK_2(){ //value must be  integer multiple of 500
				var premium=i_money_check;   //设定全局变量保存金额
				if(((Math.round(premium/500)*500) != premium)||(Math.round(premium/500)*500) ==0 ||(Math.round(premium/500)*500) ==500) {
					$(".premiumalert").show();
					$("#premium").select();
					return(false);
				}
				else{
					$(".premiumalert").hide();
					hideBlankDiv();
					return(true);
				}
			}
			
			function premiumOK_20(){ //每份1000元,20份起售
				var premium=i_money_check;   //设定全局变量保存金额
				 
				if(((Math.round(premium/1000)*1000) != premium)||(Math.round(premium/1000)*1000) ==0 ||(premium<20000)) {
					$(".premiumalert").show();
					$("#premium").select();
					return(false);
				}
				else{
					$(".premiumalert").hide();
					hideBlankDiv();
					return(true);
				}
			}
			
			function premiumOK_lcgh(){ //大于10万
				var premium=i_money_check;   //设定全局变量保存金额
				 
				if((Math.round(premium/10)*10) ==0 ||(premium<10)) {
					$(".premiumalert").show();
					$("#premium").select();
					return(false);
				}
				else{
					$(".premiumalert").hide();
					hideBlankDiv();
					return(true);
				}
			}
			
			function premiumOK_bbb(){ //百倍保要根据金额来提示
				var premium=i_money_check;   //设定全局变量保存金额
				var i_years_bbb=$('input:radio[name="years_bbb"]:checked').val();
				if(i_years_bbb=="1")
				{
					if(((Math.round(premium/500)*500) != premium)||(Math.round(premium/500)*500) ==0 ||(Math.round(premium/500)*500) ==500||(premium>15000)) {
					$("#remind_bbb").text("趸交请输入15000元以下");     //趸交不超过1.5W
					$(".premiumalert").show();
					$("#premium").select();
					return(false);
						}
					else{
						$(".premiumalert").hide();
						hideBlankDiv();
						return(true);
						}
				}
				else
				{
					if(i_years_bbb=="3")
					{
						if(((Math.round(premium/500)*500) != premium)||(Math.round(premium/500)*500) ==0 ||(Math.round(premium/500)*500) ==500 ||(premium>5000)) {
							$("#remind_bbb").text("3年期交请输入5000元以下");     //3年期不超过5000
							$(".premiumalert").show();
							$("#premium").select();
							return(false);
							}
						else{
							$(".premiumalert").hide();
							hideBlankDiv();
							return(true);
						}
					}
					else
					{
						if(((Math.round(premium/500)*500) != premium)||(Math.round(premium/500)*500) ==0 ||(Math.round(premium/500)*500) ==500 ||(premium>3000)) {
							$("#remind_bbb").text("5年期交请输入3000元以下");     //5年期不超过3000
							$(".premiumalert").show();
							$("#premium").select();
							return(false);
							}
						else{
							$(".premiumalert").hide();
							hideBlankDiv();
							return(true);
						}
					}
				}
			}
			
				function formatNum(num)
			{//参数说明：num 要格式化的数字,简化为保留2位小数
				num = String(num.toFixed(2));
				var re = /(-?\d+)(\d{3})/;
				while(re.test(num)) {num = num.replace(re,"$1,$2");}
				return ("￥"+num);
			}  
			
			/*年B部分暂时注销测试*/			
		       
			/*富1测试暂时注销*/
			
			/*fu3*/
			
			/*绵2部分暂时注销测试*/	
			
			/*新年A测试暂时注销*/ 
		
       		/*年年好百倍保*/
			

		$(document).on("pageinit", function() {			
			 //age:0~55,-1 for not set,sex:1 for male,years:3 or 5,premium per year
				//alert("getguarantee");
				/* var i_age=25;
				var i_sex=0;
				var i_years=5;
				var i_premium=5000;
				var f_mainpremium=0;
				var f_additionalpremium=0;
				var f_maincoverage=0;
				var f_additionalcoverage=0;
				var i_money_check=0;  */  //moved to public var define area
			
			$.mobile.defaultPageTransition = "none";
			//$("#cover").click(function(){
			//	$.mobile.changePage("#main");
			//});
			$("#exitprogram").click(function(){
				window.close();
				//navigator.app.exitApp(); //navigator.app.exitApp();
			});  
			 
			$(".premium_input").mouseup(function(){
				//alert("mouseup" +$("#premium").val());
				//$("#premium").val(5000); //set the value for apple bug(there ,the input wouldn't show effect if not del all number first.
				$(".premium_input").select();
				//showBlankDiv();	
			});
			
			
			//raise the premium input in window,by giveing the div height below it
			
			var h=$(window).height();
			$(".blankdiv").each(function(){
				$(this).height(0.4*h); 
			});
			$(".premium_input").each(function(){
				$(this).focus(function(){
					showBlankDiv(this);
				});
				$(this).blur(function(){
					hideBlankDiv(this);
				});
			});  
			
			
			/* $(".premium_input").each(function(){
				$(this).blur(function(){
					hideBlankDiv(this);
				});
			});
			$(".premium_input").blur(function(){
				hideBlankDiv();
			}); */
			
			/*年B部分,暂时注销测试 */
			
			
			/*mian2 info  */
			
			
			
			
			/*新年A测试暂时注销  */
			
			
			/*年年好百倍保  info  */ 
			
			/*富1测试暂时注销   
			/*fu1-end*/
			
			/*fu3  info  
			/*fu3-end*/
			
			
		});
		
		
