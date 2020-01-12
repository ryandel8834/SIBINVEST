import mocks from "../mocks";

export default {
  getReferencesData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(mocks.references), 500);
    });
  }
};
