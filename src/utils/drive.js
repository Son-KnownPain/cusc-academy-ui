export const getExportView = link => {

    const getGoogleDriveFileId = (link) => {
        const regex = /\/d\/([a-zA-Z0-9_-]+)\/|\/file\/d\/([a-zA-Z0-9_-]+)\//;
        const match = link.match(regex);
        if (match) {
            return match[1] || match[2];
        }
        return '';
    };

    const fileId = getGoogleDriveFileId(link);

    if (fileId) {
        const exportLink = `https://drive.google.com/uc?export=view&id=${fileId}`;
        return exportLink;
    } else {
        console.error("INVALID GOOGLE DRIVE LINK");
        return '';
    }
}