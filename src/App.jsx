import React,{useState} from "react";
import './styles/main.css'
import { BiChevronDownCircle } from "react-icons/bi";

const Accordion = ({ title, children, icon }) => {
  const [isOpen, setOpen] = useState();
  return (
    <div className="accordion-wrapper">
      <div className={`accordion-title ${isOpen ? "open" : ""}`} onClick={() => setOpen(!isOpen)}>{title}{icon}</div>
      <div className={`accordion-item ${!isOpen ? "collapsed" : ""}`} >
        <div className="accordion-content">{children}</div>
      </div>
    </div>
  );
};
const App = () => (
    <>
    <div className="Super">
    <h1 className="header">Superhero Questions</h1>
  <div className="wrapper">
    <Accordion title="What superhero lives in Gotham" icon={<BiChevronDownCircle/>}>
      <p>The Batman</p>
    </Accordion>
    <Accordion title="What superhero lives in Metropolis" icon={<BiChevronDownCircle/>}>
      <p>Superman</p>
    </Accordion>
    <Accordion title="What superhero lives in Themyscira" icon={<BiChevronDownCircle/>}>
      <p>Wonder Woman</p>
    </Accordion>
    <Accordion title="What superhero lives Central city" icon={<BiChevronDownCircle/>}>
      <p>The Flash</p>
    </Accordion>
    <Accordion title="What superhero lives Atlantis" icon={<BiChevronDownCircle/>}>
      <p>Aquaman</p>
    </Accordion>
  </div>
  </div>
  </>
);

export default App