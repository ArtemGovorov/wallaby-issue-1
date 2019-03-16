import React from 'react'
import { cleanup, render } from 'react-testing-library'

import { Icon } from './icon'

describe('icon', () => {
  afterEach(cleanup)
  const defaultProps = {
    faIcon: 'faIcon',
  }

  test('should render', () => {
    const { container } = render(<Icon {...defaultProps} />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
