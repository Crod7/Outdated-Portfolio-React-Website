import { Link } from 'react-router-dom'
import { useNavbarContext } from "../hooks/useNavbarContext"
import { useEffect } from "react"

/**
 * Manages the navbar and all it's functionality. It also shows important user information.
 * @param {*} globalUser used to set the current user to a variable to display to the end user.
 * @returns the front-end depending on which button is selected from the navbar.
 */
const Navbar = () => {
    /**
     * This allows us to update the navbar in realtime by making dispatch calls to the navbar context directly.
     */
    const { dispatchNavbar, currentPage} = useNavbarContext()

    useEffect(() => {



    }, [])

    /**
     * Returns the current page being displayed to the front-end.
     */
    return (
        <header>
            <div className="container">
                {(
                    <Link to="/">
                        <h1>Home</h1>
                    </Link>
                )}
                <nav>
                    {(
                        <div>
                            <Link to='/projects'>Projects</Link>
                            <Link to="/signup">Sign up</Link>
                        </div>
                    )}
                </nav>
            </div>
        </header>
    )
}

export default Navbar
