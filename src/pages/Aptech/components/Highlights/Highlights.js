import classNames from "classnames/bind";
import styles from './Highlights.module.scss';
import HasTitle from "~/components/HasTitle";
import { GlobeIcon, GraduationCapIcon, MapMarkerIcon, UserSolidIcon } from "~/components/Icons";

const cx = classNames.bind(styles);

function Highlights() {
    return (
        <div className={cx('wrapper')}>
            <HasTitle title={'Những Điểm Nổi Bật Của Thương Hiệu Aptech'} desc='"APTECH - Ấn Độ tiên phong lĩnh vực đào tạo CNTT trên thế giới"'>
                <div className={cx('highlights')}>
                    <div className="row">
                        <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
                            <div className={cx('item')}>
                                <div className={cx('icon-box')}>
                                    <GraduationCapIcon className={cx('icon')} width="4rem" height="4rem" />
                                </div>
                                <p className={cx('val')}>
                                    32
                                </p>
                                <p className={cx('label')}>
                                    Năm kinh nghiệm đào tạo
                                </p>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
                            <div className={cx('item')}>
                                <div className={cx('icon-box')}>
                                    <GlobeIcon className={cx('icon')} width="4rem" height="4rem" />
                                </div>
                                <p className={cx('val')}>
                                    40
                                </p>
                                <p className={cx('label')}>
                                    Quốc gia
                                </p>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
                            <div className={cx('item')}>
                                <div className={cx('icon-box')}>
                                    <UserSolidIcon className={cx('icon')} width="4rem" height="4rem" />
                                </div>
                                <p className={cx('val')}>
                                    6.800.000
                                </p>
                                <p className={cx('label')}>
                                    Sinh viên thế giới
                                </p>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
                            <div className={cx('item')}>
                                <div className={cx('icon-box')}>
                                    <MapMarkerIcon className={cx('icon')} width="4rem" height="4rem" />
                                </div>
                                <p className={cx('val')}>
                                    1.350
                                </p>
                                <p className={cx('label')}>
                                    Trung tâm đào tạo
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </HasTitle>
        </div>
    );
}

export default Highlights;