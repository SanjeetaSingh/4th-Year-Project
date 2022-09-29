import renderer from 'react-test-renderer'

import Level17 from '../../Level17/L17-Board/L17-Board'

it('snapshot test level 17', () => {
    const tree =  renderer.create(<Level17 />).toJSON()
    expect(tree).toMatchSnapshot();
});