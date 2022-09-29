import renderer from 'react-test-renderer'

import Level3 from '../../Level3/L3-Board/Board-3'

it('snapshot test level 3', () => {
    const tree = renderer.create(<Level3 />).toJSON()
    expect(tree).toMatchSnapshot();
});
