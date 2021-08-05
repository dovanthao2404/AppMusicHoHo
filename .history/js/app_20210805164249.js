document.querySelector("#listSong").addEventListener("click", function (e) {
  handlePlayMusic(e);
})

function handlePlayMusic(e) {
  delegationListSong(e);

  function getParentElement(element, selector) {
    while (element.parentElement) {
      if (element.parentElement.matches(selector))
        return element.parentElement;
      element = element.parentElement;
    }
    return undefined;
  }


  function getData() {
    return fetch("https://610b391b52d56400176b0157.mockapi.io/api/music")
  }


  function delegationListSong(e) {
    var musicItem = getParentElement(e.target, ".music-item");
    if (musicItem) {
      var nameSong = musicItem.querySelector("h4");

      getData()
        .then(function (resp) {
          return resp.json()
        })
        .then(function (data) {
          var song = Array.from(data).find(function (dataSong) {
            return dataSong.name === nameSong;
          })

          if (song) {
            playSong(song);
          }

          function playSong(song) {
            var audio = document.querySelector("audio");
            audio.src = song.link;
            audio.setAttribute("autoplay", "");
            console.log("a")
          }




        })
        .catch(function (err) {
          console.log(err)
        })
    }
  }
}