
import { Link } from "react-router-dom"

export default function Error(){
    return (
        <div className="space-y-3 text-center">
            <h2>erroe</h2>
            <p>404 not found</p>
          <Link to="/">go home</Link>
        </div>
    )
}