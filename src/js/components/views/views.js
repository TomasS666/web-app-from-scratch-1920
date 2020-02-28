import { Subcomponent } from "../subcomponents/Subcomponent";
import { getData } from "../../helpers/data/getData";
import { genreList } from "../../genreList"

function Home(){

/* 
=====  Map over the subcomponent Genre which returns promises in an array and returns 
=====  a mayor promise back up
*/
   return Promise.all((
      genreList.map(genre =>{
         return Subcomponent.Genre(genre.id, genre)
      })
   ))

}


function DetailSingle(id){
   return Subcomponent.Movie(id)
}

function SearchResults(term){
   getData(`search/movie`, `query=${ term.toLowerCase() }`)
      .then(res => res.json())
      .then(json => console.log(json))
}

const View = {
   Home: Home,
   DetailSingle: DetailSingle,
   SearchResults: SearchResults
}

export { View }