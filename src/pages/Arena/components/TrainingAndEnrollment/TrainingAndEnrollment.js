import classNames from "classnames/bind";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.scss';

import styles from './TrainingAndEnrollment.module.scss';
import HasTitle from "~/components/HasTitle";
import { useEffect, useState } from "react";
import { traningPrograms } from "~/services/arenaService";
import { getExportView } from "~/utils/drive";
import ImgWithLoader from "~/components/ImgWithLoader";

const cx = classNames.bind(styles);

function TrainingAndEnrollment() {
    const [trainings, setTrainings] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const data = await traningPrograms();
            setTrainings(data.map(x => {
                return {
                    sem: x.hoc_ky,
                    content: x.anh_project1,
                }
            }));
        };
        fetchData();
    }, []);

    return (
        <div className={cx('wrapper')}>
            <HasTitle title="Chương Trình Đào Tạo - Tuyển Sinh" desc="Mỹ thuật Đa phương tiện Quốc tế - Arena đào tạo toàn diện, bao quát các lĩnh vực của Mỹ thuật Đa phương tiện, phục vụ cho ngành công nghiệp sáng tạo và giải trí. Với chương trình học mang tầm quốc tế, sinh viên có thể phát triển toàn diện Portfolio thông qua các dự án thực tế, mở ra các cơ hội nghề nghiệp hấp dẫn. Xây dựng hành trang vững vàng với lộ trình 2 năm tại CUSC ARENA tốt nghiệp bằng ADIM (ADVANCED DIPLOMA IN MULTIMEDIA) do Tập đoàn CNTT Aptech Ấn Độ cấp">
                <div className={cx('content')}>
                    <Tabs>
                        <TabList className={cx('tab-list')}>
                            {trainings.map((t, index) => (
                                <Tab key={index} className={cx('tab')} selectedClassName={cx('tab-selected')}>{t.sem}</Tab>
                            ))}
                        </TabList>

                        {trainings.map((t, index) => (
                            <TabPanel selectedClassName={cx('tab-panel')} key={index}>
                                <div className={cx('tab-content')}>
                                    <ImgWithLoader imgClassName={cx('img')} src={getExportView(t?.content || '')} alt="Content" notLoadedRender={(<h2>Xin vui lòng đợi trong giây lát!</h2>)} />
                                </div>
                            </TabPanel>
                        ))}
                    </Tabs>
                </div>
            </HasTitle>
        </div>
    );
}

export default TrainingAndEnrollment;