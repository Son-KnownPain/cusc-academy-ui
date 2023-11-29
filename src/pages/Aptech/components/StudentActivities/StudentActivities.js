import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react';
import { useState, useEffect } from 'react';

import styles from './StudentActivities.module.scss'
import HasTitle from '~/components/HasTitle';
import { studentActivitieImages } from '~/services/aptechService';
import { getExportView } from '~/utils/drive';
import ImageDetailModal from './ImageDetailModal';

const cx = classNames.bind(styles);

function StudentActivities() {
    const [images, setImages] = useState([]);
    const [showedQuantity, setShowedQuantity] = useState(6);
    const [imageDetailSrc, setImageDetailSrc] = useState(null);

    const handleHideSomeItem = () => {
        setShowedQuantity(showedQuantity - 3 < 6 ? 6 : showedQuantity - 3);
    }

    const handleShowMore = () => {
        setShowedQuantity(showedQuantity + 3 > images.length ? images.length : showedQuantity + 3);
    }

    const handleClickItem = (src) => {
        return () => {
            setImageDetailSrc(src);
        }
    }

    const handleCloseItem = () => {
        setImageDetailSrc(null);
    }

    useEffect(() => {
        async function fetchData() {
            const data = await studentActivitieImages();
            setImages(data.reverse().map(x => {
                return {
                    image: getExportView(x.hinh_anh_hdsv)
                }
            }));
        };
        fetchData();
    }, []);

    return (
        <>
            <div className={cx('wrapper')}>
                <HasTitle title="Hình Ảnh Hoạt Động Sinh Viên" desc="Khi học tại Aptech cusc sinh viên được tham gia nhiều hoạt động ngoại khóa bổ ích.">
                    <div className={cx('content')}>
                        <div className="row">
                            {images.slice(0, showedQuantity).map((item, index) => (
                                <div key={index} className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                                    <Tippy placement="bottom" content="Bấm vào để xem" >
                                        <div onClick={handleClickItem(item.image)} className={cx('image-item')}>
                                            <img className={cx('img')} src={item.image} alt={'StudentActivity'} />
                                        </div>
                                    </Tippy>
                                </div>
                            ))}
                        </div>
                        <div className={cx('action-box')}>
                            {
                                showedQuantity > 6 && <span onClick={handleHideSomeItem} className={cx('action-btn')}>Ẩn bớt</span>
                            }
                            {
                                showedQuantity < images.length && <span onClick={handleShowMore} className={cx('action-btn')}>Xem thêm</span>
                            }
                        </div>
                    </div>
                </HasTitle>
            </div>
            {
                imageDetailSrc && <ImageDetailModal src={imageDetailSrc} onClose={handleCloseItem} />
            }
        </>
    );
}

export default StudentActivities;