import renderer from 'react-test-renderer'

import Level5 from '../../Level5/L5-Board/L5-Board'

it('snapshot test level 5', () => {
    const tree =  renderer.create(<Level5 />).toJSON()
    expect(tree).toMatchSnapshot();
});