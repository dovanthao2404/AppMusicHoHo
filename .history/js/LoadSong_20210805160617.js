

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
    Array.from(data).map(function (dataSong) {
      html += `
      <div class="col">
      <a href="#">
        <div class="music-item p-3 m-2">
            <h4>${dataSong.name}</h4>
            <p class="mb-0">${dataSong.author}</p>

        </div>
      </a>
    </div>
      `
    })
    listSong.innerHTML = html;

  })
  .catch(function (err) {
    console.log(err)
  })