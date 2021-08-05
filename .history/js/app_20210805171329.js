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
    var listSongElement = document.querySelectorAll(".music-item");

    if (musicItem) {
      var nameSong = musicItem.querySelector("h4").innerText;

      getData()
        .then(function (resp) {
          return resp.json()
        })
        .then(function (data) {
          var song = Array.from(data).find(function (dataSong) {
            return dataSong.name === nameSong;
          })

          if (song) {

            Array.from(listSongElement).forEach(element => {
              element.classList.remove("active");
            });
            musicItem.classList.add("active");
            loadAuthor(song);
            playSong(song);
            loadCD(song);
          }

          function loadAuthor(song) {
            document.querySelector(".nameSong").innerText = song.name;
            document.querySelector(".author").innerText = song.author;
          }

          function playSong(song) {
            var audio = document.querySelector("audio");
            audio.src = song.link;
            var playPromise = audio.play();
            if (playPromise !== undefined) {
              playPromise.then(_ => {
              })
                .catch(error => {
                });
            }
          }

          function loadCD(song) {
            var cd = document.querySelector(".plate img");
            cd.src = song.img

          }

        })
        .catch(function (err) {
          console.log(err)
        })
    }
  }
}