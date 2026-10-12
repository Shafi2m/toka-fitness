import "./price.css"

export default function Price({money}){
    return(
        <div className="price">
            <span>£{money}</span>
        </div>
    )
}