
chrome.runtime.sendMessage({greeting: "hello"}, function(response) {
    alert(5);
    console.log(response.farewell);
});


$.ajax({
    url: "http://127.0.0.1:10000/get_items",
    type: "POST",
    data: {
        key: "111",
        item1_name: "Casino Down Jacket",
        item1_color: "Green",
        item2_name: "-",
        item2_color: "-",
    },
    success: function(data)
    {
        alert(data);
    },
    error: function (data) {
        alert("Error");
    }
});





document.getElementById("order_billing_name").value ="Petr Volnov";
document.getElementById("order_email").value ="a4-648-5@yandex.ru";
document.getElementById("order_tel").value ="+79775766448";
document.getElementById("bo").value ="Festival st. 24a";
document.getElementById("order_billing_city").value ="Moscow";
document.getElementById("cnb").value ="5469 3800 1843 1111";
document.getElementById("order_billing_zip").value ="125414";
document.getElementById("vval").value ="490";

document.getElementById('order_billing_country').selectedIndex = 28;
document.getElementById('credit_card_type').selectedIndex = 2;
document.getElementById('credit_card_month').selectedIndex = 2;
document.getElementById('credit_card_year').selectedIndex = 3;
$('.icheckbox_minimal').click();


chrome.runtime.onMessage.addListener(

    function (request, sender, sendResponse) {
        alert(6);
        if(window.location.href.includes("siteA.com") || window.location.href.includes("siteB.com")){
            if (request.action == 'showDepositModal') {
                console.log("content script got masg ", request.data);
                showModal(request.data);


            } else {
                hideModal();
            }
        }
    }
);
//$('#checkout_form').submit();

function injected_main() {
	//document.getElementById("order_billing_name").textContent +="123";;
	//parserGo();
	//$('#checkout_form').submit();
}
// function parserGo(){
// 		var mypage = $.ajax('https://habr.com/post/147111/');
// 		mypage.done(function (data) {
// 			analysisSite(data);
// 		});
// 		mypage.fail(function (e, g, f) {
// 			alert('Epic Fail');
// 		})
// 	}
// function analysisSite(data){
// 			var res = '';
// 			$(data).find('a').each(function(){
// 			  res+=$(this).text()+'=>'+$(this).attr('href')+'<br/>';
// 			})
// 			alert(res);
// 		}
			