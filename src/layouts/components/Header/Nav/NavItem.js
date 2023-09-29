import { NavLink } from "react-router-dom";
import classNames from "classnames/bind";
import styles from './Nav.module.scss'

const cx = classNames.bind(styles);

function NavItem({ title, to, icon }) {
    const Icon = icon;

    return (
        <NavLink to={to} className={(nav) => cx('nav-item', { active: nav.isActive })}>
            {<Icon height="18px" width="18px" className={cx('icon')} />}
            {title}
        </NavLink>
    );
}

export default NavItem;