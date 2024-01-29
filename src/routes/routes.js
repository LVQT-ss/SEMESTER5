import News from "../pages/News";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Main from '../Components/Main'
import Detail from "../pages/Detail";

export const routes = [
    {
        path: '/',
        element: Main
    },
    {
        path: '/detail/:id',
        element: Detail
    },
    {
        path: '/about',
        element: About
    },
    {
        path: '/news',
        element: News
    },
    {
        path: '/contact',
        element: Contact
    }
]