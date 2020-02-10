import genreList from "../../genreList";
import { Genre } from "../subcomponents/Genre";
import { Movie } from "../subcomponents/Movie";


function Home(){
//     genreList.forEach(obj => {
//        Genre(`with_genres=${obj.id}`, obj.name)
//    })
// console.log(Genre)
Genre(`with_genres=${27}`, {
    id:27,
    name: "Horror"
})

   return;
}


function DetailSingle(id){
   Movie(id)
}

export { Home, DetailSingle }