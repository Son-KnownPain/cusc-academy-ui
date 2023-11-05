import classNames from "classnames/bind";
import styles from './Preamble.module.scss';
import config from "~/config";

const cx = classNames.bind(styles);

function RegisterModal({ onClick }) {
    const handleStopPropagation = (event) => {
        event.stopPropagation();
    }

    return (
        <div className={cx('modal')} onClick={onClick}>
            <div className={cx('container')} onClick={handleStopPropagation}>
                <div className={cx('heading')}>
                    Chọn khóa học
                </div>
                {
                    config.courses.map(course => (
                        <a href={course.registerLink} target="_blank" rel="noreferrer" className={cx('item')}>
                            <div className="row">
                                <div className="col-xl-3 col-3">
                                    <div className={cx('img-wrapper')}>
                                        <img className={cx('img')} src={course.logo} alt="Logo" />
                                    </div>
                                </div>
                                <div className="col-xl-9 col-9">
                                    <h3 className={cx('name')}>
                                        {course.name}
                                    </h3>
                                </div>
                            </div>
                        </a>
                    ))
                }
            </div>
        </div>
    );
}

export default RegisterModal;