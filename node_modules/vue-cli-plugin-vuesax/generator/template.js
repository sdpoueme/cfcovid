import Vue from 'vue'
<%_ if (options.import === 'full') { _%>
import Vuesax from 'vuesax'
<%_ } else { _%>
import { vsButton } from 'vuesax/dist/components'
<%_ } _%>

import 'vuesax/dist/vuesax.css'
<%_ if (options.includeIcons) { _%>
import 'material-icons/iconfont/material-icons.css'
<%_ } _%>

<%_ if (options.import === 'full') { _%>
Vue.use(Vuesax)
<%_ } else { _%>
Vue.use(vsButton)
<%_ } _%>
