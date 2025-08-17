export function tocarSom(id){
  const som = document.getElementById(id);
  const repete = som.cloneNode(true);
  repete.play();
}

export function pararSom(id){
  document.getElementById(id).pause();
}