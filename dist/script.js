import Slide from "./Slide.js";
const container = document.getElementById("slide");
const elements = document.getElementById("slide-elements");
const controls = document.getElementById("slide-controls");

// código para o arquivo /dist/script.js
// O primeiro seletor .slide, deve ser o elemento que envolve diretamente a div que envolve os elementos.
// O segundo seletor deve ser os elementos que você quer que seja o slide.
// O terceiro elemento deve ser uma div vazia que será os controles.
// O quarto elemento será o tempo em ms para o slider passar.
if (container && elements && controls && elements.children.length) {
    const slide = new Slide(container, Array.from(elements.children), controls, 3000);
}
//# sourceMappingURL=script.js.map