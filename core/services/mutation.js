//  'use client'

import { useMutation,useQueryClient } from "@tanstack/react-query";
import { setCookie } from "@/utils/cookie";

 import api from "../config/api";
const useSendOtp=()=>{
    const mutationFn = (data) => api.post("auth/send-otp", data);

  return useMutation({ mutationFn});
}
// اگه ارور دادباید دوباره اینو بزارم ,useQueryClient
const useCheckOtp = () => {
  const queryClient = useQueryClient();
  const mutationFn = (data) => api.post("auth/check-otp", data);
  const onSuccess = (data) => {
    setCookie("accessToken", data?.data?.accessToken, 30);
    setCookie("refreshToken", data?.data?.refreshToken, 365);
    queryClient.invalidateQueries({ queryKey: ["user-data"] });
  };
  return useMutation({ mutationFn ,onSuccess });
};

export {useSendOtp,useCheckOtp}

