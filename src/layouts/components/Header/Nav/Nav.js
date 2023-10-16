import classNames from "classnames/bind";
import styles from './Nav.module.scss'

const cx = classNames.bind(styles);

function Nav({ children }) {
    return (
        <nav className={cx('nav', 'hide-on-mobile')}>
            {children}
        </nav>
    );
}

export default Nav;