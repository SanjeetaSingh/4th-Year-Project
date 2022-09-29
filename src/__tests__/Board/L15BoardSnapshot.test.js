import renderer from 'react-test-renderer'

import Level15 from '../../Level15/L15-Board/L15-Board'

it('snapshot test level 15', () => {
    const tree =  renderer.create(<Level15 />).toJSON()
    expect(tree).toMatchSnapshot();
});