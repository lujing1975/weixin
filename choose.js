function addFormInfo(number1,name)
{
	alert("new");
	alert(number1);
	alert(name);
   	methodPara("addFormInfo","["+number1+","+name+"]",funFormInfo);
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
    alert(result);
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
