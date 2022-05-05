import './App.scss';
// import { Counter } from './Components/Counter';
import { Header } from './Components/Header';
import Headline from './Components/HeadLine';

function App() {
  const tempArr = [{
    first : "joe",
    last : "don",
    email : "joe_don@gmail.com",
    age : 16,
    onlineStatus : true
  }];

  return (
    <div className="App">
     <Header/>
     {/* <Counter/> */}
     <section className='main'>
       <Headline header='Posts' desc='Click the button' tempArr={tempArr} />
     </section>
    </div>
  );
}

export default App;
