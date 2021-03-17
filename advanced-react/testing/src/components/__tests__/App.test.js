import React from 'react'
import ReactDOM from 'react-dom'
import App from 'components/App'
import {mount} from 'enzyme'
import CommentBox from "components/CommentBox";
import CommentList from "components/CommentList";
import Root from "../../Root";



it('shows a comment box', () => {
  let wrapped
  wrapped = mount(
    <Root initialState={{auth: true}} initialRoute={['/post']}>
      <App />
    </Root>
  )
  expect(wrapped.find(CommentBox).length).toEqual(1)
})

it('shows a comment list', () => {
  let wrapped
  wrapped = mount(
    <Root initialState={{auth: true}} initialRoute={['/']}>
      <App />
    </Root>
  )
  expect(wrapped.find(CommentList).length).toEqual(1)
})