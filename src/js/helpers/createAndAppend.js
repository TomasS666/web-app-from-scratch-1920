import { isArgumentGiven } from "../helpers/isArgumentGiven";

function createAndAppend (node, targetNode, template){
   
    try{
        // console.log(isArgumentGiven([node]))
        if(isArgumentGiven([node])){

            const element = document.createElement(node);
            if(targetNode){
                targetNode.appendChild(element)
            }
            if(template){
                element.textContent = template;
            }
            
            return element;
           
        }
    }
    catch(err){
        console.log(err)
    }
}

export { createAndAppend }