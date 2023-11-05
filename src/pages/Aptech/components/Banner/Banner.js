import classNames from "classnames/bind";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import styles from './Banner.module.scss';
import { carouselSlideImages } from '~/services/aptechService';
import { getExportView } from '~/utils/drive'
import Loader from "~/components/Loader";

const cx = classNames.bind(styles);

function Banner() {
    const [banners, setBanners] = useState([]);

    /**
     * Call API get banner image
     */
    useEffect(() => {
        async function fetchData() {
            const data = await carouselSlideImages();
            setBanners(data.map(x => { return { image: getExportView(x.hinh_anh) } }));
        };
        fetchData();
    }, []);

    return (
        <div className={cx('wrapper')}>
            <Loader contentCondition={banners?.length} height="600px">
                <Slider {...{
                    infinite: true,
                    speed: 500,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 8000,
                }}>
                    {
                        banners.map((b, index) => (
                            <img key={index} width="100%" src={b.image} alt="Banner" />
                        ))
                    }
                </Slider>
            </Loader>
        </div>
    );
}

export default Banner;