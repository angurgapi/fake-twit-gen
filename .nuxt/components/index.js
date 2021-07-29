import { wrapFunctional } from './utils'

export { default as Form } from '../../components/Form.vue'

export const LazyForm = import('../../components/Form.vue' /* webpackChunkName: "components/form" */).then(c => wrapFunctional(c.default || c))
