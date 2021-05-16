import { useEffect } from "react";
import { useState as useGlobalState } from "@hookstate/core";
import { api } from "api/";
import { UserDto } from "api/DTOs/Account";
import { useApi } from "hooks/useApi";
import { ResponseError } from "interfaces/responseError";
import { globalState } from "state/globalState";

export const useUser = (): {
  user: UserDto | undefined;
  loading: boolean;
  error: ResponseError | undefined;
} => {
  const state = useGlobalState(globalState);
  const [user, loading, getUser, error] = useApi(api.account.getUser);

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const user = await getUser("");

    if (user) {
      state.user.set(user);
    }
  };

  return { user, loading, error };
};
