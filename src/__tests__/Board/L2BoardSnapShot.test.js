import renderer from 'react-test-renderer'

import Level2 from '../../Level2/L2-Board/Level-2-Board'

it('snapshot test level 2', () => {
    const tree =  renderer.create(<Level2 />).toJSON()
    expect(tree).toMatchSnapshot();
});
