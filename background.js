/**
 * Created by Petr on 23.09.2018.
 */

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
        //alert(data);
    },
    error: function (data) {
       // alert("Error");
    }
});

ws.onmessage = function (event) {
    alert(3);
    console.log('MESSAGE: ' + event.data);
    let msg = event.data;
    console.log('got msg form device -> ', msg);
    chrome.tabs.query({active: true}, function (tabs) {
        console.log('tab > ', tabs[0].url, tabs[0].id);
        let convertedData = String(tabs[0].url).includes("siteA.com") ? dataFormater('siteA', msg) : dataFormater('siteB', msg);
        chrome.tabs.sendMessage(tabs[0].id, {
            action: msg == 'removed' ? msg : 'showDepositModal',
            data: convertedData
        }, function (response) {
            console.log(response);
        });
    })
};


chrome.runtime.onMessageExternal.addListener(
    function(request, sender, sendResponse) {
        alert(2);
        if (sender.url == blocklistedWebsite)
            return;  // don't allow this web page access
        if (request.openUrlInEditor)
            openUrl(request.openUrlInEditor);
    });

chrome.extension.onMessage.addListener(function(request, sender, callback){
    //alert("message!");
    alert(3);
    if(request.cmd =='data'){
        alert(request.h.fio);
        callback('backMsg'); //обратное сообщение
        console.log('Tis message in background page printed after'
            +' receive of data1 = ', request.h.data1, '; URL= ',sender.url);
}});

chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    alert(4);
    chrome.tabs.sendMessage(tabs[0].id, {greeting: "hello"}, function(response) {
        console.log(response.farewell);
    });
});

// chrome.runtime.sendMessage({greeting: "hello"}, function(response) {
//
// });

