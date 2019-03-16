import React from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCircle } from '@fortawesome/free-regular-svg-icons'

import { Icon } from 'components/icon'

library.add(faCircle)

export const App = () => <Icon faIcon={['far', 'circle']} />
