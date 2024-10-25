import axiosInstance from "@/api/axiosInstance";

export const fetchBreedList = async () => {
  const response = await axiosInstance.get("/breeds/list/all");
  return response.data;
};
