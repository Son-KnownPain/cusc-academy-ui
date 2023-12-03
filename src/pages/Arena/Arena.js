import classNames from "classnames/bind";
import styles from './Arena.module.scss';

import { registerLinks } from "~/config/courses";
import Banner from "./components/Banner/Banner";
import Slogan from "./components/Slogan";
import HeadingProgram from "~/components/HeadingProgram";
import images from "~/asset/images";
import Highlights from "./components/Highlights";
import Lecturers from "./components/Lecturers";
import Awards from "./components/Awards";
import Students from "./components/Students";
import TrainingAndEnrollment from "./components/TrainingAndEnrollment";
import WhyChooseArena from "./components/WhyChooseArena/WhyChooseArena";
import AdmissionInfo from "./components/AdmissionInfo";
import StudentHighlights from "./components/StudentHighlights";
import News from "./components/News";

const cx = classNames.bind(styles);

function Arena() {
    return (
        <div className={cx('wrapper')}>
            <HeadingProgram logo={images.arenaLogo} name="Mỹ thuật đa phương tiện Quốc tế - Arena" registerLink={registerLinks.googleFormRegisterLink} />
            <Banner />
            <AdmissionInfo />
            <Slogan />
            <Highlights />
            <WhyChooseArena />
            <Lecturers />
            <Awards />
            <Students />
            <TrainingAndEnrollment />
            <StudentHighlights />
            <News />
        </div>
    );
}

export default Arena;