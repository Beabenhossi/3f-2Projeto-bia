const getCSS = (variavel) => {
    return getComputedStyle(document.body).getPropertyValue(variavel);
}
const tikfont = {
    color: getCSS('--cor-primaria'),
    size:16,
    family: getCSS('--font')
}

export{
    getCSS, tikfont
}
    
