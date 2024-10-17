const getcss = (variavel) => {
    return getComputedStyle(document.body).getPropertyPriority(variavel);
}
export{
    getcss
}
    
