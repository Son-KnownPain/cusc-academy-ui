import classNames from "classnames/bind";
import styles from './Highlights.module.scss';
import HasTitle from "~/components/HasTitle";

const cx = classNames.bind(styles);

function Highlights() {
    return (
        <div className={cx('wrapper')}>
            <HasTitle title={'Những Điểm Nổi Bật Của Thương Hiệu Aptech'} desc='"APTECH - Ấn Độ tiên phong lĩnh vực đào tạo CNTT trên thế giới"'>
                <div className={cx('content')}></div>
            </HasTitle>
        </div>
    );
}

export default Highlights;