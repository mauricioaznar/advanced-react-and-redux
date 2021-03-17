import React from 'react'
import {mount} from 'enzyme'
import moxios from 'moxios'
import Root from 'Root'
import App from 'components/App'
import {createMemoryHistory} from "history";

beforeEach(() => {
  moxios.install()
  moxios.stubRequest('http://jsonplaceholder.typicode.com/comments', {
    status: 200,
    response: Array(5).fill({name: 'Comment'})
  })
})

afterEach(() => {
  moxios.uninstall()
})

it('can fetch a list of comments and display them', (done) => {
  const wrapped = mount(
    <Root initialRoute={['/post']}>
      <App />
    </Root>
  )
  wrapped.find('li').at(1).simulate('click')
  wrapped.find('.fetch-comments').simulate('click')
  wrapped.find('li').at(0).simulate('click')

  // introduce a tiny little pause
  moxios.wait(() => {
    wrapped.update()
    expect(wrapped.find('li').length).toEqual(3)
    wrapped.unmount()
    done()
  })
})