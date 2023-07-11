import React from 'react'
import Navbar from "./Navbar";
import "./yoga.css";
import 'bootstrap/dist/css/bootstrap.css';
const Yoga = () => {
  return (
      <div className='yoga_bg'>
      <Navbar/>
      <div className="container_yoga">
      <section className="section_yoga basic">
        <h2 className="section_title_yoga">Basic Yoga Tutorital</h2>
        <p className="section_description_yoga">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin dui eu lorem aliquam volutpat.</p>
        <button className="section_button_yoga">Start Yoga Classes Today</button>
      </section>
        <section className="section_yoga"></section>
        <section className="section_yoga"></section>
        <section className="section_yoga music_section_yoga">
          <h2 className="section_title_yoga">Music</h2>
          {/* Music content */}
        </section>
        <section className="section_yoga program_section_yoga">
          <h2 className="section_title_yoga">Programs</h2>
          <div className="program_cards_row_yoga">
            <div className="program_card_yoga"></div>
            <div className="program_card_yoga"></div>
            <div className="program_card_yoga"></div>
          </div>
          <div className="program_cards_row_yoga">
            <div className="program_card_yoga"></div>
            <div className="program_card_yoga"></div>
            <div className="program_card_yoga"></div>
          </div>
          {/* Repeat the above rows for additional rows */}
        </section>
        <section className="section_yoga mentor_section_yoga">
          <h2 className="section_title_yoga">Mentors</h2>
          <div className="mentor_cards_row_yoga">
            <div className="mentor_card_yoga"></div>
            <div className="mentor_card_yoga"></div>
            <div className="mentor_card_yoga"></div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Yoga