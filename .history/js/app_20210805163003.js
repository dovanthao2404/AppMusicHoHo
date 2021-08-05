document.querySelector("#listSong").addEventListener("click", function (e) {
  handlePlayMusic(e);
})

function handlePlayMusic(e) {
  delegationListSong(e);

  function getParentElement(element, selector) {

  }

  function delegationListSong(e) {
    if (e.target.className.includes("music-item")) {
      console.log("a")
    }
  }
}