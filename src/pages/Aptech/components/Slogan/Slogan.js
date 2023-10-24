import classNames from "classnames/bind";
import { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { getExportView } from "~/utils/drive";
import { sloganSlideImages } from "~/services/aptechService";
import Loader from "~/components/Loader";
import styles from './Slogan.module.scss';
import SlideDotsAndChange from "~/components/SlideDotsAndChange";

const cx = classNames.bind(styles);

function Slogan() {
    const [slogans, setSlogans] = useState([]);

    const sliderRef = useRef();

    useEffect(() => {
        async function fetchData() {
            const data = await sloganSlideImages();
            setSlogans(data.map(x => { return { image: getExportView(x.hinh_anh) } }));
        };
        fetchData();
    }, [])

    return (
        <div className={cx('wrapper')}>
            <div className={cx('content')}>
                <Loader contentCondition={slogans?.length}>
                    <SlideDotsAndChange onNext={() => sliderRef.current.slickNext()} onPrev={() => sliderRef.current.slickPrev()}>
                        <Slider {...{
                            dots: true,
                            infinite: true,
                            speed: 500,
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            autoplay: true,
                            autoplaySpeed: 8000,
                        }} ref={sliderRef}>
                            {
                                slogans.map((s, index) => (<img key={index} width="100%" src={s.image} alt="Slogan" />))
                            }
                        </Slider>
                    </SlideDotsAndChange>
                </Loader>
            </div>
        </div>
    );
}

export default Slogan;