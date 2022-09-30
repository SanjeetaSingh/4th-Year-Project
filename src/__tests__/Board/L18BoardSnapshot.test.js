import renderer from 'react-test-renderer'

import Level18 from '../../Level18/L18-Board/L18-Board'

it('snapshot test level 18', () => {
    const tree =  renderer.create(<Level18 />).toJSON()
    expect(tree).toMatchSnapshot();
});