import { useReducer, useCallback } from 'react';

const httpReducer = (currentHttpState, action) => {
  switch (action.type) {
    case 'SEND':
      return {
        isLoading: true,
        error: null,
        data: null,
        extra: null,
        identifier: action.identifier
      };
    case 'RESPONSE':
      return {
        ...currentHttpState,
        isLoading: false,
        data: action.data,
        extra: action.extra
      };
    case 'ERROR':
      return {
        ...currentHttpState,
        isLoading: false,
        error: action.error
      };
    case 'CLEAR_ERROR':
      return {
        ...currentHttpState,
        error: null
      };
    default:
      throw new Error('Should not get here!');
  }
};

const useHttp = () => {
  const [httpState, dispatchHttp] = useReducer(httpReducer, {
    isLoading: false,
    error: null,
    data: null,
    extra: null,
    identifier: null
  });

  const sendRequest = useCallback(
    (url, method, body, reqExtra, reqIdentifier) => {
      dispatchHttp({ type: 'SEND', identifier: reqIdentifier });

      fetch(url, {
        method,
        body,
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then((response) => {
          return response.json();
        })
        .then((responseData) => {
          dispatchHttp({
            type: 'RESPONSE',
            data: responseData,
            extra: reqExtra
          });
        })
        .catch(() => {
          dispatchHttp({ type: 'ERROR', error: 'Something went wrong!' });
        });
    },
    []
  );

  const clearError = useCallback(() => {
    dispatchHttp({ type: 'CLEAR_ERROR' });
  }, []);

  return {
    isLoading: httpState.isLoading,
    data: httpState.data,
    error: httpState.error,
    reqExtra: httpState.extra,
    reqIdentifier: httpState.identifier,
    sendRequest: sendRequest,
    clearError: clearError
  };
};

export default useHttp;
