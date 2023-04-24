import { UnwrapNestedRefs, getCurrentInstance } from "vue";
import { Testastos } from "../testastos";

const useTestastos = () => {
  const instance = getCurrentInstance();
  return instance?.appContext.config.globalProperties
    .$testastos as UnwrapNestedRefs<Testastos>;
};

export default useTestastos;
