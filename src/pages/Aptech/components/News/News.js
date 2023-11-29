import classNames from "classnames/bind";
import { useEffect, useState } from "react";

import styles from './News.module.scss';
import HasTitle from "~/components/HasTitle";
import { newsAndEvents } from "~/services/aptechService";
import NewDetailModal from "./NewDetailModal";

const cx = classNames.bind(styles);

function News() {
    const [news, setNews] = useState([]);
    const [showedQuantity, setShowedQuantity] = useState(3);
    const [newDetail, setNewDetail] = useState(null);

    const handleHideSomeItem = () => {
        setShowedQuantity(showedQuantity - 3 < 3 ? 3 : showedQuantity - 3);
    }

    const handleShowMore = () => {
        setShowedQuantity(showedQuantity + 3 > news.length ? news.length : showedQuantity + 3);
    }

    const handleClickItem = (newItem) => {
        return () => {
            setNewDetail(newItem);
        }
    }

    const handleCloseModal = () => {
        setNewDetail(null);
    }

    useEffect(() => {
        async function fetchData() {
            const data = await newsAndEvents();
            setNews(data.reverse().map(x => {
                return {
                    title: x.tieu_de_bai_viet,
                    content: x.noi_dung,
                    summary: x.mo_ta_bai_viet,
                    thumbnail: x.hinh_anh,
                }
            }));
        };
        fetchData();
    }, []);

    return (
        <>
            <div className={cx('wrapper')}>
                <HasTitle title="Tin Tức - Sự Kiện" desc="Hãy cùng theo bước CUSC APTECH khám phá những tin tức, sự kiện thú vị đang diễn ra">
                    <div className={cx('cards')}>
                        <div className="row">
                            {
                                news.slice(0, showedQuantity).map((n, index) => (
                                    <div key={index} className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                                        <div className={cx('card-item')} onClick={handleClickItem(n)}>
                                            <div className={cx('img-wrapper')}>
                                                <img className={cx('thumbnail')} src={n.thumbnail} alt="News" />
                                            </div>
                                            <div className={cx('body')}>
                                                <h1 className={cx('title')}>{n.title}</h1>
                                                <p className={cx('summary')}>{n.summary}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                            <div className={cx('action-box')}>
                                {
                                    showedQuantity > 3 && <span onClick={handleHideSomeItem} className={cx('action-btn')}>Ẩn bớt</span>
                                }
                                {
                                    showedQuantity < news.length && <span onClick={handleShowMore} className={cx('action-btn')}>Xem thêm</span>
                                }
                            </div>
                        </div>
                    </div>
                </HasTitle>
                {
                    newDetail && <NewDetailModal onClose={handleCloseModal} data={newDetail} />
                }
            </div>
        </>
    );
}

export default News;