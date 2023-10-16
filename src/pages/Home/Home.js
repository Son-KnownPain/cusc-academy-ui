import classNames from "classnames/bind";
import styles from './Home.module.scss'
import Preamble from "./components/Preamble";

const cx = classNames.bind(styles);

function Home() {
    return (
        <div className={cx('wrapper')}>
            <Preamble />
        </div>
    );
}

export default Home;