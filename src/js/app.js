import {
    Store
} from "./helpers/storeData";

import {
    Router
} from "./routing/Router"

function init() {

    Router.handler()
    // Store.set("title", "Van Helsing")


    // genreList.forEach(obj => {
    //     Genre(`with_genres=${obj.id}`, obj.name)
    // })

    // Genre(`with_genres=${27}`, {
    //     id:27,
    //     name: "Horror"
    // })

    const searchBtn = document.querySelector('a[href="#search"]');
    const searchValue = document.querySelector("input[type=text]")

    /* 
        When a keydown on the search input is fired and it's enter
        fire a function which redirects to the #search/{movie search term}
    */
    searchValue.addEventListener("keydown", (e) => {
        if (e.keyCode == 13) {
            e.preventDefault();
            // searchBtn.href = `/${searchValue.value}`;

            // window.location = searchBtn.href;

            routie(`#search/${searchValue.value}`)


            // window.open(searchBtn.href)
        }
    })



}

init()