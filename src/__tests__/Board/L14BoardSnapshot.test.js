import renderer from 'react-test-renderer'

import Level14 from '../../Level14/L14-Board/L14-Board'

it('snapshot test level 14', () => {
    const tree =  renderer.create(<Level14 />).toJSON()
    expect(tree).toMatchSnapshot();
});