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
        <p className="section_description_yoga">“Yoga is the perfect way to unite body, mind, and spirit.” – Amitabh Bachchan.</p>
        <button className="section_button_yoga">Start Yoga Classes</button>
      </section>
      <section className="section_yoga part_section_yoga">
          <h2 className="section_title_yoga">Here are the Top Benefits of yoga:</h2>
          <ul>
            <li>Yoga poses stretch and lengthen muscles, which can improve flexibility. This can make it easier to perform everyday tasks, such as reaching for objects on high shelves or getting up from a chair.</li>
            <li>It also helps to build strength and endurance. This is because they often require you to hold positions for a period of time, which can challenge your muscles.</li>
            <li>Yoga can help to reduce stress and anxiety by teaching you how to focus on your breath and the present moment. This can help to calm the mind and body.</li>
            <li>Yoga can help to improve sleep quality by relaxing the body and mind. This can make it easier to fall asleep and stay asleep throughout the night.</li>
            <li>Yoga can help to relieve pain in a variety of areas, including the back, neck, and shoulders. This is because yoga poses can help to stretch and strengthen muscles, which can reduce pain.</li>
          </ul>
      </section>
        <section className="section_yoga program_section_yoga">
          <h2 className="section_title_yoga">For 5-8 Years</h2>
          <div className="program_cards_row_yoga">
            <div className="program_card_yoga">
              <div className="divimg_yoga">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/a/ae/Bhujangasana_Yoga-Asana_Nina-Mel.jpg" alt="img"/>
                  <h3>Bhujangasana</h3>
                  <br /> Nourishes the brain by increasing blood flow to it.Strengthens the arms and legs.Keeps the spine flexible, ensuring participation in a wide range of physical activities.<br />
              </div>
            </div>

            <div className="program_card_yoga">
              <div className="divimg_yoga">
                  <img src="https://www.arogyayogaschool.com/blog/wp-content/uploads/2017/04/Sukhasana-Help-Reduce-Your-Blood-Pressure.jpg" alt="img"/>
                  <h3>Sukhasana</h3>
                  <br />Tones the arms and leg muscles.Helps improve balance in the body.Increases stamina.<br />
              </div>
            </div>

            <div className="program_card_yoga">
              <div className="divimg_yoga">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTp3qxW2I1h596YXYufrrSq9ezY9x-sZJ145KjrDqY&s" alt="img" />
                  <h3>Adho mukha svanasana</h3>
                  <br />Tones the arms and legs, Children are able to enjoy physical activities.Increases concentration power and focus, certainly a great help with homework. <br />
              </div>
            </div>

          </div>
          <div className="program_cards_row_yoga">
            <div className="program_card_yoga">
              <div className="divimg_yoga">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHgWsD-YjJ4oGN6iiK4GFy2EVnWisJdyn7aLe5HiGsFg&s" alt="img" />
                  <h3>Gomukhasana</h3>
                  <br />Strengthens the back muscles. This increases flexibility during play. Helps with posture at the study table. Improves memory.Relaxes the nervous system. This helps overcome issues like stage fright. <br />
              </div>
            </div>

            <div className="program_card_yoga">
              <div className="divimg_yoga">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5TAiCFYYXEZF7ED-TmusxDIdMVWEaM1-IXVAiW7vTyoYeTH-ROifWXv_wLbLEKRvECQ4&usqp=CAU" alt="img" />
                  <h3>Trikonasana</h3>
                  <br/>Strengthens the arm and leg muscles.Helps relieve stress and fatigue. <br />
              </div>
            </div>

            <div className="program_card_yoga">
              <div className="divimg_yoga">
                  <img src="https://www.artofliving.org/sites/www.artofliving.org/files/styles/original_image/public/wysiwyg_imageupload/Shavasana%20%28Corpse%20pose%29%20yoga%20asana%20%20for%20kids%20and%20childrens.jpg.webp?itok=zdKXY-39" alt="img" />
                  <h3>Shavasana (Corpse Pose)</h3>
                  <br /> Rejuvenates the body. Releases stress and fatigue.Stimulates blood circulation, energizing the body.<br />
              </div>
            </div>
          </div>
          {/* Repeat the above rows for additional rows */}
        </section>
        <section className="section_yoga program_section_yoga">
          <h2 className="section_title_yoga">Above 8 years</h2>
          <div className="program_cards_row_yoga">
            <div className="program_card_yoga">
              <div className="divimg_yoga">
                  <img src="https://www.artofliving.org/sites/www.artofliving.org/files/styles/original_image/public/wysiwyg_imageupload/Sarvangasana%20%28Shoulder%20Stand%29%20Yoga%20Pose%20%20for%20kids%20and%20childrens.jpg.webp?itok=lB64FnCU" alt="img"/>
                  <h3>Sarvangasana (Shoulder Stand pose)</h3>
                  <br /> Nourishes the brain by increasing blood flow to it.Strengthens the arms and legs.Keeps the spine flexible, ensuring participation in a wide range of physical activities.<br />
              </div>
            </div>

            <div className="program_card_yoga">
              <div className="divimg_yoga">
                  <img src="https://www.artofliving.org/sites/www.artofliving.org/files/styles/original_image/public/wysiwyg_imageupload/Veerbhadrasana%20%28Warrior%20Yoga%20pose%29%20%20for%20kids%20and%20childrens.jpg.webp?itok=NicZsQV-" alt="img"/>
                  <h3>Virabhadrasana (Warrior Pose)</h3>
                  <br />Tones the arms and leg muscles.Helps improve balance in the body.Increases stamina.<br />
              </div>
            </div>

            <div className="program_card_yoga">
              <div className="divimg_yoga">
                  <img src="https://www.artofliving.org/sites/www.artofliving.org/files/styles/original_image/public/wysiwyg_imageupload/Vrikshasana%20%28Tree%20Pose%29%20for%20kids%20and%20childrens.jpg.webp?itok=XeUUTMVG" alt="img" />
                  <h3>Vrikshasana (Tree Pose)</h3>
                  <br />Tones the arms and legs, Children are able to enjoy physical activities.Increases concentration power and focus, certainly a great help with homework. <br />
              </div>
            </div>

          </div>
          <div className="program_cards_row_yoga">
            <div className="program_card_yoga">
              <div className="divimg_yoga">
                  <img src="https://www.artofliving.org/sites/www.artofliving.org/files/styles/original_image/public/wysiwyg_imageupload/Surya%20Namaskar%20%28Sun%20Salutation%29%20Yoga%20pose%20for%20kids%20and%20childrens.jpg.webp?itok=iWhst41e" alt="img" />
                  <h3>Surya Namaskar (Sun Salutation)</h3>
                  <br />Strengthens the back muscles. This increases flexibility during play. Helps with posture at the study table. Improves memory.Relaxes the nervous system. This helps overcome issues like stage fright. <br />
              </div>
            </div>

            <div className="program_card_yoga">
              <div className="divimg_yoga">
                  <img src="https://www.artofliving.org/sites/www.artofliving.org/files/styles/original_image/public/wysiwyg_imageupload/Dhanurasana%20%28Bow%20Yoga%20Pose%29%20for%20kids%20and%20childrens.jpg.webp?itok=LixsLz_d" alt="img" />
                  <h3>Dhanurasana (Bow Pose)</h3>
                  <br/>Strengthens the arm and leg muscles.Helps relieve stress and fatigue. <br />
              </div>
            </div>

            <div className="program_card_yoga">
              <div className="divimg_yoga">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUaaWfbzA0adDVCUeWMfqtY1WugYsPvPFgk_glmEQ9Jg&s" alt="img" />
                  <h3>Virasana</h3>
                  <br /> Rejuvenates the body. Releases stress and fatigue.Stimulates blood circulation, energizing the body.<br />
              </div>
            </div>
          </div>
          {/* Repeat the above rows for additional rows */}
        </section>
      </div>
    </div>
  )
}

export default Yoga