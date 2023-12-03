import classNames from "classnames/bind";
import { useState, useEffect, useRef } from "react";

import styles from './Students.module.scss';
import HasTitle from "~/components/HasTitle";
import { successfulStudents } from "~/services/arenaService";
import { getExportView } from "~/utils/drive";
import Loader from "~/components/Loader";
import Slider from "react-slick";
import SlideDotsAndChange from "~/components/SlideDotsAndChange";
import config from "~/config";

const cx = classNames.bind(styles);

function Students() {
    const [students, setStudents] = useState([]);

    const sliderRef = useRef();

    useEffect(() => {
        async function fetchData() {
            const data = await successfulStudents();
            setStudents(data.map(x => {
                return {
                    image: getExportView(x.hinh_anh),
                    studentName: x.ten,
                    position: x.cong_viec,
                    talk: x.cau_noi,
                }
            }));
        };
        fetchData();
    }, []);

    return (
        <div className={cx('wrapper')}>
            <HasTitle title="Gương Mặt Sinh Viên Thành Đạt" desc="Với mục tiêu rõ ràng trong quá trình học tập, rèn luyện tại CUSC ARENA, nhiều cựu sinh viên đã bước đầu gặt hái được những thành công đáng khen ngợi. Chúng tôi muốn chia sẻ kinh nghiệm của các học viên, những tấm gương sáng cho các thế hệ sinh viên tiếp tục học tập và noi theo.">
                <div className={cx('content')}>
                    <Loader contentCondition={students?.length}>
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
                                        breakpoint: config.responsive.underTablet,
                                        settings: {
                                            slidesToShow: 1,
                                            slidesToScroll: 1,
                                        }
                                    }
                                ]
                            }} ref={sliderRef}>
                                {
                                    students.map((s, index) => (
                                        <div key={index}>
                                            <div className={cx('slide-wrapper')}>
                                                <img className={cx('avt')} src={s.image} alt="Student" />
                                                <h1 className={cx('name')}>{s.studentName}</h1>
                                                <p className={cx('position')}>{s.position}</p>
                                                <p className={cx('talk')}>"{s.talk}"</p>
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

export default Students;