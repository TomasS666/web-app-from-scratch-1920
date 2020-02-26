import { isArray } from "../helpers/isArgumentGiven"

function Render(html, target){
    if(isArray(html)){
        html.forEach(html=>{
            target.append(html)
        })
    }else{
        target.append(html)
    }
}
export { Render }