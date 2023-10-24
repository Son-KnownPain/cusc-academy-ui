import config from '~/config';
import Aptech from '~/pages/Aptech';
import Home from '~/pages/Home';
import Contact from '~/pages/Contact';

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
        path: config.routes.contact,
        component: Contact,
    },
];

export const privateRoutes = [];
