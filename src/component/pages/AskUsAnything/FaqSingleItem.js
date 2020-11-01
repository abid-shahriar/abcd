// App.js
import React, {useState} from 'react';

import {Accordion} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [activeId,
    setActiveId] = useState('0');

  function toggleActive(id) {
    if (activeId === id) {
      setActiveId(null);
    } else {
      setActiveId(id);
    }
  }

  return (
    <div id="FaqSingle">

      <Accordion className='acc' defaultActiveKey={activeId}>

        <div
          className={activeId === '0'
          ? 'panel-wrap active-panel'
          : 'panel-wrap'}>
          <div className="panel-header">
            <div className="circle"></div>
            <h4>Are these online courses for me?</h4>
            <Accordion.Toggle
              onClick={() => toggleActive('0')}
              className="panel-toggle"
              variant="link"
              eventKey="0">

              <div className="active-icon">

                <div className="bar one"></div>
                <div className="bar two"></div>
              </div>
            </Accordion.Toggle>
          </div>

          <Accordion.Collapse eventKey="0">
            <div className="panel-body">The majority of our students either work, or want to
              work, in the creative industries. Typical job titles are designers,
              illustrators, marketers, photographers, product managers, developers and many
              more.</div>
          </Accordion.Collapse>
        </div>

        <div
          className={activeId === '1'
          ? 'panel-wrap active-panel'
          : 'panel-wrap'}>
          <div className="panel-header">
            <div className="circle"></div>
            <h4>
              Do you offer any student discounts?</h4>
            <Accordion.Toggle
              onClick={() => toggleActive('1')}
              className="panel-toggle"
              variant="link"
              eventKey="1">

              <div className="active-icon">

                <div className="bar one"></div>
                <div className="bar two"></div>
              </div>
            </Accordion.Toggle>
          </div>

          <Accordion.Collapse eventKey="1">
            <div className="panel-body">The majority of our students either work, or want to
              work, in the creative industries. Typical job titles are designers,
              illustrators, marketers, photographers, product managers, developers and many
              more.</div>
          </Accordion.Collapse>
        </div>

        <div
          className={activeId === '2'
          ? 'panel-wrap active-panel'
          : 'panel-wrap'}>
          <div className="panel-header">
            <div className="circle"></div>
            <h4>
              I know I'm gonna get stuck at some point. What do I do if I get stuck?</h4>
            <Accordion.Toggle
              onClick={() => toggleActive('2')}
              className="panel-toggle"
              variant="link"
              eventKey="2">

              <div className="active-icon">

                <div className="bar one"></div>
                <div className="bar two"></div>
              </div>
            </Accordion.Toggle>
          </div>

          <Accordion.Collapse eventKey="2">
            <div className="panel-body">The majority of our students either work, or want to
              work, in the creative industries. Typical job titles are designers,
              illustrators, marketers, photographers, product managers, developers and many
              more.</div>
          </Accordion.Collapse>
        </div>

        <div
          className={activeId === '3'
          ? 'panel-wrap active-panel'
          : 'panel-wrap'}>
          <div className="panel-header">
            <div className="circle"></div>
            <h4>
              How much time will I have to commit each week?</h4>
            <Accordion.Toggle
              onClick={() => toggleActive('3')}
              className="panel-toggle"
              variant="link"
              eventKey="3">

              <div className="active-icon">

                <div className="bar one"></div>
                <div className="bar two"></div>
              </div>
            </Accordion.Toggle>
          </div>

          <Accordion.Collapse eventKey="3">
            <div className="panel-body">The majority of our students either work, or want to work, in the creative industries. Typical job titles are designers, illustrators, marketers, photographers, product managers, developers and many more.</div>
          </Accordion.Collapse>
        </div>

      </Accordion>

    </div>
  );
}

export default App;