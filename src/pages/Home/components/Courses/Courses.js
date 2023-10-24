import classNames from "classnames/bind";

import styles from './Courses.module.scss';
import HasTitle from "~/components/HasTitle";
import config from "~/config";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

function Courses() {
    return (
        <HasTitle title='Các Chương Trình Đào Tạo' desc="Bao gồm 4 chương trình đào tạo vô cùng chất lượng.">
            <div className={cx('courses')}>
                <div className="row">
                    {
                        config.courses.map((course, index) => (
                            <div key={index} className="col-xl-6">
                                <div className={cx('course-item')}>
                                    <div className="row">
                                        <div className="col-xl-12">
                                            <img src={course.logo} alt="Logo" className={cx('logo')} />
                                            <Link to={course.page} className={cx('name')}>
                                                {course.name}
                                            </Link>
                                        </div>
                                        <div className="col-xl-12">
                                            <p className={cx('description')}>
                                                {course.desc}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </HasTitle>
    );
}

export default Courses;