const modules = import.meta.glob('./*.ts', { eager: true });

const exports = {};
for (const path in modules) {
  Object.assign(exports, modules[path]);
}

export default exports;
