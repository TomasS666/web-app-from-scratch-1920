import { Subcomponent } from "../subcomponents/Subcomponent";


function Home(){
//     genreList.forEach(obj => {
//        Genre(`with_genres=${obj.id}`, obj.name)
//    })
// console.log(Genre)
Subcomponent.Genre(`with_genres=${27}`, {
    id:27,
    name: "Horror"
})

   return;
}


function DetailSingle(id){
   Subcomponent.Movie(id)
}

const View = {
   Home: Home,
   DetailSingle: DetailSingle
}

export { View }