import { useState } from "react";
import { api } from "api";
import { ResponseError } from "interfaces/responseError";

type APIMethod<T, M> = (request: T) => Promise<M>;

export const useApi = <T, M>(
  apiMethod: APIMethod<T, M>
): [
  M | undefined,
  boolean,
  typeof apiMethod,
  ResponseError | undefined,
  () => void
] => {
  const [response, setResponse] = useState<M | undefined>(undefined);
  const [loading, setLoading] = useState(false);
  const [errors, setError] = useState<ResponseError | undefined>(undefined);

  const makeRequest = async (req: T) => {
    setLoading(true);
    setError(undefined);

    try {
      const res = await apiMethod.call(api.controller, req);
      setResponse(res);
      return res;
    } catch (error) {
      setError(error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const clearRes = () => setResponse(undefined);

  return [response, loading, makeRequest, errors, clearRes];
};

export const useApiWithoutResponse = <T, M>(
  apiMethod: APIMethod<T, M>
): [boolean, typeof apiMethod, ResponseError | undefined, () => void] => {
  const [r, loading, makeRequest, errors, clearRes] = useApi(apiMethod);

  return [loading, makeRequest, errors, clearRes];
};
