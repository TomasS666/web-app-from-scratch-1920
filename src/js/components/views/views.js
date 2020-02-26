import { Subcomponent } from "../subcomponents/Subcomponent";
import { getData } from "../../helpers/data/getData";
import { genreList } from "../../genreList"

async function Home(){
//     genreList.forEach(obj => {
//        Genre(`with_genres=${obj.id}`, obj.name)
//    })
// console.log(Genre)

   // const genreIds = genreList.map(obj => obj.id)

   // console.log(genreIds)
   
   // const idUrl = genreIds.reduce((previous, next)=>{
   //    // console.log(previous)
   //    return `${previous}%2${next}`
   // })

   // console.log(idUrl)

   
   return Promise.all((
      genreList.map(genre =>{
         console.log(genre.id)
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