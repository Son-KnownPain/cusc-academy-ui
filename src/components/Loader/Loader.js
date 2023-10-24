import classNames from "classnames/bind";
import styles from './Loader.module.scss';
import { SpinnerIcon } from "../Icons";

const cx = classNames.bind(styles);

/**
 * Component Loader hiển thị một spinner khi `contentCondition` false và children khi `contentCondition` true.
 *
 * @param {boolean} [props.contentCondition=false] - Điều kiện để xác định xem có hiển thị spinner hay không. Mặc định là `false`.
 * @param {ReactNode} [props.children] - Nội dung con được hiển thị khi `contentCondition` là `true`.
 * @param {string} [props.wrapperClassName=''] - Tên lớp CSS cho wrapper element. Mặc định là chuỗi rỗng.
 * @param {string} [props.height='200px'] - Chiều cao của wrapper element. Mặc định là '200px'.
 * @param {string} [props.width='100%'] - Chiều rộng của wrapper element. Mặc định là '100%'.
 * @returns {ReactElement} - Một đối tượng ReactElement chứa spinner hoặc nội dung con tùy thuộc vào điều kiện.
 */
function Loader({ contentCondition = false, children, wrapperClassName = '', height = '200px', width = '100%' }) {
    return (
        <>
            {
                contentCondition
                    ? (
                        children
                    ) : (
                        <div style={{ height, width }} className={cx('wrapper', { wrapperClassName })} >
                            <SpinnerIcon className={cx('icon')} height="3rem" width="3rem" />
                        </div >
                    )
            }
        </>
    );
}

export default Loader;