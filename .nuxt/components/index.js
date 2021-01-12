export { default as Form } from '../../components/Form.vue'

export const LazyForm = import('../../components/Form.vue' /* webpackChunkName: "components/Form" */).then(c => c.default || c)
