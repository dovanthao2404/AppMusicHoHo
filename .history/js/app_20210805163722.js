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
      Array.from(data).map(function (dataSong) {

      })
    }
  }
}