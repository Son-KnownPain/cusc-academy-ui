import classNames from "classnames/bind";

import styles from './DropDown.module.scss'
import { NavLink } from "react-router-dom";

const cx = classNames.bind(styles);

function EduDropDownItem({ to, image, title }) {
    return (
        <NavLink to={to} className={nav => cx('edu-item', { active: nav.isActive })}>
            <img src={image} alt={'Aptech'} className={cx('logo')} />
            <h3 className={cx('title')}>
                {title}
            </h3>
        </NavLink>
    );
}

export default EduDropDownItem;