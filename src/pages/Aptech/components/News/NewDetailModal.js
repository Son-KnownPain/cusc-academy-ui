import classNames from "classnames/bind";
import styles from './News.module.scss';

const cx = classNames.bind(styles);

function NewDetailModal({ data, onClose = () => { } }) {
    const { title, content } = data;

    const handleClickInside = (e) => {
        e.stopPropagation();
    }

    return (
        <div className={cx('modal')} onClick={onClose}>
            <div onClick={handleClickInside} className={cx('container')}>
                <h1 className={cx('title')}>{title}</h1>
                <div className={cx('content')} dangerouslySetInnerHTML={{ __html: content }} />
            </div>
        </div>
    );
}

export default NewDetailModal;