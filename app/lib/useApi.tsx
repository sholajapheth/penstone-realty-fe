import {
    UseMutationResult,
    UseQueryResult,
    useMutation,
    useQuery,
    useQueryClient, UseMutationOptions,
} from "@tanstack/react-query";
import {AxiosError} from "axios";
import {useAppToast} from "./useAppToast";

interface ApiMutationOptions<TData, TVariables> {
    mutationFunction?: (variables: TVariables) => Promise<TData>;
    onSuccessFn?: (data: TData) => void;
    onErrorFn?: (error: AxiosError) => void; // Added
}

export function useAPI() {
    const toast = useAppToast();
    const queryClient = useQueryClient();

    function useAPIMutation<TData, TVariables>({
                                                   mutationFunction,
                                                   onSuccessFn,
                                                   onErrorFn, // Added
                                               }: ApiMutationOptions<TData, TVariables>): UseMutationResult<TData,
        AxiosError,
        TVariables> {
        return useMutation<TData, AxiosError, TVariables>({
            mutationFn: mutationFunction,
            onSuccess: onSuccessFn,
            onError: (error: AxiosError) => {
                if (error.response) {
                    // console.log(error.response);
                    const status = error.response.status;
                    if (status === 400) {
                        toast({
                            description: "Please check your credentials",
                            status: "error",
                        });
                    } else if (status === 401) {
                        toast({
                            description:
                            // @ts-ignore
                                (error.response.data.message as string) ||
                                "Invalid credentials",
                            status: "error",
                        });
                    } else {
                        toast({
                            description:
                            // @ts-ignore
                                "An error occurred: " + error?.response?.data.message,
                            status: "error",
                        });
                    }
                } else {
                    toast({description: "An error occurred", status: "error"});
                }

                if (onErrorFn) {
                    onErrorFn(error); // Call the custom error handler
                }
            },
        } as UseMutationOptions<TData, AxiosError, TVariables, unknown>);
    }

    function useAPIQuery<TData, TError>({
                                            queryFn,
                                            queryKey,
                                        }: any): UseQueryResult<TData, TError> {
        return useQuery<TData, TError>({queryKey, queryFn});
    }

    return {useAPIQuery, useAPIMutation, useQuery, useMutation, queryClient};
}
