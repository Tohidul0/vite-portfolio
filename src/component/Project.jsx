import React from 'react';

function Project(props) {
    return (
        <div className="project Education" id="Project">

                <h1 className="ED">My Project</h1>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    <div className="col ">
                        <div className="card sizze">
                            <img src="/src/assets/Images/project/Screenshot (334).png" class="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">E-Commerce</h5>
                                <p className="card-text">Step into the Panda E-Commerce world, a charming website I've crafted using HTML, CSS, and Bootstrap. Imagine it as a carefully planned space where pictures and information are organized neatly. There are seven lively slideshows that showcase different aspects of adorable pandas. Picture these slideshows like slides in a storybook, each telling a little tale about these delightful creatures.</p>
                                <a className="acl" href="https://tohidul0.github.io/Panda-E-commerce/">Live Link</a>
                
                            </div>
                        </div>
                    </div>

                    <div className="col  ">
                        <div className="card sizze">
                            {/* <img src="../assets/Images/project/Screenshot (344).png" class="card-img-top" alt="..."/> */}
                            <img src='/src/assets/Images/project/Screenshot (344).png'></img>
                            <div className="card-body">
                                <h5 className="card-title">A Meal DB Project</h5>
                                 <p className="card-text">Explore the culinary world with MealDB, a dynamic web project crafted with JavaScript, Bootstrap, HTML,
                                    and CSS. Easily search for your favorite meals by name and discover a visual feast of delicious options
                                    sourced from our API. Dive deeper into each dish by accessing its detailed recipe, making MealDB the
                                    ultimate gateway to a delightful dining experience.</p>
                                <a className="acl" href="https://tohidul0.github.io/MealDb-By-API-JS/">Live Link</a>
                            </div>
                    </div>
                </div>

            <div className="col">
              <div className="card sizze">
                <img src="/src/assets/Images/project/Screenshot (340).png" class="card-img-top" alt="..."></img>
                <div className="card-body">
                  <h5 className="card-title">Money Calculation</h5>
                  <p className="card-text">In the realm of personal finance, I've crafted a user-friendly money calculation project leveraging the trio of web development technologies: HTML, CSS, and JavaScript, with a touch of DOM manipulation. Picture a virtual financial assistant where users input their income and expenses seamlessly through a well-designed HTML form. The aesthetics of the project are enhanced with CSS styling, ensuring a visually pleasing and intuitive user interface.</p>
                
                  <a className="acl" href="https://tohidul0.github.io/Money-calculation-js/">Live Link</a>
                </div>
              </div>
            </div>


            
            <div className="col">
              <div className="card sizze">
                <img src="/src/assets/Images/project/Screenshot (336).png" class="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">Convention Center</h5>
                  <p className="card-text">Embark on a captivating digital exploration of a cutting-edge convention center, seamlessly brought to life through a meticulously crafted web page that marries the artistry of HTML, CSS, and the finesse of Bootstrap's grid system. Envision a virtual realm where simplicity dances in tandem with sophistication, unveiling an immersive experience akin to a well-choreographed performance</p>
                
                  <a className="acl" href="https://tohidul0.github.io/Convention-Centre/">Live Link</a>
                </div>
              </div>
            </div>
            
            
            
            
          </div>
    </div>
    );
}

export default Project;