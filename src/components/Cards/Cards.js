import './card.css'
export default function Card(props){
    const {data} = props
    return(
        <div className="card w-80 my-7 mx-3">
            <img src="/img/talon.png" alt="" className="rounded-lg"/>
            <div className="textCard my-2">
                <h3 className='text-lg'>{data.name}</h3>
                <h4 className='text-sm grayColor'><span className='yellowButton'>{data.twitterHandler}</span> <span className="twitterHandler ">{data.title}</span></h4>
                <p className='text-base my-2 roboto'>{data.description}</p> 
            </div>
        </div>
    )
}