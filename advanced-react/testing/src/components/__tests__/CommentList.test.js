import React from 'react'
import {mount} from 'enzyme'

import CommentList from 'components/CommentList'
import Root from 'Root'

let wrapped
let initialState
beforeEach(() => {
  initialState = {
    comments: ['Comment 1', 'Comment 2']
  }

  wrapped = mount(
    <Root initialState={initialState}>
      <CommentList />
    </Root>
  )
})

it('creates one li per comment', () => {
  expect(wrapped.find('li').length).toEqual(initialState.comments.length)
})

it('shows the text for each comment', () => {
  expect(wrapped.render().text()).toContain(initialState.comments[0])
  expect(wrapped.render().text()).toContain(initialState.comments[1])
})
