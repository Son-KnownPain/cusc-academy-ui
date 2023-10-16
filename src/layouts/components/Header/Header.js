import { Link } from 'react-router-dom';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import classNames from "classnames/bind";
import { useState } from 'react';

import styles from './Header.module.scss'
import config from '~/config';
import images from '~/asset/images';
import Nav from './Nav';
import { NavItem, DropDownNavItem } from './Nav';
import { BarsIcon, ContactIcon, GraduationCapIcon, HomeIcon, IntroductionIcon } from '~/components/Icons';
import MobileMenu from './MobileMenu/MobileMenu';

const cx = classNames.bind(styles);

function Header() {
    const [showMenu, setShowMenu] = useState(false);

    const handleClickBarsBtn = () => {
        setShowMenu(true);
    }

    const handleClickModal = () => {
        setShowMenu(false);
    }

    return (
        <>
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
                        <DropDownNavItem title={'Đào tạo'} icon={GraduationCapIcon} />
                    </Nav>

                    <button onClick={handleClickBarsBtn} className={cx('bars-icon', 'hide-from-tablet-higher')}>
                        <BarsIcon width='24px' height='24px' />
                    </button>
                </div>
            </header>

            {showMenu && <MobileMenu onClick={handleClickModal} />}
        </>
    );
}

export default Header;