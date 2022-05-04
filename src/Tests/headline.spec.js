import { shallow } from "enzyme";
import Headline from "../Components/HeadLine";
import { findByTestAtrr } from "../Utils";

const setup = (props={})=>{
    const component = shallow(<Headline {...props}/>);
    return component;
}

describe("Headline component",()=>{
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
            const h1 = findByTestAtrr(wrapper,'Header');
            expect(h1.length).toBe(1);
        });

        it("Should render desc",()=>{
            const p = findByTestAtrr(wrapper,'Desc');
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
            const h1 = findByTestAtrr(wrapper,'Header');
            expect(h1.length).toBe(0);
        });

        it("Should not render desc",()=>{
            const p = findByTestAtrr(wrapper,'Desc');
            expect(p.length).toBe(0);
        })
    });
});