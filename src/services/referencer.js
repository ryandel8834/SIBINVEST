import mocks from "../mocks";

export default {
  getReferencesData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(mocks.references), 500);
    });
  },
  getReferencesName() {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(mocks.searchRoutes), 500);
    });
  }
};
