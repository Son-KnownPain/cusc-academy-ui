import config from "~/config"
import Aptech from "~/pages/Aptech"
import Arena from "~/pages/Arena"
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
    {
        path: config.routes.arena,
        component: Arena,
    },
]

export const privateRoutes = [

]