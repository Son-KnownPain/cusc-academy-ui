import classNames from "classnames/bind";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import styles from './Banner.module.scss';
import { banners as bannersData } from '~/services/arenaService';
import { getExportView } from '~/utils/drive'
import Loader from "~/components/Loader";
import config from "~/config";

const cx = classNames.bind(styles);

function Banner() {
    const [banners, setBanners] = useState([]);

    /**
     * Call API get banner image
     */
    useEffect(() => {
        async function fetchData() {
            const res = await bannersData();
            setBanners(res.filter(x => x.hinh_anh).map(x => ({ image: getExportView(x.hinh_anh) })));
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