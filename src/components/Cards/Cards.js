export default function Card(props){
    const {data} = props
    return(
        <div className="card w-80 my-7">
            <img src="/img/talon.png" alt="" className="rounded-lg"/>
            <div className="textCard">
                <h3>{data.name}</h3>
                <h4>{data.title} <span className="twitterHandler">{data.twitterHandler}</span></h4>
                <p>{data.description}</p> 
            </div>
        </div>
    )
}