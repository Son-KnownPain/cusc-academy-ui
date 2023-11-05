import classNames from "classnames/bind";
import styles from './HasTitle.module.scss';

const cx = classNames.bind(styles);

/**
 * Component HasTitle dùng để hiển thị nội dung có tiêu đề và mô tả tùy chọn.
 *
 * @param {ReactNode} props.children - Các thành phần con được chứa bên trong HasTitle.
 * @param {string} [props.title='Default Title'] - Tiêu đề của HasTitle, mặc định là 'Default Title'.
 * @param {string | node} [props.desc=''] - Mô tả của HasTitle, mặc định là chuỗi rỗng.
 * @returns {ReactElement} - Một đối tượng ReactElement chứa tiêu đề, mô tả và các thành phần con.
 */
function HasTitle({ children, title = 'Default Title', desc = '' }) {
    let medium = false;

    if (title.length >= 45) {
        medium = true;
    }

    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <h1 className={cx('title', { medium })}>
                    {title}
                </h1>
                {
                    desc && <p className={cx('desc')}>{desc}</p>
                }
            </div>
            <div className={cx('content')}>
                {children}
            </div>
        </div>
    );
}

export default HasTitle;