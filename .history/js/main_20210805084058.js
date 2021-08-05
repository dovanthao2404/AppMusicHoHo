function getData() {
  var listElement = document.querySelectorAll("[name]");
  var data = Array.from(listElement).reduce(function (data, input) {
    data[input.name] = input.value
    return data;
  }, {})
  return data;
}

document.getElementById("btnAddMusic").addEventListener("click", function () {
  var data = getData();
  fetch("https://610b391b52d56400176b0157.mockapi.io/api/music", {
    method: "post",
    headers: { 'Content-Type': 'application/json' }
    ,
    body: JSON.stringify(data)
  })
  resetForm();
})

function resetForm() {
  var listElement = document.querySelectorAll("[name]");
  for (var i = 0; i < listElement.length; i++) {
    listElement[i].value = '';
  }
}


