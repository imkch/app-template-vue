import { mount } from '@vue/test-utils';
import SvgIcon from '@/components/svg-icon';

describe('SvgIcon.vue', () => {
  it('renders props.name when passed', () => {
    const name = 'logo';
    const wrapper = mount(SvgIcon, {
      propsData: { name }
    });
    expect(wrapper.props('name')).toBe('logo');
  });
});
