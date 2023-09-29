import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './PopoverWrapper.module.scss';

const cx = classNames.bind(styles);

function PopoverWrapper({ children }) {
    return <div className={cx('wrapper')}>{children}</div>;
}

PopoverWrapper.propTypes = {
    children: PropTypes.node.isRequired,
};

export default PopoverWrapper;
