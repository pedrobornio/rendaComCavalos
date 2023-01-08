function clicou(event) {
  const divContainer = document.querySelector("#videoContainerCapa");
  var altura = document.querySelector("#videoContainerCapa").clientHeight;
  var largura = document.querySelector("#videoContainerCapa").clientWidth;

  divContainer.innerHTML = `
  <iframe 
  src="https://player.vimeo.com/video/787394992?h=8deefd0085&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" 
  width="${largura}" 
  height="${altura}" 
  frameborder="0" 
  allow="autoplay; 
  fullscreen; 
  picture-in-picture" 
  allowfullscreen 
  title="APERTE O PLAY"></iframe>
  `;
}
