

 $(window).on('load', function() {
  onl();

  document.getElementById("fio").value=get_cookie ( "fio" );
  document.getElementById("order_email").value=get_cookie ( "order_email" );
  document.getElementById("order_tel").value=get_cookie ( "order_tel" );
  document.getElementById("adress").value=get_cookie ( "adress" );
  document.getElementById("order_billing_city").value=get_cookie ( "order_billing_city" );
  document.getElementById("card_nom").value=get_cookie ( "card_nom" );
  document.getElementById("order_billing_zip").value=get_cookie ( "order_billing_zip" );
  document.getElementById("cvv").value=get_cookie ( "cvv" );
 })

function onl(){
  document.getElementById("btngo").addEventListener("click", function() {
    set_cookie ( "fio", document.getElementById("fio").value);
    set_cookie ( "order_email", document.getElementById("order_email").value);
    set_cookie ( "order_tel", document.getElementById("order_tel").value);
    set_cookie ( "adress", document.getElementById("adress").value);
    set_cookie ( "order_billing_city", document.getElementById("order_billing_city").value);
    set_cookie ( "card_nom", document.getElementById("card_nom").value);
    set_cookie ( "order_billing_zip", document.getElementById("order_billing_zip").value);
    set_cookie ( "cvv", document.getElementById("cvv").value);

  });
}


// document.cookie = "userName=Vasya";
// alert(getCookie("userName"));
function set_cookie ( name, value )
{
  var cookie_string = name + "=" +  ( value );
  var cookie_date = new Date ( 2020, 01, 15 );
  cookie_string += "; expires=" + cookie_date.toGMTString();
 
  document.cookie = cookie_string;
}

function get_cookie ( cookie_name )
{
  var results = document.cookie.match ( '(^|;) ?' + cookie_name + '=([^;]*)(;|$)' );
 
  if ( results )
    return ( unescape ( results[2] ) );
  else
    return null;
}

function delete_cookie ( cookie_name )
{
  var cookie_date = new Date ( );  // Текущая дата и время
  cookie_date.setTime ( cookie_date.getTime() - 1 );
  document.cookie = cookie_name += "=; expires=" + cookie_date.toGMTString();
}