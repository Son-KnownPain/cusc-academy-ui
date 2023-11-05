import { useState } from 'react';
import Typewriter from 'typewriter-effect';
import classNames from "classnames/bind";

import styles from './Preamble.module.scss';
import RegisterModal from './RegisterModal';

const cx = classNames.bind(styles);

function Preamble() {
    const [isOpen, setIsOpen] = useState(false);

    const handleClickRegister = () => {
        setIsOpen(true);
    }

    const handleClickOutsideModal = () => {
        setIsOpen(false);
    }

    return (
        <>
            <div className={cx('wrapper')}>
                <div className={cx('heading-wrapper')}>
                    <div className="row">
                        <div className="col-xl-9 col-md-8 col-sm-8 col-12">
                            <Typewriter
                                options={
                                    {
                                        strings: [
                                            'Bạn muốn trở thành fullstack developer ?',
                                            'Hoặc trở thành multi media, AI và Steam staff.',
                                            'Hãy bấm nút đăng ký ghi danh ngay nào !',
                                        ],
                                        autoStart: true,
                                        loop: true,
                                        wrapperClassName: cx('title'),
                                        cursorClassName: cx('title-curs'),
                                        delay: 20,
                                        deleteSpeed: 6,
                                        pauseFor: 4000,
                                    }
                                }
                            />
                        </div>
                        <div className="col-xl-3 col-md-4 col-sm-4 col-12">
                            <div className={cx('btn-wrapper')}>
                                <button className={cx('register-btn')} onClick={handleClickRegister}>Đăng ký ghi danh</button>
                            </div>
                        </div>
                    </div>
                </div>
                <p className={cx('desc')}>
                    Được thành lập từ 29/03/2001, với sứ mệnh “Giải quyết nhu cầu học CNTT chất lượng cao trong Khu vực Đồng bằng Sông Cửu Long”, Trung tâm Công nghệ Phần mềm Đại học Cần Thơ (CUSC) đảm nhận vai trò tiên phong trong các hoạt động đào tạo nguồn nhân lực CNTT chất lượng cao, sản xuất và gia công phần mềm, phát triển dữ liệu số, tư vấn các dự án CNTT. Ngay từ ngày đầu thành lập CUSC, Đại học Cần Thơ đã chủ động tìm kiếm và hợp tác với Tập đoàn Aptech Ấn Độ để đem về Chương trình đào tạo Lập trình viên Quốc tế ‒ APTECH và giao cho CUSC sứ mạng triển khai chương trình đào tạo tiên tiến này nhằm cung cấp các kiến thức và kỹ năng CNTT đặc thù chuẩn quốc tế, thúc đẩy sự phát triển chung của công nghiệp phần mềm khu vực và cả nước.
                </p>
            </div>
            {isOpen && <RegisterModal onClick={handleClickOutsideModal} />}
        </>
    );
}

export default Preamble;