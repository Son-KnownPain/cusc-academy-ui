import styles from './DefaultLayout.module.scss';
import Header from "~/layouts/components/Header";
import Footer from "~/layouts/components/Footer";

import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('content')}>
                {children}
            </div>
            <Footer />
        </div>
    );
}

export default DefaultLayout;