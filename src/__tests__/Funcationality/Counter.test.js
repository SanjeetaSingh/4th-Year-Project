import { render, screen, cleanup, wrapper, getByTestId, fireEvent } from '@testing-library/react'
import Level1 from '../../Level1/Controls/Controls'
import Level2 from '../../Level2/L2-Control/Level-2-Control'
import Level3 from '../../Level3/L3-Contol/Contol-3'
import Level4 from '../../Level4/L4-Control/L4-Control'
import Level5 from '../../Level5/L5-Control/L5-Control'
import Level6 from '../../Level6/L6-Control/L6-Control'
import Level7 from '../../Level7/L7-Control/L7-Control'
import Level8 from '../../Level8/L8-Control/L8-Control'
import Level9 from '../../Level9/L9-Control/L9-Control'
import Level10 from '../../Level10//L10-Control/L10-Control'
import Level11 from '../../Level11/L11-Controls/L11-Controls'
import Level12 from '../../Level12/L12-Controls/L12-Controls'
import Level13 from '../../Level13/L13-Controls/L13-Controls'
import Level14 from '../../Level14/L14-Controls/L14-Controls'
import Level15 from '../../Level15/L15-Controls/L15-Controls'
import Level16 from '../../Level16/L16-Controls/L16-Controls'
import Level17 from '../../Level17/L17-Controls/L17-Controls'

/**These test make sure that the value displayed
 * is the same as the one being met in the conditions
 * for each level. 
 */
afterEach(cleanup)
test('checking value of command count for level 1', () => {
    const { getByTestId } = render(<Level1 />)

    const elements = getByTestId("counter")
    expect(elements).toHaveTextContent("0/10")
})

test('checking value of command count for level 2', () => {
    const { getByTestId } = render(<Level2 />)

    const elements = getByTestId("counter")
    expect(elements).toHaveTextContent("0/5")
})

test('checking value of command count for level 3', () => {
    const { getByTestId } = render(<Level3 />)

    const elements = getByTestId("counter")
    expect(elements).toHaveTextContent("0/6")
})

test('checking value of command count for level 4', () => {
    const { getByTestId } = render(<Level4 />)

    const elements = getByTestId("counter")
    expect(elements).toHaveTextContent("0/8")
})

test('checking value of command count for level 5', () => {
    const { getByTestId } = render(<Level5 />)

    const elements = getByTestId("counter")
    expect(elements).toHaveTextContent("0/3")
})

test('checking value of command count for level 6', () => {
    const { getByTestId } = render(<Level6 />)

    const elements = getByTestId("counter")
    expect(elements).toHaveTextContent("0/5")
})

test('checking value of command count for level 7', () => {
    const { getByTestId } = render(<Level7 />)

    const elements = getByTestId("counter")
    expect(elements).toHaveTextContent("0/5")
})

test('checking value of command count for level 8', () => {
    const { getByTestId } = render(<Level8 />)

    const elements = getByTestId("counter")
    expect(elements).toHaveTextContent("0/8")
})

test('checking value of command count for level 9', () => {
    const { getByTestId } = render(<Level9 />)

    const elements = getByTestId("counter")
    expect(elements).toHaveTextContent("0/7")
})

test('checking value of command count for level 10', () => {
    const { getByTestId } = render(<Level10 />)

    const elements = getByTestId("counter")
    expect(elements).toHaveTextContent("0/7")
})

test('checking value of command count for level 11', () => {
    const { getByTestId } = render(<Level11 />)

    const elements = getByTestId("counter")
    expect(elements).toHaveTextContent("0/5")
})

test('checking value of command count for level 12', () => {
    const { getByTestId } = render(<Level12 />)

    const elements = getByTestId("counter")
    expect(elements).toHaveTextContent("0/2")
})

test('checking value of command count for level 13', () => {
    const { getByTestId } = render(<Level13 />)

    const elements = getByTestId("counter")
    expect(elements).toHaveTextContent("0/5")
})

test('checking value of command count for level 14', () => {
    const { getByTestId } = render(<Level14 />)

    const elements = getByTestId("counter")
    expect(elements).toHaveTextContent("0/5")
})

test('checking value of command count for level 15', () => {
    const { getByTestId } = render(<Level15 />)

    const elements = getByTestId("counter")
    expect(elements).toHaveTextContent("0/3")
})

test('checking value of command count for level 16', () => {
    const { getByTestId } = render(<Level16 />)

    const elements = getByTestId("counter")
    expect(elements).toHaveTextContent("0/5")
})

test('checking value of command count for level 17', () => {
    const { getByTestId } = render(<Level17 />)

    const elements = getByTestId("counter")
    expect(elements).toHaveTextContent("0/5")
})