import classNames from "classnames/bind";

import { registerLinks } from "~/config/courses";
import styles from './Aptech.module.scss';
import Banner from "./components/Banner/Banner";
import Slogan from "./components/Slogan";
import HeadingProgram from "~/components/HeadingProgram";
import images from "~/asset/images";
import Highlights from "./components/Highlights";
import WhyChooseAptech from "./components/WhyChooseAptech";
import Lecturers from "./components/Lecturers";
import Awards from "./components/Awards";
import Students from "./components/Students";
import TrainingAndEnrollment from "./components/TrainingAndEnrollment";
import Degree from "./components/Degree";
import StudentActivities from "./components/StudentActivities";
import News from "./components/News";

const cx = classNames.bind(styles);

function Aptech() {
    return (
        <div className={cx('wrapper')}>
            <HeadingProgram logo={images.aptechLogo} name="Lập trình viên Quốc tế - Aptech" registerLink={registerLinks.googleFormRegisterLink} />
            <Banner />
            <Slogan />
            <Highlights />
            <WhyChooseAptech />
            <Lecturers />
            <Awards />
            <Students />
            <TrainingAndEnrollment />
            <Degree />
            <StudentActivities />
            <News />
        </div>
    );
}

export default Aptech;