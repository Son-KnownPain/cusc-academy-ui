import classNames from "classnames/bind";
import styles from './Lecturers.module.scss';
import HasTitle from "~/components/HasTitle";
import { useEffect, useRef, useState } from "react";
import { lecturersData } from "~/services/aptechService";
import { getExportView } from "~/utils/drive";
import Slider from "react-slick";
import SlideDotsAndChange from "~/components/SlideDotsAndChange";
import config from "~/config";

const cx = classNames.bind(styles);

function Lecturers() {
    const [lecturers, setLecturers] = useState([]);
    const [activeSlideIndex, setActiveSlideIndex] = useState(null);

    const sliderRef = useRef();

    const handleClickItem = (index) => () => {
        if (activeSlideIndex === index) {
            setActiveSlideIndex(null);
        } else {
            setActiveSlideIndex(index);
        }
    }

    useEffect(() => {
        async function fetchData() {
            const data = await lecturersData();
            setLecturers(data);
        };
        fetchData();
    }, [])

    return (
        <div className={cx('wrapper')}>
            <HasTitle title={'Đội Ngủ Giảng Viên'} desc='Đội ngũ giảng viên được đào tạo và tập huấn từ các quốc gia phát triển cao về Công nghệ thông tin'>
                <div className={cx('lecturers')}>
                    <div className="row">
                        <SlideDotsAndChange onNext={() => sliderRef.current.slickNext()} onPrev={() => sliderRef.current.slickPrev()}>
                            <Slider {...{
                                dots: true,
                                infinite: true,
                                speed: 500,
                                slidesToShow: 4,
                                slidesToScroll: 1,
                                autoplay: true,
                                autoplaySpeed: 8000,
                                responsive: [
                                    {
                                        breakpoint: config.responsive.pc,
                                        settings: {
                                            slideToShow: 2,
                                        }
                                    },
                                    {
                                        breakpoint: config.responsive.tablet,
                                        settings: {
                                            slideToShow: 1,
                                        }
                                    },
                                ],
                            }} ref={sliderRef}>
                                {
                                    lecturers.map((item, index) => (
                                        <div key={index} className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
                                            <div className={cx('item', { active: index === activeSlideIndex })} onClick={handleClickItem(index)}>
                                                <div className={cx('img-wrapper')}>
                                                    <img className={cx('img')} src={getExportView(item.hinh_anh)} alt="IMG" />
                                                </div>
                                                <h3 className={cx('name')}>{item.ten_giang_vien}</h3>
                                                <p className={cx('summary')} dangerouslySetInnerHTML={{ __html: item.mo_ta_so_luoc }} />
                                                <div className={cx('detail-wrapper')}>
                                                    <p className={cx('detail')} dangerouslySetInnerHTML={{ __html: item.mo_ta_chi_tiet }} />
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </Slider>
                        </SlideDotsAndChange>
                    </div>
                </div>
            </HasTitle>
        </div>
    );
}

export default Lecturers;