function clicou(event) {
  const divContainer = document.querySelector("#videoContainerCapa");
  var altura = document.querySelector("#videoContainerCapa").clientHeight;
  var largura = document.querySelector("#videoContainerCapa").clientWidth;

  divContainer.innerHTML = `
  <iframe 
  src="https://player.vimeo.com/video/787406515?h=7182d611c1&amp;title=0&amp;byline=0&amp;portrait=0&amp;autoplay=1&amp;speed=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" 
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
