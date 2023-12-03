import classNames from "classnames/bind";
import { useEffect, useState } from "react";

import styles from './News.module.scss';
import HasTitle from "~/components/HasTitle";
import { newsData } from "~/services/arenaService";

const cx = classNames.bind(styles);

function News() {
    const [news, setNews] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const res = await newsData();
            const [newItem] = res;
            setNews(newItem);
        };
        fetchData();
    }, []);

    return (
        <>
            <div className={cx('wrapper')}>
                <HasTitle title="Tin Tức - Sự Kiện">
                    <h2 className={cx('content')} dangerouslySetInnerHTML={{ __html: news.mo_ta }} />
                </HasTitle>
            </div>
        </>
    );
}

export default News;