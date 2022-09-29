import renderer from 'react-test-renderer'

import Level10 from '../../Level10/L10-Board/L10-Board'

it('snapshot test level 10', () => {
    const tree =  renderer.create(<Level10 />).toJSON()
    expect(tree).toMatchSnapshot();
});