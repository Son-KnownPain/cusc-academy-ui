import classNames from "classnames/bind";
import styles from './WhyChooseAptech.module.scss';
import HasTitle from "~/components/HasTitle";
import images from "~/asset/images";

const cx = classNames.bind(styles);

function WhyChooseAptech() {
    return (
        <div className={cx('wrapper')}>
            <HasTitle title="Tại Sao Nên Chọn CUSC - Aptech" desc='"APTECH không chạy theo công nghệ. Chúng tôi luôn đón đầu công nghệ"'>
                <div className={cx('container')}>
                    <div className="row">
                        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                            <div className={cx('item')}>
                                <div className={cx('icon-box')}>
                                    <img className={cx('image-icon')} src={images.whyChooseAptech.update} alt="Icon" />
                                </div>
                                <p className={cx('text')}>
                                    Chương trình đào tạo được cập nhật liên tục, hướng thị trường, đáp ứng yêu cầu tuyển dụng, tối ưu hóa thời gian nhờ học trực tiếp vào kiến thức chuyên ngành. Tăng cường năng lực tiếng Anh với chương trình đào tạo chuẩn quốc tế.
                                </p>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                            <div className={cx('item')}>
                                <div className={cx('icon-box')}>
                                    <img className={cx('image-icon')} src={images.whyChooseAptech.globe} alt="Icon" />
                                </div>
                                <p className={cx('text')}>
                                    Bằng cấp được công nhận toàn cầu. 100% sinh viên được đảm bảo việc làm sau tốt nghiệp.
                                </p>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                            <div className={cx('item')}>
                                <div className={cx('icon-box')}>
                                    <img className={cx('image-icon')} src={images.whyChooseAptech.book} alt="Icon" />
                                </div>
                                <p className={cx('text')}>
                                    Hệ thống Onlinevarsity hỗ trợ học bất cứ lúc nào, học bất cứ nơi đâu.
                                </p>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                            <div className={cx('item')}>
                                <div className={cx('icon-box')}>
                                    <img className={cx('image-icon')} src={images.whyChooseAptech.board} alt="Icon" />
                                </div>
                                <p className={cx('text')}>
                                    Phương pháp đào tạo kết hợp chú trọng thực hành, áp dụng các công cụ và kỹ thuật mới nhất, học liệu được trang bị AR.
                                </p>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                            <div className={cx('item')}>
                                <div className={cx('icon-box')}>
                                    <img className={cx('image-icon')} src={images.whyChooseAptech.lecturer} alt="Icon" />
                                </div>
                                <p className={cx('text')}>
                                    Đội ngũ giảng viên được đào tạo và tập huấn từ các quốc gia phát triển cao về CNTT.
                                </p>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                            <div className={cx('item')}>
                                <div className={cx('icon-box')}>
                                    <img className={cx('image-icon')} src={images.whyChooseAptech.house} alt="Icon" />
                                </div>
                                <p className={cx('text')}>
                                    Cơ sở vật chất hiện đại với thư viện hiện đại hàng đầu Đông Nam Á.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </HasTitle>
        </div>
    );
}

export default WhyChooseAptech;