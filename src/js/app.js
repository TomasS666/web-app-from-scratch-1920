// Import helper Utills


import { genreList } from "./genreList";

import {cleanDom} from "./helpers/cleanDom"

import {
    Home,
    DetailSingle
} from "./components/views/views";
// Import subcomponents

import {
    Genre
} from "./components/subcomponents/Genre"

import 
    routie
 from "./helpers/router/routie";



console.log(routie)

function init(){


    // genreList.forEach(obj => {
    //     Genre(`with_genres=${obj.id}`, obj.name)
    // })

    // Genre(`with_genres=${27}`, {
    //     id:27,
    //     name: "Horror"
    // })

    const searchBtn = document.querySelector('a[href="#search"]');
    const searchValue = document.querySelector("input[type=text]")

   

    searchValue.addEventListener("keydown", (e)=>{
        if(e.keyCode == 13){
            e.preventDefault();
            searchBtn.href += `/${searchValue.value}`;
            window.location = searchBtn.href;
            // window.open(searchBtn.href)
        }
    })

    routie({
        'movie/:id': function(id) {

            cleanDom(document.querySelector("#content"))
            DetailSingle(id)
        },
        '': function() {
         
            cleanDom(document.querySelector("#content"))
            Home()
        }
    });


    
}

init()