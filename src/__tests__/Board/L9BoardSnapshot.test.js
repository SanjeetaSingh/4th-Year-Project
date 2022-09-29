import renderer from 'react-test-renderer'

import Level9 from '../../Level9/L9-Board/L9-Board'

it('snapshot test level 9', () => {
    const tree =  renderer.create(<Level9 />).toJSON()
    expect(tree).toMatchSnapshot();
});