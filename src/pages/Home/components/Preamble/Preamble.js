import classNames from "classnames/bind";
import styles from './Preamble..module.scss'

const cx = classNames.bind(styles);

function Preamble() {
    return (
        <div className={cx('wrapper')}>
            <div className="row">
                <div className="col-xl-9">

                </div>
                <div className="col-xl-3">

                </div>
            </div>
        </div>
    );
}

export default Preamble;