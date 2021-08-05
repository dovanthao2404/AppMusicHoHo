document.querySelector("#listSong").addEventListener("click", function (e) {
  handlePlayMusic(e);
})

function handlePlayMusic(e) {
  delegationListSong(e);

  function getParentElement(element, selector) {
    while (element.parentElement) {
      if (element.parentElement.matches(selector))
        return element.getParentElement;
    }
  }

  function delegationListSong(e) {
    if (getParentElement(e.target, ".music-item")) {
      console.log("a")
    }
  }
}