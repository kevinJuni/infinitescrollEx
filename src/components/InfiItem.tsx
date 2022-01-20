
interface Item {
    color : string,
    text  : string
}

export default function InfiItem(props:Item) {
    return(
        <div className="item" style={{background:`${props.color}`}}>
            {props.text}
        </div>
    )
}