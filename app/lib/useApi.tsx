import {
  UseMutationResult,
  UseQueryResult,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { useAppToast } from "./useAppToast";
import { AxiosError, AxiosResponse } from "axios";

interface ApiMutationOptions<TData, TVariables> {
  mutationFunction?: (variables: TVariables) => Promise<TData>;
  onSuccess?: (data: TData) => void;
  onError?: (error: AxiosError) => void;
  onSuccessFn?: (data: TData) => void;
}

export function useAPI() {
  const toast = useAppToast();
  const queryClient = useQueryClient();

function useAPIMutation<TData, TVariables>({
  mutationFunction,
  onSuccessFn,
}: ApiMutationOptions<TData, TVariables>): UseMutationResult<
  TData,
  AxiosError,
  TVariables
> {
  return useMutation<TData, AxiosError, TVariables>({
    mutationFn: mutationFunction,
    onSuccess: onSuccessFn,
    onError: (error: AxiosError) => {
      if (error.response) {
        console.log(error.response);
        const status = error.response.status;
        if (status === 400) {
          toast({
            description: "Please check your credentials",
            status: "error",
          });
        } else if (status === 401) {
          toast({
            description: error.response.data as string,
            status: "error",
          });
        } else {
          toast({
            description: "An error occurred" + error.response.data,
            status: "error",
          });
        }
      } else {
        toast({ description: "An error occurred", status: "error" });
      }
    },
  });
}

  function useAPIQuery<TData, AxiosError>({
    queryFn,
    queryKey,
  }: any): UseQueryResult<TData, AxiosError> {
    return useQuery<TData, AxiosError>({
      queryKey,
      queryFn,
    });
  }

  return { useAPIQuery, useAPIMutation, useQuery, useMutation, queryClient };
}
