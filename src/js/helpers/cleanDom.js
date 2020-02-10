function cleanDom(selector){
    // selector.removeChild(selector.firstChild)
    if(selector.firstChild){
        selector.firstChild.remove()
    }else{
        return;
    }
    
}

export { cleanDom }