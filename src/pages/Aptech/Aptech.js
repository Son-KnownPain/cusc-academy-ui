import classNames from "classnames/bind";

import styles from './Aptech.module.scss';
import Banner from "./components/Banner/Banner";
import Slogan from "./components/Slogan";
import HeadingProgram from "~/components/HeadingProgram";
import images from "~/asset/images";
import { registerLinks } from "~/config/courses";
import Highlights from "./components/Highlights";

const cx = classNames.bind(styles);

function Aptech() {
    return (
        <div className={cx('wrapper')}>
            <HeadingProgram logo={images.aptechLogo} name="Lập trình viên Quốc tế - Aptech" registerLink={registerLinks.googleFormRegisterLink} />
            <Banner />
            <Slogan />
            <Highlights />
        </div>
    );
}

export default Aptech;