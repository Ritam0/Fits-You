import React from 'react'
import Navbar from "./Navbar";
import "./Gym.css";
import 'bootstrap/dist/css/bootstrap.css';
const Gym = () => {
  return (
      <div className='Gym_bg'>
      <Navbar/>
      <div className="container_Gym">
      <section className="section_Gym basic">
        <h1 className="section_title_Gym">Gym Tranning</h1>
        <h3 className="section_description_Gym">How’d you like to go on a long romantic walk on the treadmill?</h3>
        <button className="section_button_Gym">Start Your Training Today</button>
      </section>
        <section className="section_Gym"></section>
        <section className="section_Gym"></section>
        <section className="section_Gym music_section_Gym">
          <h2 className="section_title_Gym">Music</h2>
          {/* Music content */}
        </section>
        <section className="section_Gym program_section_Gym">
          <h2 className="section_title_Gym">Programs</h2>
          <div className="program_cards_row_Gym">
            <div className="program_card_Gym"></div>
            <div className="program_card_Gym"></div>
            <div className="program_card_Gym"></div>
          </div>
          <div className="program_cards_row_Gym">
            <div className="program_card_Gym"></div>
            <div className="program_card_Gym"></div>
            <div className="program_card_Gym"></div>
          </div>
          {/* Repeat the above rows for additional rows */}
        </section>
        <section className="section_Gym mentor_section_Gym">
          <h2 className="section_title_Gym">Mentors</h2>
          <div className="mentor_cards_row_Gym">
            <div className="mentor_card_Gym"></div>
            <div className="mentor_card_Gym"></div>
            <div className="mentor_card_Gym"></div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Gym