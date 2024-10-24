const getcss = (variavel) => {
    return getComputedStyle(document.body).getPropertyValue(variavel);
}
export{
    getcss
}
    
