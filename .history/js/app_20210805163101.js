document.querySelector("#listSong").addEventListener("click", function (e) {
  handlePlayMusic(e);
})

function handlePlayMusic(e) {
  delegationListSong(e);

  function getParentElement(element, selector) {

  }

  function delegationListSong(e) {
    if (getParentElement(e.target, ".music-item")) {
      console.log("a")
    }
  }
}