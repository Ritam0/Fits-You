import React from 'react'
import Navbar from "./Navbar";
import "./Nutration.css";
import 'bootstrap/dist/css/bootstrap.css';
const Nutrition = () => {
  return (
      <div className='Nutrition_bg'>
      <Navbar/>
      <div className="container_Nutrition">
      <section className="section_Nutrition basic">
        <h2 className="section_title_Nutrition">Basic Nutrition</h2>
        <h2 className="section_description_Nutrition">“ The first wealth is health. “ – Ralph Waldo Emerson.</h2>
        <button className="section_button_Nutrition">Start Nutrition</button>
      </section>
        <section className="section_Nutrition"></section>
        <section className="section_Nutrition"></section>
        <section className="section_Nutrition music_section_Nutrition">
          <h2 className="section_title_Nutrition">Music</h2>
          {/* Music content */}
        </section>
        <section className="section_Nutrition program_section_Nutrition">
          <h2 className="section_title_Nutrition">Programs</h2>
          <div className="program_cards_row_Nutrition">
            <div className="program_card_Nutrition"></div>
            <div className="program_card_Nutrition"></div>
            <div className="program_card_Nutrition"></div>
          </div>
          <div className="program_cards_row_Nutrition">
            <div className="program_card_Nutrition"></div>
            <div className="program_card_Nutrition"></div>
            <div className="program_card_Nutrition"></div>
          </div>
          {/* Repeat the above rows for additional rows */}
        </section>
        <section className="section_Nutrition mentor_section_Nutrition">
          <h2 className="section_title_Nutrition">Mentors</h2>
          <div className="mentor_cards_row_Nutrition">
            <div className="mentor_card_Nutrition"></div>
            <div className="mentor_card_Nutrition"></div>
            <div className="mentor_card_Nutrition"></div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Nutrition