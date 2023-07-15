import React from 'react'
import Navbar from "./Navbar";
import 'bootstrap/dist/css/bootstrap.css';
import './Meditation.css';
import meditation from './img/meditation.jpg'
import music from './img/medmusic.mp3'
const Meditation = () => {
  return (
    <div className='Med_bg'>
      <Navbar/>
      <div className="container_med">
      <section className="section_med_basic_meditation_med">
        <h2 className="section_title_med">Basic Meditation</h2>
        <p className="section_description_med">"Meditation should not be a torture. It must be fun! Start small. 
          Five to ten minutes a day is a great start!" <span className='sandeep'>- Sandeep Maheshwari
        </span></p>
        <a href="https://rzp.io/l/nzskN8j" target='_blank'><button className="section_button_med">Start Meditation - Paid Training Program</button></a>
      </section>
      

      
        <section className="section_med music_section_med">
          <h2 className="section_title_med">Music</h2>
          <p>Play the Music and Start Meditation</p>
          <audio controls>
          <source src={music} type="audio/mpeg" />
        Your browser does not support the audio element.
          </audio>
          {/* Benifits */}
        </section>


        <section className="section_med music_section_med">
          <h2 className="section_title_med">Here are the Top 10 Benefits of the Inner Sound Meditation:</h2>
          <ul>
            <li>Increase in concentration/focus</li>
            <li>Increase in observation power</li>
            <li>Living in the present moment</li>
            <li>Getting lesser thoughts</li>
            <li>More control over anger</li>
            <li>Better understanding in relationships</li>
            <li>Decrease in attachments</li>
            <li>Increase in compassion and love</li>
            <li>Quitting of addictions like smoking and drinking</li>
            <li>Increase in energy</li>
          </ul>
          {/* Music content */}
        </section>


        <section className="section_med program_section_med">
          <h2 className="section_title_med">Where and How? - Process and Place for Meditate</h2>
          <div className="program_cards_row_med">
            <div className="program_card_med">
              <div className="divimg_med">
                  <img src="https://images.pexels.com/photos/4151865/pexels-photo-4151865.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="img" />
                  <h3>Meditation in Your room</h3>
                  <p>Take a Comfortable Seat in any
                   <br /> Place in Your Home and 
                     <br />Start Meditate</p>
              </div>
            </div>

            <div className="program_card_med">
              <div className="divimg_med">
                  <img src="https://images.pexels.com/photos/3760611/pexels-photo-3760611.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="img" />
                  <h3>Meditation in Office</h3>
                  <p>Take Seat in any Empty Place
                    <br /> of Your Office and Start 
                    <br />Meditation for 15-30 munites</p>
              </div>
            </div>

            <div className="program_card_med">
              <div className="divimg_med">
                  <img src="https://images.pexels.com/photos/9004294/pexels-photo-9004294.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="img" />
                  <h3>Meditation in Park</h3>
                  <p>In the Morning When Maximum World <br /> are in Sleep You can go to a Park <br /> and Start to Absorb the Sound of Nature</p>
              </div>
            </div>

          </div>
          <div className="program_cards_row_med">
            <div className="program_card_med">
              <div className="divimg_med">
                  <img src="https://images.pexels.com/photos/10895295/pexels-photo-10895295.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="img" />
                  <h3>Sound of Silence</h3>
                  <p>Seat any where in Silence And <br />Try to Absorb Sound of Silence <br /> to Know More about Sound of Silence <br /><a href="https://youtu.be/dD_fk9ELJ24" target='_blank'>click here</a></p>
              </div>
            </div>

            <div className="program_card_med">
              <div className="divimg_med">
                  <img src="https://images.pexels.com/photos/8353574/pexels-photo-8353574.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="img" />
                  <h3>Meditation with Sound of Water</h3>
                  <p>Seat beside any <br />River or Sea and  <br />try to Absorb Clear <br />sound of Water</p>
              </div>
            </div>

            <div className="program_card_med">
              <div className="divimg_med">
                  <img src="https://images.pexels.com/photos/5385936/pexels-photo-5385936.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="img" />
                  <h3>Meditate with Nature</h3>
                  <p> Seat in Nature Where <br />There are no Crowd no Mechine no vechile  <br /> and Start to Absorb the <br />Sound of Nature , Silence and Your Heart</p>
              </div>
            </div>

          </div>
          {/* Repeat the above rows for additional rows */}
        </section>




        <section className="section_med book_section_med">
      <h2 className="section_title_med">Books To Grow Your Mind's Energy</h2>
      <div className="book_cards_row_med">
        <div className="book_card_med">
          <img src="https://smritibookstall.com/uploads/media/2023/THINK_LIKE_MONK.jpg" alt="Book 1" />
          <h3 className="book_title_med">Think Like A Monk - Jay Shetty</h3>
          <a href="https://www.amazon.in/Think-Like-Monk-Jay-Shetty/dp/0008386595/ref=sr_1_3?crid=16N6B2BSMARGM&keywords=Think+like+a+Monk&qid=1689254950&sprefix=think+like+a+monk%2Caps%2C498&sr=8-3" target='_blank'>Best Buy Link</a>
        </div>
        <div className="book_card_med">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdwDFCISIVg4ZJ5AuZdgtnLfhK7N3WCPtUy75x484wlpZz-XJ-MErvCgfEFYXECLfN1CM&usqp=CAU" alt="Book 2" />
          <h3 className="book_title_med">Bhagavad Gita As It Is</h3>
          <a href="https://www.amazon.in/Bhagvad-gita-as-english-new/dp/9384564192/ref=sr_1_3?crid=21P69ENNGYUHV&keywords=bhagavad+gita+as+it+is&qid=1689255033&sprefix=bhagavad+gita+as+%2Caps%2C1007&sr=8-3" target='_blank'>Best Buy Link</a>
        </div>
        <div className="book_card_med">
          <img src="https://5.imimg.com/data5/SELLER/Default/2023/3/KZ/GT/KE/70587442/energize-your-mind.jpg" alt="Book 3" />
          <h3 className="book_title_med">Energize Your Mind - Gour Gopal Das</h3>
          <a href="https://www.amazon.in/Energize-Your-Mind-Mastering-Thoughts/dp/0143442287/ref=sr_1_2?crid=32ZP1N3NJSUB2&keywords=energize+your+mind+gaur+gopal+das&qid=1689255102&sprefix=energize+your+min%2Caps%2C1460&sr=8-2" target='_blank'>Best Buy Link</a>
        </div>
      </div>
    </section>


      </div>
    </div>
  )
}

export default Meditation
