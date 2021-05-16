import { useEffect, useState } from "react";
import { useState as useGlobalState } from "@hookstate/core";
import { ResponseError } from "interfaces/responseError";
import { globalState } from "state/globalState";
import { api } from "api/";

export const useUserAuthorizated = (): {
  isAuthorizated: boolean;
  loading: boolean;
  error: ResponseError | undefined;
} => {
  const state = useGlobalState(globalState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<ResponseError>();

  useEffect(() => {
    loadNeccessaryData();
  }, []);

  const loadUser = async () => {
    try {
      const user = await api.account.getUser();
      state.user.set(user);
    } catch (err) {
      setError(err);
    }
  };

  const loadProfile = async () => {
    const profile = await api.profile.getProfile();
    if (profile) state.profile.set(profile);
  };

  const loadNeccessaryData = async () => {
    setLoading(true);
    if (!state.user.get()) {
      await loadUser();
    }
    setLoading(false);

    if (!state.profile.get()) {
      await loadProfile();
    }
  };

  return { isAuthorizated: state.user.get() ? true : false, loading, error };
};
