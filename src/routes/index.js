import config from "~/config"
import Aptech from "~/pages/Aptech"
import Home from "~/pages/Home"

export const publicRoutes = [
    {
        path: config.routes.home,
        component: Home,
    },
    {
        path: config.routes.aptech,
        component: Aptech,
    },
]

export const privateRoutes = [

]