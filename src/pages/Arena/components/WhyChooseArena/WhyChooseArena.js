import classNames from "classnames/bind";
import styles from './WhyChooseArena.module.scss';
import HasTitle from "~/components/HasTitle";
import images from "~/asset/images";

const cx = classNames.bind(styles);

function WhyChooseArena() {
    return (
        <div className={cx('wrapper')}>
            <HasTitle title="Tại Sao Nên Chọn CUSC - Arena">
                <div className={cx('container')}>
                    <div className="row">
                        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                            <div className={cx('item')}>
                                <div className={cx('icon-box')}>
                                    <img className={cx('image-icon')} src={images.whyChooseArena.update} alt="Icon" />
                                </div>
                                <p className={cx('text')}>
                                    Chương trình đào tạo được cập nhật liên tục, hướng thị trường, bám sát thực tế các lĩnh vực, đáp ứng yêu cầu tuyển dụng.
                                </p>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                            <div className={cx('item')}>
                                <div className={cx('icon-box')}>
                                    <img className={cx('image-icon')} src={images.whyChooseArena.globe} alt="Icon" />
                                </div>
                                <p className={cx('text')}>
                                    Bằng cấp được công nhận toàn cầu, phát triển Portfolio của người học.
                                </p>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                            <div className={cx('item')}>
                                <div className={cx('icon-box')}>
                                    <img className={cx('image-icon')} src={images.whyChooseArena.book} alt="Icon" />
                                </div>
                                <p className={cx('text')}>
                                    Tăng cường năng lực tiếng Anh với chương trình đào tạo chuẩn Quốc tế.
                                </p>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                            <div className={cx('item')}>
                                <div className={cx('icon-box')}>
                                    <img className={cx('image-icon')} src={images.whyChooseArena.board} alt="Icon" />
                                </div>
                                <p className={cx('text')}>
                                    Phương pháp đào tạo kết hợp chú trọng thực hành, áp dụng các công cụ và kỹ thuật mới nhất, học liệu được trang bị AR.
                                </p>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                            <div className={cx('item')}>
                                <div className={cx('icon-box')}>
                                    <img className={cx('image-icon')} src={images.whyChooseArena.lecturer} alt="Icon" />
                                </div>
                                <p className={cx('text')}>
                                    Đội ngũ giảng viên được đào tạo và tập huấn từ các quốc gia phát triển cao về CNTT.
                                </p>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                            <div className={cx('item')}>
                                <div className={cx('icon-box')}>
                                    <img className={cx('image-icon')} src={images.whyChooseArena.time} alt="Icon" />
                                </div>
                                <p className={cx('text')}>
                                    Tối ưu hóa thời gian nhờ học trực tiếp vào kiến thức chuyên ngành, hệ thống Onlinevarsity hỗ trợ học bất cứ lúc nào, học bất cứ nơi đâu.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </HasTitle>
        </div>
    );
}

export default WhyChooseArena;