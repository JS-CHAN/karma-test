import {test} from './1.spec'

describe('test export', () => {
  it('should render correct contents', () => {
    expect(test())
      .to.equal(2)
  })
})
