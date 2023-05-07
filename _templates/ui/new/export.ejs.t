---
inject: true
to: packages/ui/src/components/index.ts
after: "export default <%= name %>"
---
export { default as <%= name %> } from './<%= name %>';
export type { <%= name %>PropsType } from './<%= name %>';