import renderer from 'react-test-renderer'

import Level13 from '../../Level13/L13-Board/L13-Board'

it('snapshot test level 13', () => {
    const tree =  renderer.create(<Level13 />).toJSON()
    expect(tree).toMatchSnapshot();
});