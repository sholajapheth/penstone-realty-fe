const useLocalStorage = () => {
  const localStorage =
    typeof window !== "undefined" ? window.localStorage : null;

  const getItem = (key: any) => {
    if (localStorage) {
      const value = localStorage.getItem(key);
      if (value !== null) {
        try {
          return JSON.parse(value);
        } catch (error) {
          console.error("Error parsing JSON:", error);
          return null;
        }
      }
    }
    return null;
  };

  const setItem = (key: any, value: any) => {
    if (localStorage) {
      return localStorage.setItem(key, JSON.stringify(value));
    }
  };

  const clear = () => {
    if (localStorage) {
      return localStorage.clear();
    }
  };

  return {
    getItem,
    setItem,
    clear,
  };
};

export default useLocalStorage;
