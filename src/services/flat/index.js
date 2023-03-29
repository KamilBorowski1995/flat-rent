import axios from "../../utils/axios";
const FlatsService = {
  getFlat: async (id) => {
    return await axios
      .get(`/flat/${id}`)
      .then(async (res) => {
        return res;
      })
      .catch((err) => err?.response);
  },
  getFlats: async () => {
    return await axios
      .get(`/flat`)
      .then(async (res) => {
        return res;
      })
      .catch((err) => err?.response);
  },
};

export default FlatsService;
