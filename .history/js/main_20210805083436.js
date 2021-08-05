function getData() {
  var listElement = document.querySelectorAll("[name]");
  var data = Array.from(listElement).reduce(function (data, element) {
    values[input.name] = input.value
    return values;
  }, {})

}

getData();