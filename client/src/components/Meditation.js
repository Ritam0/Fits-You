import React from 'react'
import Navbar from "./Navbar";
import 'bootstrap/dist/css/bootstrap.css';
import './Meditation.css';
const Meditation = () => {
  return (
    <div className='Med_bg'>
      <Navbar/>
      <div className="container_med">
      <section className="section_med basic_meditation_med">
        <h2 className="section_title_med">Basic Meditation</h2>
        <p className="section_description_med">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin dui eu lorem aliquam volutpat.</p>
        <button className="section_button_med">Start Meditation</button>
      </section>
        <section className="section_med"></section>
        <section className="section_med"></section>
        <section className="section_med music_section_med">
          <h2 className="section_title_med">Music</h2>
          {/* Music content */}
        </section>
        <section className="section_med program_section_med">
          <h2 className="section_title_med">Programs</h2>
          <div className="program_cards_row_med">
            <div className="program_card_med"></div>
            <div className="program_card_med"></div>
            <div className="program_card_med"></div>
          </div>
          <div className="program_cards_row_med">
            <div className="program_card_med"></div>
            <div className="program_card_med"></div>
            <div className="program_card_med"></div>
          </div>
          {/* Repeat the above rows for additional rows */}
        </section>
        <section className="section_med mentor_section_med">
          <h2 className="section_title_med">Mentors</h2>
          <div className="mentor_cards_row_med">
            <div className="mentor_card_med"></div>
            <div className="mentor_card_med"></div>
            <div className="mentor_card_med"></div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Meditation
