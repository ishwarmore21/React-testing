import { shallow } from "enzyme";
import Headline from "../Components/HeadLine";
import { findByTestAtrr,checkProps } from "../Utils";
// import checkPropTypes from 'check-prop-types';

const setup = (props={})=>{
    const component = shallow(<Headline {...props}/>);
    return component;
}

describe("Headline component",()=>{

    describe("Checking PropTypes",()=>{
        it("Should not throw a warning",()=>{
            const expectedProps = {
                header: "Test Header",
                desc : "Test Desc ",
                tempArr : [{
                    first : "Test fname",
                    last : "Test lname",
                    email : "Test email",
                    age : 16,
                    onlineStatus : false
                  }]
            };

            const propsError = checkProps(Headline,expectedProps);
            expect(propsError).toBeUndefined();
        })
    })

    describe("Have Props",()=>{
        let wrapper;
        beforeEach(()=>{
            const props = {
                header: 'Test Header',
                desc: 'Test Desc'
            }
            wrapper = setup(props);
        });

        it('Should render without errors',()=>{
            const component = findByTestAtrr(wrapper,'HeadLineComponent');
            expect(component.length).toBe(1)
        });

        it("Should render h1",()=>{
            const h1 = findByTestAtrr(wrapper,'header');
            expect(h1.length).toBe(1);
        });

        it("Should render desc",()=>{
            const p = findByTestAtrr(wrapper,'desc');
            expect(p.length).toBe(1);
        })
    });

    describe("Have No Props",()=>{
        let wrapper;
        beforeEach(()=>{
            wrapper = setup();
        })

        it('Should not render',()=>{
            const component = findByTestAtrr(wrapper,'HeadLineComponent');
            expect(component.length).toBe(0)
        });

        it("Should not render h1",()=>{
            const h1 = findByTestAtrr(wrapper,'header');
            expect(h1.length).toBe(0);
        });

        it("Should not render desc",()=>{
            const p = findByTestAtrr(wrapper,'desc');
            expect(p.length).toBe(0);
        })
    });
});