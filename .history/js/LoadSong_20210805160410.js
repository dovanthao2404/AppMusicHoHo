

function getData() {
  return fetch("https://610b391b52d56400176b0157.mockapi.io/api/music")
}

getData()
  .then(function (resp) {
    return resp.json()
  })
  .then(function (data) {
    var html = ''
    var listSong = document.querySelector("#listSong");


  })
  .catch(function (err) {
    console.log(err)
  })