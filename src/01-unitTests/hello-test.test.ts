import {splitIntoWords, sum} from './hello-tests'
import {multiply} from "./hello-tests";

let a:number;
let b:number;
let c:number;

beforeEach(()=> {
    a=1;
    b=2;
    c=3
})

test ('sum should be correct', ()=> {
    //action
    const result1 = sum(a,b)
    const result2 = sum(b,c)

    //expect result
    expect(result1).toBe(3)
    expect(result2).toBe(5)
})

test ('multiply should be correct', ()=> {
    //action
    const result1 = multiply(a,b)
    const result2 = multiply(b,c)

    //expect result
    expect(result1).toBe(2)
    expect(result2).toBe(6)
})

test ('split should be correct', ()=> {
    //data
    const sentence1 = 'Hello my dear friend'
    const sentence2 = 'React is a JS library!'

    //action
    const result1 = splitIntoWords(sentence1)
    const result2 = splitIntoWords(sentence2)

    //expect result
    expect(result1.length).toBe(4)
    expect(result1[0]).toBe('hello')
    expect(result1[1]).toBe('my')
    expect(result1[2]).toBe('dear')
    expect(result1[3]).toBe('friend')

    expect(result2.length).toBe(5)
    expect(result2[0]).toBe('react')
    expect(result2[1]).toBe('is')
    expect(result2[2]).toBe('a')
    expect(result2[3]).toBe('js')
    expect(result2[4]).toBe('library')

})