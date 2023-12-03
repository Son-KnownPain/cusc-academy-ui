import classNames from "classnames/bind";
import styles from './StudentHighlights.module.scss';
import HasTitle from "~/components/HasTitle";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { useEffect, useState } from "react";
import { studentHighlight } from "~/services/arenaService";
import { getExportView } from "~/utils/drive";
import ImgWithLoader from "~/components/ImgWithLoader";

const cx = classNames.bind(styles);

function StudentHighlights() {
    const [studentHighlights, setStudentHighlights] = useState([])
    const [imgs, setImgs] = useState([])

    useEffect(() => {
        async function fetchData() {
            const [productInfo, highlights] = await studentHighlight();

            setStudentHighlights(productInfo);
            setImgs(highlights)
        }
        fetchData()
    }, [])

    const renderTabContent = () => {
        let result = []
        for (let i = 0; i < imgs.length; i++) {
            result.push((
                <TabPanel key={i}>
                    <div className="row">
                        {
                            imgs[i].hinh_anh.split("\n").map((item, index) => (
                                <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12" key={index}>
                                    <ImgWithLoader imgClassName={cx('item-img')} width="100%" src={getExportView(item)} alt="Product" notLoadedRender={<h3 className={cx('loading-text')}>Đang tải hình ảnh...</h3>} />
                                </div>
                            ))
                        }
                    </div>
                </TabPanel>
            ))
        }
        return result;
    }

    return (
        <div className={cx('wrapper')}>
            <HasTitle title="Những Sản Phẩm Nổi Bật Của Sinh Viên" desc="Sinh viên là niềm tự hào của chúng tôi. hãy cùng CUSC ARENA khám phá các sản phẩm tuyệt vời từ sinh viên!">
                <Tabs className={cx('tabs')}>
                    <TabList className={cx('tab-list')}>
                        {studentHighlights.map((item, index) => (
                            <Tab key={index} className={cx('tab')} selectedClassName={cx('tab-selected')}>{item.tieu_de}</Tab>
                        ))}
                    </TabList>

                    {
                        renderTabContent()
                    }
                </Tabs>
            </HasTitle>
        </div>
    );
}

export default StudentHighlights;