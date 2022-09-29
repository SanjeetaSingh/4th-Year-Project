import renderer from 'react-test-renderer'

import Level1 from '../../Level1/Board/Board'

it('snapshot test level 1', () => {
    const tree =  renderer.create(<Level1 />).toJSON()
    expect(tree).toMatchSnapshot();
});
