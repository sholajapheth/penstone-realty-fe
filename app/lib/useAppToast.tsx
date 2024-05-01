import { useToast } from "@chakra-ui/react";

export function useAppToast() {
  return useToast ({
    position: "top-right",
    isClosable: true,
  });
}
