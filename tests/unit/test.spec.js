import { shallowMount } from '@vue/test-utils'
import home from '../../src/components/home.vue'

describe('home.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'THE FOUR VALUES OF THE AGILE MANIFESTO'
    const wrapper = shallowMount(home)
    const message = wrapper.find('#value').text();
    expect(message).toBe(msg)
  })
})
