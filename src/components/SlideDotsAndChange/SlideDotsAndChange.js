import classNames from "classnames/bind";
import styles from './SlideDotsAndChange.module.scss';
import { ChevronLeftIcon, ChevronRigtIcon } from "../Icons";

const cx = classNames.bind(styles);

/**
 * Component SlideDotsAndChange dùng để hiển thị các chấm điều hướng cho slider và các nút chuyển slide.
 * 
 * @param {ReactNode} props.children - Các thành phần con được chứa bên trong SlideDotsAndChange.
 * @param {number} [props.size=12] - Kích thước của icon.
 * @param {Function} props.onNext - Hàm sẽ được gọi khi nhấn nút chuyển đến slide tiếp theo.
 * @param {Function} props.onPrev - Hàm sẽ được gọi khi nhấn nút chuyển đến slide trước đó.
 * 
 * @returns {ReactElement} - Một đối tượng ReactElement chứa các chấm điều hướng và nút chuyển slide.
 */
function SlideDotsAndChange({ children, btnSize = 12, onNext, onPrev }) {
    const btnSizePx = btnSize + 'px';

    return (
        <div className={cx('container')}>
            <button onClick={onPrev} className={cx('prev-btn')}>
                <ChevronLeftIcon height={btnSizePx} width={btnSizePx} />
            </button>
            <div className={cx('slide-wrapper')}>
                {children}
            </div>
            <button onClick={onNext} className={cx('next-btn')}>
                <ChevronRigtIcon height={btnSizePx} width={btnSizePx} />
            </button>
        </div>
    );
}

export default SlideDotsAndChange;