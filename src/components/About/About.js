import './about.css'
import Card from '../Cards/Cards'
import cardData from '../Cards/cardData'
export default function About () {
    return (
        <div className="about grow">
            <div className='bg-white px-5 py-5 rounded-lg"'>
                <h1 className='header'>About the team</h1>
                <div className="cards flex flex-wrap px-5 py-5 ">
                    {cardData.map((d)=>
                        <div className='basis-1/3 flex justify-center'>
                            <Card data={d}/>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}