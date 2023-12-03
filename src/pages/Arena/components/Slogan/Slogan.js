import classNames from "classnames/bind";
import { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { getExportView } from "~/utils/drive";
import Loader from "~/components/Loader";
import styles from './Slogan.module.scss';
import SlideDotsAndChange from "~/components/SlideDotsAndChange";
import HasTitle from "~/components/HasTitle";
import { slides } from "~/services/arenaService";
import config from "~/config";

const cx = classNames.bind(styles);

function Slogan() {
    const [slogans, setSlogans] = useState([]);

    const sliderRef = useRef();

    useEffect(() => {
        async function fetchData() {
            const res = await slides();
            setSlogans(res.filter(x => !x.tieu_de.length).map(x => { return { image: getExportView(x.hinh_anh) } }));
        };
        fetchData();
    }, []);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('content')}>
                <HasTitle title="Học Arena, Vươn Xa Sáng Tạo" desc="Nhu cầu ngày càng tăng của ngành truyền thông và giải trí tại Việt Nam là tiềm năng thúc đẩy các sản phẩm sáng tạo của ARENA MULTIMEDIA trong mảng thiết kế 3D để sáng tạo nên các nhân vật game ấn tượng, hay trong bộ phim hoạt hình 3D với kỹ xảo tuyệt đỉnh,... xuất hiện, phát triển ở khắp nơi và có ý nghĩa vô cùng quan trọng đối với cuộc sống. Bạn đã sẵn sàng cùng CUSC ARENA bước chân vào con đường sáng tạo ra những sản phẩm tuyệt vời này chưa?">
                    <Loader contentCondition={slogans?.length}>
                        <SlideDotsAndChange onNext={() => sliderRef.current.slickNext()} onPrev={() => sliderRef.current.slickPrev()}>
                            <Slider {...{
                                dots: true,
                                infinite: true,
                                speed: 500,
                                slidesToShow: 2,
                                slidesToScroll: 1,
                                autoplay: true,
                                autoplaySpeed: 8000,
                                responsive: [
                                    {
                                        breakpoint: config.responsive.underPc,
                                        settings: {
                                            slidesToShow: 2,
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
                                    slogans.map((s, index) => (
                                        <div key={index} className={cx('img-wrapper')}>
                                            <img width="100%" src={s.image} alt="Slogan" />
                                        </div>
                                    ))
                                }
                            </Slider>
                        </SlideDotsAndChange>
                    </Loader>
                </HasTitle>
            </div>
        </div>
    );
}

export default Slogan;