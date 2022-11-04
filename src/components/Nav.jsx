import { Link } from 'react-router-dom'

export default function Nav () {
    return (
        <div>
            <Link to = "/"> Home </Link>
            <Link to = "/parks"> National Parks </Link>
        </div>
    )
}