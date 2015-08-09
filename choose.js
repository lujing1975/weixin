function writetestInfo()
{
	$("#sltServiceType").val(1) ;
	$("#txtFlightNo").val("FlightNo");
	$("#sltCarType").val(1) ;
	$("#txtPax").val(1);
	$("#txtChildren").val(0);
	$("#txtCarNumber").val(2) ;
	$("#txtLuggage").val(2);	
	$("#txtFromName").val("From Name");
	$("#txtFromGPS").val("From GPS");
	$("#txtFromAddr").val("From Addr");
	$("#txtFromTel").val("From Tel");
	$("#txtToName").val("To Name");
	$("#txtToGPS").val("To GPS");
	$("#txtToAddr").val("To Addr");
	$("#txtToTel").val("To Tel");
	$("#txtServiceTime").val("03/08/2015 15:45");
//\这个符号要测试,.[]
	$("#txtPickupPort").val("百货商场3号楼百货商场3号楼百货商场3号,楼百货商场[a#。aa]3号楼百货商场3号楼百货商场3号楼百货商场3号楼");
	$("#txtItinerary").val("先到机场,再到海边先到机场,再到海边...先到机场,再到海边...先到机场,再到海边.../") ;
	$("#txtRemark").val("需要一辆单车{女式}") ;

	$("#txtEnName").val("martin.luther.king");
	$("#txtOriginalName").val("马丁.路");

	$("#txtPhoneNumber").val("18688719635");
	$("#txtEmail").val("465679014@qq.com") ;
	$("#sltBookingFrom").val("2");


	$("#txtAirline").val("Shenzhen Air");
	$("#txtDepartureTime").val("05/08/2015 15:45");
	$("#txtArrivalTime").val("05/08/2015 17:45");

	$("#ckbTransferFlight").attr("checked","true");

	$("#txtTransFlightNo").val("FD317");
	$("#txtTransAirline").val("Thailand Air");
	$("#txtTransDepartureTime").val("05/08/2015 21:45");
	$("#txtPrice").val("2000");
	$("#sltCurrency").val("101");

	$("#txtPrepaid").val("400");
	$("#txtCashToPay").val("1000");
	$("#sltPaymentMethod").val("104");
}

function clearInfo()
{
	$("#sltServiceType").val(1) ;
	$("#txtFlightNo").val("");
	$("#sltCarType").val(1) ;
	$("#txtPax").val(1);
	$("#txtChildren").val(0);
	$("#txtCarNumber").val(1) ;
	$("#txtLuggage").val(1);	
	$("#txtFromName").val("");
	$("#txtFromGPS").val("");
	$("#txtFromAddr").val("");
	$("#txtFromTel").val("");
	$("#txtToName").val("");
	$("#txtToGPS").val("");
	$("#txtToAddr").val("");
	$("#txtToTel").val("");
	$("#txtServiceTime").val("");
//\这个符号要测试,.[]
	$("#txtPickupPort").val("");
	$("#txtItinerary").val("") ;
	$("#txtRemark").val("") ;

	$("#txtEnName").val("");
	$("#txtOriginalName").val("");

	$("#txtPhoneNumber").val("");
	$("#txtEmail").val("") ;
	$("#sltBookingFrom").val("");


	$("#txtAirline").val("");
	$("#txtDepartureTime").val("");
	$("#txtArrivalTime").val("");

	//$("#ckbTransferFlight").attr("checked","false");
	$("#ckbTransferFlight").removeAttr("checked");

	$("#txtTransFlightNo").val("");
	$("#txtTransAirline").val("");
	$("#txtTransDepartureTime").val("");
	$("#txtPrice").val("0");
	$("#sltCurrency").val("100");

	$("#txtPrepaid").val("0");
	$("#txtCashToPay").val("0");
	$("#sltPaymentMethod").val("100");
}

function addFormInfo(userID)
{


	var str='[';
	// alert("begin Sql");
	str+=userID + ',';	
	str+=$("#sltServiceType").val() + ',';              //1
	str+='"' + $("#txtFlightNo").val() + '",';          //2  
	str+=$("#sltCarType").val() + ',';                  //3
	str+=$("#txtPax").val() + ',';                      //4
	str+=$("#txtChildren").val() + ',';                 //5
	str+=$("#txtCarNumber").val() + ',';                //6
	str+=$("#txtLuggage").val() + ',';                  //7
	
	str+='"' + $("#txtFromName").val() + '",';          //8
	str+='"' + $("#txtFromGPS").val() + '",';
	str+='"' + $("#txtFromAddr").val() + '",';
	str+='"' + $("#txtFromTel").val() + '",';

	str+='"' + $("#txtToName").val() + '",';
	str+='"' + $("#txtToGPS").val() + '",';
	str+='"' + $("#txtToAddr").val() + '",';
	str+='"' + $("#txtToTel").val() + '",';
	str+='"' + $("#txtServiceTime").val() + ':00",';


	str+='"' + $("#txtPickupPort").val() + '",';
	str+='"' + $("#txtItinerary").val() + '",';
	str+='"' + $("#txtRemark").val() + '",';

	str+='"' + $("#txtEnName").val() + '",';
	str+='"' + $("#txtOriginalName").val() + '",';

	str+='"' + $("#txtPhoneNumber").val() + '",';
	str+='"' + $("#txtEmail").val() + '",';
	str+=$("#sltBookingFrom").val() + ',';


	str+='"' + $("#txtAirline").val() + '",';
	str+='"' + $("#txtDepartureTime").val() + ':00",';
	str+='"' + $("#txtArrivalTime").val() + ':00",';

	if ($("#ckbTransferFlight").is(":checked"))
		str+='1,';
	else
		str+='0,';

	str+='"' + $("#txtTransFlightNo").val() + '",';
	str+='"' + $("#txtTransAirline").val() + '",';
	str+='"' + $("#txtTransDepartureTime").val() + ':00",';
	str+='"' + $("#txtPrice").val() + '",';
	str+=$("#sltCurrency").val() + ',';

	str+='"' + $("#txtPrepaid").val() + '",';
	str+='"' + $("#txtCashToPay").val() + '",';
	str+=$("#sltPaymentMethod").val() ;		
	str+=']';


	//1,"ABC",1]';
   	methodPara("addFormInfo",str,funFormInfo);
}


function funFormInfo(result)
{	
	if (result=="0")
		alert("Failure to submit the order!Please contact administrator!")
	else
		if (result.substr(1,5)=="error")
			alert("Failure to submit the order!"+result);	
		else	
			{				
				alert("Order no. [" + result + "] submit successfully!");	
				clearInfo();
			}	
			
}

//取订单录入初始化信息
function getFormInitInfo(companyId)
{
	//waitLockScreen();
    methodPara("getFormInitInfo","["+companyId+"]",funFormInitInfoResult);
}




function funFormInitInfoResult(result)
{
    //unLockWaitScreen();
    // alert(result);
    var i=0;
    var dataObj = eval("("+result+")");
    //遍历销售员
    
    // $('#saleAgent').html('');
    // $('#laywer').html('');
    // $('#payItem').html('');

    //$('#sltServiceType').html('');
	//alert($("#sltServiceType").find("option:selected").text());
    
    //alert(dataObj.ServiceType);
    // 初始化
    $.each(dataObj.ServiceType,function(i,item){
           $.each(item,function(key,value){           			           			           			
                  	$('#sltServiceType').append("<option value='"+key+"'>"+value+"</option>");
        });
    });

    $.each(dataObj.CarType,function(i,item){
           $.each(item,function(key,value){           			           			           			
                  	$('#sltCarType').append("<option value='"+key+"'>"+value+"</option>");
        });
    });

    $.each(dataObj.BookingFrom,function(i,item){
           $.each(item,function(key,value){           			           			           			
                  	$('#sltBookingFrom').append("<option value='"+key+"'>"+value+"</option>");
        });
    });

    $.each(dataObj.PaymentMethod,function(i,item){
           $.each(item,function(key,value){           			           			           			
                  	$('#sltPaymentMethod').append("<option value='"+key+"'>"+value+"</option>");
        });
    });

    $.each(dataObj.Currency,function(i,item){
           $.each(item,function(key,value){           			           			           			
                  	$('#sltCurrency').append("<option value='"+key+"'>"+value+"</option>");
        });
    });


    //遍历代理
    // $.each(dataObj.SALEAGENT,function(i,item){
    //        $.each(item,function(key,value){
    //               if(i==0)
                  
    //               $('#saleAgent').append("<option value=''>代理</option>");
    //               $('#saleAgent').append("<option value='"+key+"'>"+value+"</option>");
    //               });
    //        });
    //遍历代理
    // $.each(dataObj.LAYWER,function(i,item){
    //        $.each(item,function(key,value){
    //               if(i==0)
    //               $('#laywer').append("<option value=''>律师楼</option>");
    //               $('#laywer').append("<option value='"+key+"'>"+value+"</option>");
    //               });
    //        });

    //遍历付款方式
    // $.each(dataObj.PAYITEM,function(i,item){
    //        $.each(item,function(key,value){
    //               $('#payItem').append("<option value='"+key+"'>"+value+"</option>");
    //               });
    //         var obj = document.getElementById('payItem');
    //         var strsel = obj.options[obj.selectedIndex].text;
    //         if(strsel.split('一次性').length >=2)
    //         {
    //          $('#bankYear').attr('disabled','disabled');
    //          $('#bankpercent').attr('disabled','disabled');
           
    //         }else
    //        {
    //         selectBankInfo(obj);
    //        }
    //        });
    //
   

}
