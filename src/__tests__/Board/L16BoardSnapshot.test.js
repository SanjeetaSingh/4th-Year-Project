import renderer from 'react-test-renderer'

import Level16 from '../../Level16/L16-Board/L16-Board'

it('snapshot test level 16', () => {
    const tree =  renderer.create(<Level16 />).toJSON()
    expect(tree).toMatchSnapshot();
});