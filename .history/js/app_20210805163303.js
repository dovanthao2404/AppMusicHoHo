document.querySelector("#listSong").addEventListener("click", function (e) {
  handlePlayMusic(e);
})

function handlePlayMusic(e) {
  delegationListSong(e);

  function getParentElement(element, selector) {
    while (element.parentElement) {
      if (element.parentElement.matches(selector))
        return element.getParentElement;
      element = element.parentElement;
    }
    return undefined;
  }

  function delegationListSong(e) {
    console.log(getParentElement(e.target, "music-item"))
    if (getParentElement(e.target, ".music-item")) {
      console.log("a")
    }
  }
}