
var user = {
    name: "Tom",
    age: 23
};
$.post(
    "/ajax.php",
    {
      fio: "param1",
      card: 2
    },
    onAjaxSuccess
  );
