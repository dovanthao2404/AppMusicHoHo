var listSong = document.querySelector("#listSong");

function getData() {
  return fetch("https://610b391b52d56400176b0157.mockapi.io/api/music")
}

getData()
  .then(function () {

  })