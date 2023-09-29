import { NavLink, useLocation } from "react-router-dom";
import classNames from "classnames/bind";
import HeadlessTippy from '@tippyjs/react/headless';

import styles from './Nav.module.scss'
import { ArrowDropDownIcon } from "~/components/Icons";
import EduDropDown from "../EduDropDown";
import config from "~/config";

const cx = classNames.bind(styles);

const eduPaths = [config.routes.aptech, config.routes.arena, config.routes.acnpro, config.routes.steam];

function DropDownNavItem({ title, to, icon }) {
    const Icon = icon;

    const { pathname } = useLocation();

    return (
        <HeadlessTippy
            interactive
            delay={[0, 0]}
            offset={[0, 0]}
            placement="bottom-start"
            render={() => <EduDropDown />}
        >
            <NavLink to={to} className={cx('nav-item', { active: eduPaths.includes(pathname) })}>
                {<Icon height="18px" width="18px" className={cx('icon')} />}
                {title}
                <ArrowDropDownIcon height="18px" width="18px" className={cx('dropdown-icon')} />
            </NavLink>
        </HeadlessTippy>
    );
}

export default DropDownNavItem;