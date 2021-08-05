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

  function delegationListSong(e) {
    var musicItem = getParentElement(e.target, ".music-item");
    if (musicItem) {
      var nameSong = musicItem.querySelector("h4");
      console.log(nameSong.innerText);
    }
  }
}