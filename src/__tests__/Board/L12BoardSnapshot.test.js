import renderer from 'react-test-renderer'

import Level12 from '../../Level12/L12-Board/L12-Board'

it('snapshot test level 12', () => {
    const tree =  renderer.create(<Level12 />).toJSON()
    expect(tree).toMatchSnapshot();
});