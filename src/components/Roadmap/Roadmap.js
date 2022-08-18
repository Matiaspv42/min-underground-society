import './roadmap.css'

export default function Project() {
    return(
        <div className="roadmap grow px-5 py-5">
            <div className="bg-white flex px-5 py-5  items-center justify-around rounded-lg">
                <div className="img">
                    <img src="/img/talon.png" alt="" />
                </div>
                <div className="informationVision">
                    
                    <h2>The vision</h2>
                    <p>We want to give our holders different things</p>
                    <ul>
                        <li>Labs</li>
                        <li>Core</li>
                        <li>Cedar</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}