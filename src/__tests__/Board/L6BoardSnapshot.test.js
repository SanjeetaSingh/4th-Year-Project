import renderer from 'react-test-renderer'

import Level6 from '../../Level6/L6-Board/L6-Board'

it('snapshot test level 6', () => {
    const tree =  renderer.create(<Level6 />).toJSON()
    expect(tree).toMatchSnapshot();
});