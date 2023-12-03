import * as arenaHttpRequest from '~/utils/arenaHttpRequest';

export const banners = async () => {
    const res = await arenaHttpRequest.get("banners");

    return res;
}

export const slides = async () => {
    const res = await arenaHttpRequest.get("slide");

    return res;
}

export const highlights = async () => {
    const res = await arenaHttpRequest.get("nhung_diem_noi_bat_cua_arena");

    return res;
}

export const lecturers = async () => {
    const res = await arenaHttpRequest.get("giang_vien");

    return res;
}

export const successfulStudents = async () => {
    const res = await arenaHttpRequest.get("guong_sinh_vien_thanh_dat");

    return res;
}

export const traningPrograms = async () => {
    const res = await arenaHttpRequest.get("chuong_trinh_dao_tao");

    return res;
}

export const admissionInfo = async () => {
    const res = await arenaHttpRequest.get("thong_tin_tuyen_sinh");

    return res;
}

export const studentHighlight = async () => {
    const productInfo = await arenaHttpRequest.get("thong_tin_san_pham");
    const highlights = await arenaHttpRequest.get("san_pham_noi_bat_cua_sinh_vien")

    return [productInfo, highlights];
}

export const newsData = async () => {
    const res = await arenaHttpRequest.get("tintuc_sukien");

    return res
}