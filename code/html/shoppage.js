 $(window).on('load', function() {

    if(setOption(document.getElementById('size'), 'Medium')){
        $('#cart-addf').submit();
        //.location.href = "https://www.supremenewyork.com/checkout";
        return 0;
    }
    if(setOption(document.getElementById('size'), 'Large')){
        $('#cart-addf').submit();
        //document.location.href = "https://www.supremenewyork.com/checkout";
        return 0;
    }
    

});
function setOption(selectElement, value) {
    var options = selectElement.options;
    for (var i = 0, optionsLength = options.length; i < optionsLength; i++) {
        if (options[i].innerHTML == value) {
            selectElement.selectedIndex = i;
            return true;
        }
    }
    return false;
}
