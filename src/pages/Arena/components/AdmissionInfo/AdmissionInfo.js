import classNames from "classnames/bind";
import styles from './AdmissionInfo.module.scss'
import { useEffect, useState } from "react";
import { admissionInfo } from "~/services/arenaService";

const cx = classNames.bind(styles);

function AdmissionInfo() {
    const [admissionInfos, setAdmissionInfos] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const res = await admissionInfo();

            const [data] = res

            setAdmissionInfos(data)
        }
        fetchData();
    }, [])

    return (
        <div className={cx('wrapper')}>
            <div className={cx('content')}>
                <h1 className={cx('title')}>{admissionInfos.tieu_de}</h1>
                <div className={cx('main-content')} dangerouslySetInnerHTML={{ __html: admissionInfos.noi_dung }}></div>
            </div>
        </div>
    );
}

export default AdmissionInfo;