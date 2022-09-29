import renderer from 'react-test-renderer'

import Level11 from '../../Level11/L11-Board/L11-Board'

it('snapshot test level 11', () => {
    const tree =  renderer.create(<Level11 />).toJSON()
    expect(tree).toMatchSnapshot();
});