import renderer from 'react-test-renderer'

import Level8 from '../../Level8/L8-Board/L8-Board'

it('snapshot test level 8', () => {
    const tree =  renderer.create(<Level8 />).toJSON()
    expect(tree).toMatchSnapshot();
});