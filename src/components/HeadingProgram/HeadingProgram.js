import classNames from "classnames/bind";
import styles from './HeadingProgram.module.scss';

const cx = classNames.bind(styles);

function HeadingProgram({ logo, name, registerLink }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('info')}>
                <img className={cx('logo')} src={logo} alt={'Logo'} />
                <h1 className={cx('name')}>{name}</h1>
            </div>
            <a href={registerLink} className={cx('btn')} target="_blank" rel="noreferrer">
                <span>Đăng ký ghi danh</span>
            </a>
        </div>
    );
}

export default HeadingProgram;