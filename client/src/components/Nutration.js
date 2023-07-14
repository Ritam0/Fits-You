import React from 'react'
import Navbar from "./Navbar";
import "./Nutration.css";
import 'bootstrap/dist/css/bootstrap.css';
const Nutrition = () => {
  return (
      <div className='Nutrition_bg'> 
      <Navbar/>
      <div className="container_Nutrition">
      <section className="section_Nutrition1 basic">
        <h1 className="section_title_Nutrition">Basic Nutrition</h1>
        <h2 className="section_description_Nutrition">
"Let food be thy medicine and medicine be thy food."  - Hippocrates.</h2>
<a href="https://rzp.io/l/nzskN8j" target='_blank'><button className="section_button_med">Get Your Diet Plan - Paid Program</button></a>
      </section>

        <section className="section_Nutrition2 music_section_Nutrition">
          <h2 className="section_title_Nutrition">Why Nutration is Important?</h2>
              <ul>
                <li>Essential Nutrients: Nutrition provides our bodies with essential nutrients like carbohydrates, proteins, fats, vitamins, and minerals, which are necessary for proper bodily functions.</li>
                <li>
Growth and Development: Adequate nutrition supports growth, development, and the formation of healthy bones, muscles, and organs, particularly in children and adolescents.</li>
                <li>Energy and Metabolism: Proper nutrition provides the energy needed for daily activities and bodily functions, ensuring optimal physical and mental performance.</li>
                <li>Weight Management: Good nutrition plays a crucial role in maintaining a healthy weight and preventing obesity by providing the right balance of calories and nutrients.</li>
                <li>Immune System Support: A well-balanced diet strengthens the immune system, reducing the risk of infections, illnesses, and chronic diseases.</li>
                <li>Disease Prevention: Proper nutrition helps prevent chronic diseases like heart disease, diabetes, certain cancers, and osteoporosis.</li>
                <li>Mental Well-being: Nutrition influences mental health, contributing to improved mood, cognitive function, and overall mental well-being.</li>
              </ul>
        </section>


        
        <section className="section_Nutrition3 program_section_Nutrition">
          <h2 className="section_title_med">Where and How? - Process and Place for Meditate</h2>
          <div className="program_cards_row_med">
            <div className="program_card_med">
              <div className="divimg_med">
                  <img src="https://images.pexels.com/photos/6210947/pexels-photo-6210947.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="img" />
                  <h3>Grilled Chicken Breast<br /> with Roasted Vegetables - NON VEG</h3>
                  <p>Grilled chicken breast marinated <br />with herbs and spices like <br />rosemary, thyme, and garlic.  <br />
Accompanied by a medley of roasted <br /> vegetables such as carrots, Brussels <br />sprouts,  and zucchini tossed in olive<br /> oil, salt, and pepper.
Optional: Drizzle <br />with balsamic glaze for added flavor.</p>
              </div>
            </div>

            <div className="program_card_med">
              <div className="divimg_med">
                  <img src="https://images.pexels.com/photos/7020330/pexels-photo-7020330.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="img" />
                  <h3>Baked Salmon with Quinoa<br /> and Steamed Broccoli - NON VEG</h3>
                  <p>Baked salmon fillet seasoned <br />with lemon juice, dill, and a <br />hint of olive oil.
Served with <br />cooked quinoa for a source of<br /> protein and fiber.
Steamed broccoli <br />florets on the side for<br /> added nutrients.</p>
              </div>
            </div>

            <div className="program_card_med">
              <div className="divimg_med">
                  <img src="https://images.pexels.com/photos/9980764/pexels-photo-9980764.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="img" />
                  <h3>Turkey Lettuce Wraps - NON VEG</h3>
                  <p>Ground turkey cooked with <br />garlic, ginger, soy sauce, <br />and a touch of honey.
Served in <br />crisp lettuce leaves and topped <br />with shredded carrots, chopped<br /> scallions, and sesame seeds.<br />
Optional: Add a spicy Sriracha or<br /> peanut sauce for extra flavor.</p>
              </div>
            </div>

          </div>
          <div className="program_cards_row_med">
            <div className="program_card_med">
              <div className="divimg_med">
                  <img src="https://images.pexels.com/photos/4611424/pexels-photo-4611424.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="img" />
                  <h3>Lentil Curry with Brown Rice - VEG</h3>
                  <p>Flavorful lentil curry made<br /> with a blend of spices, tomatoes,<br /> onions, and garlic.
Served with<br /> cooked brown rice for a wholesome<br /> and protein-rich meal.
Optional:<br /> Garnish with fresh cilantro and<br /> a squeeze of lemon juice.</p>
              </div>
            </div>

            <div className="program_card_med">
              <div className="divimg_med">
                  <img src="https://images.pexels.com/photos/13241736/pexels-photo-13241736.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="img" />
                  <h3>Caprese Salad with Quinoa - VEG</h3>
                  <p>Fresh mozzarella cheese, ripe <br />tomatoes, and basil leaves<br /> arranged on a bed of mixed <br />greens.Accompanied by cooked quinoa<br /> for added protein and fiber.
Drizzled <br />with a balsamic glaze or a<br /> light vinaigrette dressing.</p>
              </div>
            </div>

            <div className="program_card_med">
              <div className="divimg_med">
                  <img src="https://images.pexels.com/photos/764925/pexels-photo-764925.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="img" />
                  <h3>Vegetable Stir-Fry with Tofu - VEG</h3>
                  <p> Assortment of colorful vegetables<br /> like broccoli, bell peppers, <br />carrots, snap peas, and <br />mushrooms stir-fried in a light<br /> soy sauce or teriyaki sauce.<br />
Cubes of tofu added for<br /> plant-based protein.
Served over<br /> a bed of brown rice or noodles.</p>
              </div>
            </div>

          </div>
          {/* Repeat the above rows for additional rows */}
        </section>

              <section className="section_med section_Nutrition3 book_section_med">
            <h2 className="section_title_med">Healthy Diet Plans</h2>
            <div className="book_cards_row_med">
              <div className="book_card_med">
                <img src="https://images.pexels.com/photos/3872370/pexels-photo-3872370.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Book 1" />
                <h3 className="book_title_med">Diet Plan According to Ayurveda</h3>
                <a href="https://youtu.be/6ZUFT0CwU1w" target='_blank'>Watch in Details</a>
              </div>
              <div className="book_card_med">
                <img src="https://images.pexels.com/photos/4114114/pexels-photo-4114114.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Book 2" />
                <h3 className="book_title_med">Weight Loss Diet Plan</h3>
                <a href="https://youtu.be/JaMQfQK1_i8" target='_blank'>Watch in Details</a>
              </div>
              <div className="book_card_med">
                <img src="https://images.pexels.com/photos/6550823/pexels-photo-6550823.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                <h3 className="book_title_med">Weight Gain Diet Plan</h3>
                <a href="https://youtu.be/HNZ2wdFQzHk" target='_blank'>Watch in Details</a>
              </div>
            </div>
    </section>
      </div>
    </div>
  )
}

export default Nutrition