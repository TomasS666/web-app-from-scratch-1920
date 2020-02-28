import 
    routie
 from "../helpers/router/routie";

 import {
    View
} from "../components/views/Views";

import {
    Render
} from "../helpers/Render"

 import { cleanDom } from "../helpers/cleanDom"

 
const main = document.querySelector("#content");

function handler(){
    routie({
        'movie/:id': function(id) {
            // document.querySelector('[data-element="loading-popup"]').classList.add("loading")
            cleanDom(main)
            
            View.DetailSingle(id)
                .then(html => {
                   
                    Render(html, main)
                })
        },
        '': function() {
            // document.querySelector('[data-element="loading-popup"]').classList.add("loading")
            cleanDom(main)

    
            console.log("tetetet")
            View.Home()
            .then(html => {
                console.log(html)
                Render(html, main)
            })
        },
        'search/:term': function(term){
            View.SearchResults(term)
        }
    });
} 

const Router = {
    handler: handler
};

export { Router }