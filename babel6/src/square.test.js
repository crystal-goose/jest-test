import square from './square'

test('square', () => {
    expect(square({ v: 3 })).toBe(9)
})