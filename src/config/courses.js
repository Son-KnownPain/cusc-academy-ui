import images from "~/asset/images";
import routes from './routes';

export const registerLinks = {
    googleFormRegisterLink: 'https://docs.google.com/forms/d/e/1FAIpQLScfscLTsI6ZxA7hHuOEgMjUOl5eo9eOXsbzAD6TSRauhdhBwA/viewform',
    pdfDriveLink: 'https://drive.google.com/file/d/10yCId0vcToSJhpQV5ySvjeNgQ33bwYXF/view',
    steamOnly: 'https://docs.google.com/forms/d/e/1FAIpQLSdNaLo4myv6BCSrQrEHS49-8HJ71ll52uhpYY79vJGlGK5fbA/viewform',
}

export const courses = [
    {
        logo: images.aptechLogo,
        name: 'Lập trình viên Quốc tế',
        registerLink: registerLinks.googleFormRegisterLink,
        page: routes.aptech,
        desc: 'Lập trình viên Quốc tế Aptech là một chương trình đào tạo hàng đầu về công nghệ thông tin, tập trung vào việc phát triển kỹ năng lập trình, thiết kế và quản trị dự án. Với giáo trình tiên tiến và giáo viên chất lượng, khoá học này giúp sinh viên học được các ngôn ngữ lập trình hàng đầu, thiết kế ứng dụng và học cách giải quyết các thách thức công nghệ thực tế. Kết hợp giữa lý thuyết và thực hành, chương trình này không chỉ trang bị kiến thức sâu về lập trình, mà còn giúp sinh viên phát triển kỹ năng cần thiết để thành công trong ngành công nghệ thông tin đầy cạnh tranh.',
    },
    {
        logo: images.arenaLogo,
        name: 'Mỹ thuật đa phương tiện',
        registerLink: registerLinks.googleFormRegisterLink,
        page: routes.arena,
        desc: 'Mỹ thuật đa phương tiện Arena là một không gian sáng tạo độc đáo, nơi nghệ sĩ và người yêu nghệ thuật gặp gỡ và tạo ra những tác phẩm đa dạng. Trang trí bằng nghệ thuật đương đại, nơi này không chỉ là một quán cà phê mà còn là nơi trực thuộc về nghệ thuật, kết hợp cả mỹ thuật truyền thống và hiện đại. Arena không chỉ cung cấp các khóa học học thuật mà còn là nơi tôn vinh sự đa dạng nghệ thuật bằng cách tổ chức triển lãm, buổi hòa nhạc, và các sự kiện nghệ thuật độc đáo. Nơi này thú vị với không gian sáng tạo và cộng đồng nghệ sĩ đa phương tiện.',
    },
    {
        logo: images.acnProLogo,
        name: 'Trí tuệ nhân tạo và máy học',
        registerLink: registerLinks.googleFormRegisterLink,
        page: routes.acnpro,
        desc: 'Khoá học Trí tuệ Nhân tạo (AI) của ACNPro là một chương trình đào tạo chuyên sâu về lĩnh vực công nghệ đang phát triển nhanh nhất hiện nay. Trong khoá học này, sinh viên sẽ học về các lĩnh vực quan trọng của AI, bao gồm học máy (machine learning), xử lý ngôn ngữ tự nhiên (NLP), thị giác máy tính (computer vision), và học sâu (deep learning).',
    },
    {
        logo: images.steamLogo,
        name: 'Các khóa học STEAM cho THCS',
        registerLink: registerLinks.steamOnly,
        page: routes.steam,
        desc: 'Khoá học STEAM (Khoa học, Công nghệ, Kỹ thuật, Nghệ thuật và Toán học) là một chương trình giáo dục đa ngành, tập trung vào việc kết hợp các lĩnh vực khoa học, công nghệ, kỹ thuật, nghệ thuật và toán học trong quá trình học tập. Mục tiêu của khoá học STEAM là khuyến khích sự sáng tạo, tư duy phê phán, và giúp sinh viên áp dụng kiến thức từ các lĩnh vực này để giải quyết các vấn đề phức tạp.',
    },
];