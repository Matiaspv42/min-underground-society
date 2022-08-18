import './home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiscord, faTwitter } from '@fortawesome/free-brands-svg-icons'
export default function Home () {
    return (
        <div className="home  justify-around ">
            <h1 className='header'>Underground Society</h1>
            <div className="socialMedia">
                <FontAwesomeIcon icon={faDiscord} />
                <FontAwesomeIcon icon={faTwitter} />
            </div>
        </div>
    )
}