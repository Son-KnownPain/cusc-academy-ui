import classNames from 'classnames/bind';
import styles from './Degree.module.scss'
import HasTitle from '~/components/HasTitle';
import images from '~/asset/images';

const cx = classNames.bind(styles);

function Degree() {
    return (
        <div className={cx('wrapper')}>
            <HasTitle title="Bằng Cấp" desc={<Description />}>
                <div className={cx('content')}>
                    <img width="80%" src={images.other.adseDegree} alt='ADSE' />
                </div>
            </HasTitle>
        </div>
    );
}

function Description() {
    return (
        <>
            Hoàn thành chương trình đào tạo 2 năm với 4 học kỳ bạn sẽ nhận được: <br />
            <strong>Bằng cấp</strong>: Bằng ADSE (Advanced Diploma in Software Engineering) do Tập đoàn Aptech Ấn Độ cấp.
        </>
    );
}

export default Degree;