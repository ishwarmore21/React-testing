import './App.scss';
// import { Counter } from './Components/Counter';
import { Header } from './Components/Header';
import Headline from './Components/HeadLine';

function App() {
  return (
    <div className="App">
     <Header/>
     {/* <Counter/> */}
     <section className='main'>
       <Headline header='Posts' desc='Click the button'/>
     </section>
    </div>
  );
}

export default App;
