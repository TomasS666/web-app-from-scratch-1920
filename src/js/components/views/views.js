import { Subcomponent } from "../subcomponents/Subcomponent";
import { getData } from "../../helpers/data/getData";


async function Home(){
//     genreList.forEach(obj => {
//        Genre(`with_genres=${obj.id}`, obj.name)
//    })
// console.log(Genre)
   const test = Subcomponent.Genre(`with_genres=${27}`, {
      id:27,
      name: "Horror"
   })
   

   
   console.log(test)
   return test;

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