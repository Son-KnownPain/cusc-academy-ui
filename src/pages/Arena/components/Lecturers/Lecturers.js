import classNames from "classnames/bind";
import styles from './Lecturers.module.scss';
import HasTitle from "~/components/HasTitle";
import { useEffect, useRef, useState } from "react";
import { lecturers as lecturersData } from "~/services/arenaService";
import { getExportView } from "~/utils/drive";
import Slider from "react-slick";
import SlideDotsAndChange from "~/components/SlideDotsAndChange";
import config from "~/config";

const cx = classNames.bind(styles);

function Lecturers() {
    const [lecturers, setLecturers] = useState([]);

    const sliderRef = useRef();

    useEffect(() => {
        async function fetchData() {
            const data = await lecturersData();
            setLecturers(data);
        };
        fetchData();
    }, [])

    return (
        <div className={cx('wrapper')}>
            <HasTitle title={'Đội Ngủ Giảng Viên'} desc='Trong suốt quá trình phát triển, CUSC ARENA tự hào có một lực lượng giảng viên chuyên nghiệp, trẻ trung, năng động, tận tâm giảng dạy sinh viên,... từ đó bồi dưỡng thêm nhiều chuyên gia thiết kế đồ họa, truyền thông, ấn phẩm PR, thiết kế Game, kỹ xảo điện ảnh,...'>
                <div className={cx('lecturers')}>
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
                                    breakpoint: config.responsive.underPc,
                                    settings: {
                                        slidesToShow: 3,
                                        slidesToScroll: 1,
                                        infinite: true,
                                        dots: true
                                    }
                                },
                                {
                                    breakpoint: config.responsive.underTablet,
                                    settings: {
                                        slidesToShow: 1,
                                        slidesToScroll: 1,
                                        infinite: true,
                                        dots: true
                                    }
                                },
                            ],
                        }} ref={sliderRef}>
                            {
                                lecturers.map((item, index) => (
                                    <div key={index}>
                                        <div className={cx('item')}>
                                            <div className={cx('img-wrapper')}>
                                                <img className={cx('img')} src={getExportView(item.hinh_anh)} alt="IMG" />
                                            </div>
                                            <h3 className={cx('name')}>{item.ho_ten}</h3>
                                        </div>
                                    </div>
                                ))
                            }
                        </Slider>
                    </SlideDotsAndChange>
                </div>
            </HasTitle>
        </div>
    );
}

export default Lecturers;