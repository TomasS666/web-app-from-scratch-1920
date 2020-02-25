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
    
            cleanDom(main)
            View.DetailSingle(id)
    
    
            View.DetailSingle(id)
                .then(html => {
                    Render(html, main)
                    console.log(html)
                })
        },
        '': function() {
            // document.querySelector('[data-element="loading-popup"]').classList.add("loading")
            cleanDom(main)

            View.Home().then(html => {
                console.log(html, 'fwef')
                Render(html, main)
                
            })
        },
        'search/:term': function(term){
            console.log(term)
            View.SearchResults(term)
        }
    });
} 

const Router = {
    handler: handler
};

export { Router }