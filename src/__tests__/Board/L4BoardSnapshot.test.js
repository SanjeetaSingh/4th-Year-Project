import renderer from 'react-test-renderer'

import Level4 from '../../Level4/L4-Board/L4-Board'

it('snapshot test level 14', () => {
    const tree =  renderer.create(<Level4 />).toJSON()
    expect(tree).toMatchSnapshot();
});
