// Based on https://www.tutorialspoint.com/How-can-I-remove-all-child-elements-of-a-DOM-node-in-JavaScript

function cleanDom(selector){
    while(selector.firstChild){
        selector.firstChild.remove()
    }
}

export { cleanDom }