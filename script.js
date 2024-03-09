function toggleMenu(){
    /* selecionando esses dois elementos especificos do html */
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburguer-icon");
    /* vai abrir ou remover a classe */
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}