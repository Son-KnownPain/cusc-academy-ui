import classNames from "classnames/bind";
import styles from './Home.module.scss';
import Preamble from "./components/Preamble";
import Courses from "./components/Courses/Courses";

const cx = classNames.bind(styles);

function Home() {
    return (
        <div className={cx('wrapper')}>
            <Preamble />
            <Courses />
        </div>
    );
}

export default Home;