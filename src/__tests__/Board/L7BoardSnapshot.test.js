import renderer from 'react-test-renderer'

import Level7 from '../../Level7/L7-Board/L7-Board'

it('snapshot test level 7', () => {
    const tree =  renderer.create(<Level7 />).toJSON()
    expect(tree).toMatchSnapshot();
});