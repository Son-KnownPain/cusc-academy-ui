import classNames from 'classnames/bind';
import styles from './StudentActivities.module.scss'

const cx = classNames.bind(styles);

function ImageDetailModal({ src = '', onClose = () => { } }) {

    const handleClickInsideImg = (e) => {
        e.stopPropagation();
    }

    return (
        <div className={cx('modal')} onClick={onClose}>
            <img onClick={handleClickInsideImg} className={cx('img')} src={src} alt="Modal" />
        </div>
    );
}

export default ImageDetailModal;