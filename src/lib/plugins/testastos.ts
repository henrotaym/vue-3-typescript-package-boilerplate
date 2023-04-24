import { Plugin, UnwrapNestedRefs, reactive } from "vue";
import { Testastos } from "../testastos";

type Options = { name: string };

const plugin: Plugin<Options> = {
  install(app, { name }) {
    app.config.globalProperties.$testastos = reactive(new Testastos(name));
  },
};

declare module "vue" {
  interface ComponentCustomProperties {
    $testastos: UnwrapNestedRefs<Testastos>;
  }
}

export default plugin;
