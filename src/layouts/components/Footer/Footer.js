import React from 'react';
import styles from './Footer.module.scss';
import classNames from 'classnames/bind';
import { EnvelopeIcon, MapMarkerIcon, PhoneIcon } from '~/components/Icons';
import images from '~/asset/images';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <footer className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('content')}>
                    <h3 className={cx('title')}>TRUNG TÂM CÔNG NGHỆ PHẦN MỀM ĐẠI HỌC CẦN THƠ</h3>
                    <p className={cx('line')}>
                        <MapMarkerIcon className={cx('hide-on-mobile-tablet')} height="14px " width="14px" />
                        Khu III, Đại Học Cần Thơ, 01 Lý Tự Trọng, Q. Ninh Kiều, TP. Cần Thơ
                    </p>
                    <p className={cx('line')}>
                        <PhoneIcon height="14px" width="14px" />
                        <span className={cx('label')}>Điện thoại:</span>
                        <a href="tel:+842923835581" className={cx('text-link')}>
                            0292 383 5581
                        </a>
                    </p>
                    <p className={cx('line')}>
                        <span className={cx('label')}>Zalo:</span>
                        <a href="zalo://" target="_blank" rel="noreferrer" className={cx('text-link')}>
                            0868 952 535
                        </a>
                    </p>
                    <p className={cx('line')}>
                        <EnvelopeIcon width="14px" height="14px" />
                        <span className={cx('label')}>Email:</span>
                        <a href="mailto:tuyensinh@cusc.ctu.edu.vn?subject=Tuyển sinh" className={cx('text-link')}>
                            tuyensinh@cusc.ctu.edu.vn
                        </a>
                    </p>
                </div>
                <div className={cx('socials')}>
                    <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://www.youtube.com/c/CUSCAPTECHCHANNEL"
                        className={cx('social-item')}
                    >
                        <img className={cx('social-img')} src={images.socials.youtube} alt="youtube" />
                    </a>
                    <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://www.facebook.com/CUSC.CE/"
                        className={cx('social-item')}
                    >
                        <img className={cx('social-img')} src={images.socials.facebook} alt="facebook" />
                    </a>
                    <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://www.instagram.com/arena.cantho/"
                        className={cx('social-item')}
                    >
                        <img className={cx('social-img')} src={images.socials.instagram} alt="instagram" />
                    </a>
                    <a target="_blank" rel="noreferrer" href="https://zalo.vn/" className={cx('social-item')}>
                        <img className={cx('social-img')} src={images.socials.zalo} alt="zalo" />
                    </a>
                </div>
            </div>
            <p className={cx('copyright')}>
                © 2023 CUSC Computer Education.
            </p>
        </footer>
    );
}

export default Footer;
