const translate = require('./lab1')

test('hello world should produce ellohay orldway', () => {
    expect(translate('hello world')).toEqual('elloway orldway')
})
test('apple should produce applyway', () => {
    expect(translate('apple')).toEqual('appleway')
})
test('else should produce ellohay orldway', () => {
    expect(translate('else')).toEqual('elseway')
})
test('Adam should produce Adamway', () => {
    expect(translate('Adam')).toEqual('Adamway')
})
test('up should produce upway', () => {
    expect(translate('up')).toEqual('upway')
})
test('it should produce itway', () => {
    expect(translate('it')).toEqual('itway')
})
test('out should produce outway', () => {
    expect(translate('out')).toEqual('outway')
})
test('bob should produce obbay', () => {
    expect(translate('bob')).toEqual('obbay')
})
test('cat should produce atcay', () => {
    expect(translate('cat')).toEqual('atcay')
})
test('problem should produce oblempray', () => {
    expect(translate('problem')).toEqual('oblempray')
})
test('string should produce ingstray', () => {
    expect(translate('string')).toEqual('ingstray')
})
test('string should be lowercase', () => {
    expect(translate(str)).toLowerCase(true)
})