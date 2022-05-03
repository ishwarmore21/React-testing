import { useCounter } from "../Helper/useCounter";
import { act,renderHook } from "@testing-library/react";

describe("increment",()=>{
    it("increments count by 1",()=>{
        const {result} = renderHook(useCounter);
        act(()=>{
            result.current.increment()
        })

        expect(result.current.count).toBe(1);
    });

    it("decrements count by 1",()=>{
        const {result} = renderHook(useCounter);
        act(()=>{
            result.current.decrement()
        })

        expect(result.current.count).toBe(-1);
    });

    test('two plus two is four', () => { 
        expect(2 + 2).toBe(4);
    });
    
    test('object assignment', () => {
        const data = {one: 1};
        data['two'] = 2;
        expect(data).toEqual( {one: 1, two: 2} );
    });

    test('null', () => { const n = null;
        expect(n).toBeNull();
        expect(n).toBeDefined();
        expect(n).not.toBeUndefined();
        expect(n).not.toBeTruthy();
        expect(n).toBeFalsy();
    });

    test('two plus two', () => { 
        const value = 2 + 2;
        expect(value).toBeGreaterThan(3);
        expect(value).toBeGreaterThanOrEqual(3.5);
        expect(value).toBeLessThan(5);
        expect(value).toBeLessThanOrEqual(4.5);
        // toBe and toEqual are equivalent for numbers
        expect(value).toBe(4); 
        expect(value).toEqual(4); 
    });

    test('adding floating point numbers', () => {
        const value = 0.1 + 0.2;
        expect(value).not.toBe(0.3); // It isn't!
        // because rounding error
        expect(value).toBeCloseTo(0.3); // This works.
    });

    test('there is no I in team', () => {
        expect('team').not.toMatch(/I/);
    });
    
    test('but there is a "stop" in Christoph', () => {
        expect('Christoph').toMatch(/stop/); 
    });
            
    const shoppingList = [ 'cakes', 'snacks', 'trash bags', 'paper','towels', 'fruits' ];
    test('the shopping list has fruits on it', () => {
        expect(shoppingList).toContain('fruits'); 
    });

    // function compileAndroidCode() {
    //     throw new ConfigError('you are using the wrong JDK');
    // }
        
    // test('compiling android goes as expected', () => {
    //     expect(compileAndroidCode).toThrow();
    //     expect(compileAndroidCode).toThrow(ConfigError);
    //     // You can also use the exact error message or a regexp
    //     expect(compileAndroidCode).toThrow('you are using the wrong JDK');
    //     expect(compileAndroidCode).toThrow(/JDK/);
    // });

});