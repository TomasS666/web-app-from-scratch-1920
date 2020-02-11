function cleanDom(selector){
    if(selector.firstChild){
        selector.firstChild.remove()
    }else{
        return;
    }
}

export { cleanDom }