import classNames from "classnames/bind";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.scss';

import styles from './TrainingAndEnrollment.module.scss';
import HasTitle from "~/components/HasTitle";
import { useEffect, useState } from "react";
import { traningPrograms } from "~/services/aptechService";

const cx = classNames.bind(styles);

function TrainingAndEnrollment() {
    const [trainings, setTrainings] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const data = await traningPrograms();
            setTrainings(data.map(x => {
                return {
                    sem: x.hoc_ky,
                    title: x.tieu_de_eng,
                    description: x.mieu_ta,
                    target: x.muc_tieu,
                    module: x.module,
                }
            }));
        };
        fetchData();
    }, []);

    return (
        <div className={cx('wrapper')}>
            <HasTitle title="Chương Trình Đào Tạo - Tuyển Sinh" desc="APTECH luôn tiên phong dẫn đầu trong việc thiết kế, nắm bắt xu hướng công nghệ mới nhất để vào chương trình đào tạo.">
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
                                    <h1 className={cx('title')}>
                                        {t.title}
                                    </h1>
                                    <p className={cx('desc')}>
                                        {t.description}
                                    </p>
                                    <div className={cx('module-and-target')}>
                                        <div className="row">
                                            <div className="col-xl-8">
                                                <div className={cx('module')}>
                                                    <table dangerouslySetInnerHTML={{ __html: t.module }} />
                                                </div>
                                            </div>
                                            <div className="col-xl-4">
                                                <div className={cx('target')} dangerouslySetInnerHTML={{ __html: t.target }} />
                                            </div>
                                        </div>
                                    </div>
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