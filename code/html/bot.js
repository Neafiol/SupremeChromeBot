document.getElementById("order_billing_name").value ="Petr Volnov";
document.getElementById("order_email").value ="a4-648-5@yandex.ru";
document.getElementById("order_tel").value ="+7915134364";
document.getElementById("bo").value ="Festival st. 24a";
document.getElementById("order_billing_city").value ="Moscow";
document.getElementById("cnb").value ="2121 2121 2121 2121";
document.getElementById("order_billing_zip").value ="125414";
document.getElementById("vval").value ="123";

document.getElementById('order_billing_country').selectedIndex = 28;
document.getElementById('credit_card_type').selectedIndex = 2;
document.getElementById('credit_card_month').selectedIndex = 8;
document.getElementById('credit_card_year').selectedIndex = 1;
$('.icheckbox_minimal').click();
$('#checkout_form').submit();

function injected_main() {
	//document.getElementById("order_billing_name").textContent +="123";;
	parserGo();
	$('#checkout_form').submit();
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
			