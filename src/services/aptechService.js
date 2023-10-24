import * as aptechHttpRequest from '~/utils/aptechHttpRequest';

export const carouselSlideImages = async () => {
    const res = await aptechHttpRequest.get("headerslider");

    return res;
}

export const sloganSlideImages = async () => {
    const res = await aptechHttpRequest.get("slogan");

    return res;
}