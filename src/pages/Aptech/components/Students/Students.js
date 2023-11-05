import classNames from "classnames/bind";
import { useState, useEffect, useRef } from "react";

import styles from './Students.module.scss';
import HasTitle from "~/components/HasTitle";
import { successfulStudents } from "~/services/aptechService";
import { getExportView } from "~/utils/drive";
import Loader from "~/components/Loader";
import Slider from "react-slick";
import SlideDotsAndChange from "~/components/SlideDotsAndChange";

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
                    studentName: x.ho_ten,
                    position: x.nghe_nghiep,
                    company: x.don_vi_cong_tac,
                }
            }));
        };
        fetchData();
    }, []);

    return (
        <div className={cx('wrapper')}>
            <HasTitle title="Gương Mặt Sinh Viên Thành Đạt" desc="Tự hào sinh viên CUSC - APTECH và được đánh giá cao từ các nhà tuyển dụng về kỹ năng và thái độ làm việc,hình ảnh tiêu biểu sinh viên thành đạt">
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
                            }} ref={sliderRef}>
                                {
                                    students.map((s, index) => (
                                        <div key={index}>
                                            <div className={cx('slide-wrapper')}>
                                                <img className={cx('avt')} src={s.image} alt="Student" />
                                                <h1 className={cx('name')}>{s.studentName}</h1>
                                                <p className={cx('position')}>{s.position}</p>
                                                <p className={cx('company')}>{s.company}</p>
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