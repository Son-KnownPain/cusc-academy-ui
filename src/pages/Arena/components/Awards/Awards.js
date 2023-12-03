import classNames from "classnames/bind";
import Slider from "react-slick";
import { useState, useEffect, useRef } from "react";

import styles from './Awards.module.scss';
import HasTitle from "~/components/HasTitle";
import Loader from "~/components/Loader";
import SlideDotsAndChange from "~/components/SlideDotsAndChange";
import { awardsData, awardsImages } from "~/services/aptechService";
import { getExportView } from "~/utils/drive";
import config from "~/config";

const cx = classNames.bind(styles);

function Awards() {
    const [awards, setAwards] = useState([]);
    const [images, setImages] = useState([]);

    const sliderRef = useRef();
    const slider2Ref = useRef();

    useEffect(() => {
        async function fetchData() {
            const data = await awardsData();
            setAwards(data.map(x => {
                return {
                    image: getExportView(x.hinh_anh),
                    awardName: x.ten_giai_thuong,
                    year: x.nam_doat_giai,
                    description: x.mo_ta_giai_thuong,
                }
            }));

            const imagesData = await awardsImages();
            setImages(imagesData.map(x => {
                return {
                    image: getExportView(x.hinh_anh),
                }
            }))
        };
        fetchData();
    }, []);

    return (
        <div className={cx('wrapper')}>
            <HasTitle title="Giải Thưởng Của CUSC" desc="Được xã hội công nhận">
                <div className={cx('cups-content')}>
                    <Loader contentCondition={awards?.length}>
                        <SlideDotsAndChange onNext={() => sliderRef.current.slickNext()} onPrev={() => sliderRef.current.slickPrev()}>
                            <Slider {...{
                                dots: true,
                                infinite: true,
                                speed: 500,
                                slidesToShow: 2,
                                slidesToScroll: 1,
                                autoplay: true,
                                autoplaySpeed: 8000,
                            }} ref={sliderRef}>
                                {
                                    awards.map((s, index) => (
                                        <div key={index}>
                                            <div className={cx('slide-wrapper')}>
                                                <img width="30%" src={s.image} alt="AwardsCup" />
                                                <h1 className={cx('name')}>{s.awardName}</h1>
                                                <h4 className={cx('year')}>{s.year}</h4>
                                                <p className={cx('description')}>{s.description}</p>
                                            </div>
                                        </div>
                                    ))
                                }
                            </Slider>
                        </SlideDotsAndChange>
                    </Loader>
                </div>
                <div className={cx('cups-content')}>
                    <Loader contentCondition={awards?.length}>
                        <SlideDotsAndChange onNext={() => slider2Ref.current.slickNext()} onPrev={() => slider2Ref.current.slickPrev()}>
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
                                        breakpoint: config.responsive.underTablet,
                                        settings: {
                                            slidesToShow: 1,
                                            slidesToScroll: 1,
                                            infinite: true,
                                            dots: true
                                        }
                                    },
                                ],
                            }} ref={slider2Ref}>
                                {
                                    images.map((s, index) => (
                                        <div key={index}>
                                            <div className={cx('slide-wrapper')}>
                                                <img width="80%" src={s.image} alt="AwardsImage" />
                                            </div>
                                        </div>
                                    ))
                                }
                            </Slider>
                        </SlideDotsAndChange>
                    </Loader>
                </div>
            </HasTitle>
        </div>
    );
}

export default Awards;