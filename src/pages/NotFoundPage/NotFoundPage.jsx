import { Link } from "react-router-dom"

export default function NotFoundPage() {
    return (
        <div>
            <p>Sorry not found the page!!! Try go to <Link to="/">home page</Link>!
            </p>
        </div>
    )
}


