function getData() {
  var listElement = document.querySelectorAll("[name]");
  var data = Array.from(listElement).reduce(function (data, input) {
    data[input.name] = input.value
    return data;
  }, {})
  return data;
}

var data = getData();

console.log(data);

