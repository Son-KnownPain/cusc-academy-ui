import classNames from "classnames/bind";

import styles from './DropDown.module.scss'
import { PopoverWrapper } from "~/components/Popover";
import images from '~/asset/images';
import EduDropDownItem from "./EduDropDownItem";
import config from "~/config";

const cx = classNames.bind(styles);

function EduDropDown() {
    return (
        <PopoverWrapper>
            <div className={cx('wrapper')}>
                <EduDropDownItem to={config.routes.aptech} image={images.aptechLogo} title={'Lập trình viên Quốc tế'} />
                <EduDropDownItem to={config.routes.arena} image={images.arenaLogo} title={'Mỹ thuật đa phương tiện Quốc tế'} />
                <EduDropDownItem to={config.routes.acnpro} image={images.acnProLogo} title={'Trí tuệ nhân tạo và máy học'} />
                <EduDropDownItem to={config.routes.steam} image={images.steamLogo} title={'Các khóa học STEAM dành cho THCS'} />
            </div>
        </PopoverWrapper>
    );
}

export default EduDropDown;