import classNames from "classnames/bind";

import styles from './MobileMenu.module.scss'
import config from "~/config";
import images from "~/asset/images";
import { NavLink, useLocation } from "react-router-dom";
import { AngleRightIcon, ArrowDropDownIcon, ContactIcon, GraduationCapIcon, HomeIcon, IntroductionIcon } from "~/components/Icons";
import { eduRoutes } from "~/config/routes";
import { useState } from "react";

const cx = classNames.bind(styles);

function MobileMenu({ onClick }) {

    const { pathname } = useLocation();

    const [showEdu, setShowEdu] = useState(eduRoutes.includes(pathname));

    const handleClickDropDown = e => {
        e.stopPropagation();
        setShowEdu(!showEdu);
    }

    return (
        <div className={cx('modal', "hide-from-tablet-higher")} onClick={onClick}>
            <div className={cx('content')} onClick={e => { e.stopPropagation(); }}>
                <div className={cx('header')}>
                    <a target="_blank" rel="noopener noreferrer" href={config.externalRoutes.ctu} className={cx('external-link')}>
                        <img className={cx('img')} src={images.ctuLogo} alt="CTU logo" />
                        <span className={cx('name')}>
                            Cần Thơ University
                        </span>
                    </a>
                    <a target="_blank" rel="noopener noreferrer" href={config.externalRoutes.ctu} className={cx('external-link')}>
                        <img className={cx('img')} src={images.cuscLogo} alt="CUSC logo" />
                        <span className={cx('name')}>
                            CUSC Computer Education
                        </span>
                    </a>
                </div>
                <div className={cx('body')}>
                    <NavLink to={config.routes.home} onClick={onClick} className={(nav) => cx('mobile-link', { active: nav.isActive })}>
                        <HomeIcon height="18px" width="18px" className={cx('icon')} />
                        Trang chủ
                    </NavLink>
                    <NavLink to={config.routes.introduction} onClick={onClick} className={(nav) => cx('mobile-link', { active: nav.isActive })}>
                        <IntroductionIcon height="18px" width="18px" className={cx('icon')} />
                        Giới thiệu
                    </NavLink>
                    <NavLink to={config.routes.introduction} onClick={onClick} className={(nav) => cx('mobile-link', { active: nav.isActive })}>
                        <ContactIcon height="18px" width="18px" className={cx('icon')} />
                        Liên hệ
                    </NavLink>
                    <NavLink onClick={handleClickDropDown} className={cx('mobile-link', { active: eduRoutes.includes(pathname) && !showEdu })}>
                        <GraduationCapIcon height="18px" width="18px" className={cx('icon')} />
                        Đào tạo
                        {
                            showEdu
                                ?
                                <ArrowDropDownIcon height="18px" width="18px" className={cx('drop-down-icon')} />
                                :
                                <AngleRightIcon height="18px" width="18px" className={cx('drop-down-icon')} />
                        }
                    </NavLink>
                    {
                        showEdu &&
                        <div className={cx('mobile-dropdown')}>
                            <NavLink to={config.routes.aptech} onClick={onClick} className={(nav) => cx('mobile-dropdown-link', { active: nav.isActive })}>
                                Lập trình viên Quốc tế
                            </NavLink>
                            <NavLink to={config.routes.arena} onClick={onClick} className={(nav) => cx('mobile-dropdown-link', { active: nav.isActive })}>
                                Mỹ thuật đa phương tiện Quốc tế
                            </NavLink>
                            <NavLink to={config.routes.acnpro} onClick={onClick} className={(nav) => cx('mobile-dropdown-link', { active: nav.isActive })}>
                                Trí tuệ nhân tạo và máy học
                            </NavLink>
                            <NavLink to={config.routes.steam} onClick={onClick} className={(nav) => cx('mobile-dropdown-link', { active: nav.isActive })}>
                                Các khóa học STEAM dành cho THCS
                            </NavLink>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
}

export default MobileMenu;