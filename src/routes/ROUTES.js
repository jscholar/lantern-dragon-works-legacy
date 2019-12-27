/**
 *  Directory of routes on the site
 */

import Credits from './Credits/Credits'
import Extras from './Extras/Extras'
import Gallery from './Gallery/Gallery'
import Stories from './Stories/Stories'
import Home from './Home/Home'
import NoPage from './NoPage/NoPage'

export const COMPONENTS = {
    /**
     * Properties must be capitalized or Route will not recognize
     * it as valid React component
     */
    Credits: Credits,
    Extras: Extras,
    Gallery: Gallery,
    Stories: Stories,
    Home: Home,
    NoPage: NoPage,
}

export const ROUTES = [
    {
        name: "Credits",
        path: "/credits",
    },
    {
        name: "Extras",
        path: "/extras",
    },
    {
        name: "Gallery",
        path: "/gallery",
    },
    {
        name: "Stories",
        path: "/stories",
    },
    {
        name: "Home",
        path: "/",
    },
]
