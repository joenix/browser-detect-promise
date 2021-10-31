import browserDetect from "browser-detect";

export default new Promise(resolve => resolve(browserDetect()));
