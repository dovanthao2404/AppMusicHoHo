function getData() {
  var listElement = document.querySelectorAll("[name]");
  var data = Array.from(listElement).reduce(function (data, input) {
    values[input.name] = input.value
    return values;
  }, {})

}

getData();