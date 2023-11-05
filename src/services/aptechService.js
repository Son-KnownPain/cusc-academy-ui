import * as aptechHttpRequest from '~/utils/aptechHttpRequest';

export const carouselSlideImages = async () => {
    const res = await aptechHttpRequest.get("headerslider");

    return res;
}

export const sloganSlideImages = async () => {
    const res = await aptechHttpRequest.get("slogan");

    return res;
}

export const lecturersData = async () => {
    const res = await aptechHttpRequest.get("giangvien");

    return res;
}

export const awardsData = async () => {
    const res = await aptechHttpRequest.get("cupgiaithuong");

    return res;
}

export const awardsImages = async () => {
    const res = await aptechHttpRequest.get("hinhanhgiaithuong");

    return res;
}

export const successfulStudents = async () => {
    const res = await aptechHttpRequest.get("guongsinhvienthanhdat");

    return res;
}

export const traningPrograms = async () => {
    const res = await aptechHttpRequest.get("chuongtrinhdaotao");

    return res;
}

export const studentActivitieImages = async () => {
    const res = await aptechHttpRequest.get("hinhanhsv");

    return res;
}

export const newsAndEvents = async () => {
    const res = await aptechHttpRequest.get("tintucsukien");

    return res;
}