import './about.css'
import Card from '../Cards/Cards'
import cardData from '../Cards/cardData'
export default function About () {
    return (
        <div className="about grow">
            <div className='bg-white px-5 py-5 rounded-lg"'>
                <h1 className='header'>Meet the team</h1>
                <div className="cards flex flex-wrap px-5 py-5 justify-evenly ">
                    {cardData.map((d)=>
                        <div className='flex justify-center lg:basis-1/4'>
                            <Card data={d}/>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}