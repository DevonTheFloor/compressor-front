const $files = {
    getExtention(fileName) {
        const fileNameSplit = fileName.split(".");
        const filesExtention = fileNameSplit.slice(-1)[0];
        return filesExtention;
    }
};

export default $files;