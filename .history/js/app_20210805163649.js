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
      var listSong = document.querySelector("#listSong");
      Array.from(data).map(function (dataSong) {
        html += `
    <div class="col">
      <div class="music-item p-3 m-2">
        <h4>${dataSong.name}</h4>
        <p class="mb-0">${dataSong.author}</p>
      </div>
  </div>
    `
      })
    }
  }
}