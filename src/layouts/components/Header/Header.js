import { Link } from 'react-router-dom';
import Tippy from '@tippyjs/react';
import classNames from "classnames/bind";
import 'tippy.js/dist/tippy.css';

import styles from './Header.module.scss'
import config from '~/config';
import images from '~/asset/images';
import Nav from './Nav';
import { NavItem, DropDownNavItem } from './Nav';
import { ContactIcon, GraduationCapIcon, HomeIcon, IntroductionIcon } from '~/components/Icons';

const cx = classNames.bind(styles);

function Header() {
    return (
        <header id={cx('header')}>
            <div className={cx('inner')}>
                <div className={cx('logos')}>
                    <Tippy content="Cần Thơ University">
                        <Link to={config.externalRoutes.ctu} className={cx('logo')} target="_blank">
                            <img src={images.ctuLogo} alt="CTU Logo" />
                        </Link>
                    </Tippy>
                    <Tippy content="CUSC Computer Education">
                        <Link to={config.externalRoutes.cusc} className={cx('logo')} target="_blank">
                            <img src={images.cuscLogo} alt="CUSC Logo" />
                        </Link>
                    </Tippy>
                </div>

                <Nav>
                    <NavItem title={'Trang chủ'} to={config.routes.home} icon={HomeIcon} />
                    <NavItem title={'Giới thiệu'} to={config.routes.introduction} icon={IntroductionIcon} />
                    <NavItem title={'Liên hệ'} to={config.routes.contact} icon={ContactIcon} />
                    <DropDownNavItem title={'Đào tạo'} to={config.routes.aptech} icon={GraduationCapIcon} />
                </Nav>
            </div>
        </header>
    );
}

export default Header;