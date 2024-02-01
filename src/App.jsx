import './App.css';
import { useState } from 'react';
import Tablist from './components/Tablist';
import PracticeTabs from './components/PracticeTabs';
import { EXAMPLES } from './data/initialData';


function App() {
  const [selectedTopic, setSelectedTopic] = useState();
  const [selectedTabButton, setSelectedTabButton] = useState('Hi this is the tab component')

  function handleSelect(selectedButton){
    setSelectedTopic(selectedButton)
    console.log(selectedButton);
    }

  function handleButtonPress(selectedTabButton){
   setSelectedTabButton(selectedTabButton)
   console.log(selectedTabButton);
  }


  return (
    <div className="App">
    <section className="tab">
    <h2>Tabs</h2>
    <menu>
    <Tablist onSelect={()=>handleSelect('components')}>Components</Tablist>
    <Tablist onSelect={()=>handleSelect('jsx')}>JSX</Tablist>
    <Tablist onSelect={()=>handleSelect('props')}>Props</Tablist>
    <Tablist onSelect={()=>handleSelect('state')}>State</Tablist>
    </menu>
    <div>
      {!selectedTopic ? (<h1>Please Select a Tab or Topic</h1>)
      :
      (<div>
      <h2>{EXAMPLES[selectedTopic].title}</h2>
      <p>{EXAMPLES[selectedTopic].description}</p>
      <pre>
        <code>{EXAMPLES[selectedTopic].code}</code>
      </pre>
      </div>
  )}
    </div>
    </section>

    <section>
      <menu className='pt'>
        <PracticeTabs onSelectedTabButton={()=>handleButtonPress('tab1')} >Tab1</PracticeTabs>
        <PracticeTabs onSelectedTabButton={()=>handleButtonPress('tab2')}>Tab2</PracticeTabs>
        <PracticeTabs onSelectedTabButton={()=>handleButtonPress('tab3')}>Tab3</PracticeTabs>
        <PracticeTabs onSelectedTabButton={()=>handleButtonPress('tab4')}>Tab4</PracticeTabs>
      </menu>
      {selectedTabButton}
    </section>

    </div>
  );
}



export default App;
