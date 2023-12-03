import classNames from "classnames/bind";
import styles from './Highlights.module.scss';
import HasTitle from "~/components/HasTitle";
import { GlobeIcon, GraduationCapIcon, MapMarkerIcon, UserSolidIcon } from "~/components/Icons";
import { useEffect, useState } from "react";
import { highlights as highlightsData } from "~/services/arenaService";
import { getExportView } from "~/utils/drive";

const cx = classNames.bind(styles);

function Highlights() {
    const [highlights, setHighlights] = useState([])

    useEffect(() => {
        async function fetchData() {
            const res = await highlightsData();
            setHighlights(res);
        }
        fetchData()
    }, [])

    return (
        <div className={cx('wrapper')}>
            <HasTitle title={'Những Điểm Nổi Bật Của Arena Multi Media'}>
                {highlights.length > 0 &&
                    (
                        < div className={cx('brand-wrapper')}>
                            <img src={getExportView(highlights[0].hinh_anh)} alt="Brand" />
                        </div>
                    )
                }
                <div className={cx('highlights')}>
                    <div className="row">
                        <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
                            <div className={cx('item')}>
                                <div className={cx('icon-box')}>
                                    <GraduationCapIcon className={cx('icon')} width="4rem" height="4rem" />
                                </div>
                                <p className={cx('val')}>
                                    25
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
                                    20
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
                                    450.000
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
                                    250
                                </p>
                                <p className={cx('label')}>
                                    Trung tâm đào tạo
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </HasTitle >
        </div >
    );
}

export default Highlights;