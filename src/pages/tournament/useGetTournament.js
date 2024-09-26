import { axiosPrivate } from "../../api/axios";
const useGetTournament = () => {
  const get = async (tournamentId) => {
    try {
      const url = `/api/v1/tournament/${tournamentId}`;
      const response = await axiosPrivate.get(url);
      // console.log(response);
      return response.data.payload;
    } catch (error) {
      console.log(error.response.data.message);
    }
  };
  return get;
};

export default useGetTournament;