import React from "react";
import resume from "../../assets/img/resume.jpg"


function Resume() {
  return (
    <div>
      <section>
        <h2 id="about" class="text-center varela-font">
          Resume
        </h2>
        <div className="my-2">
          <div class="container text-center" className="borderBoxResume">
            <p class="aboutInfo" className="aboutInfo">
              {" "}
              <h4 class="text-white-50">
                <a target="_blank" href="https://drive.google.com/file/d/1fWYK1433mtOgu3g9hPRPHRZ-tGwPJjRq/view?usp=share_link">
                  {" "}
                  <h3> Feel free to view my resume by clicking the image below! <div class="centeredText"><img className="selfie" src={resume} alt="resume" /></div></h3>
                  
                </a>
                {/* <p>or download a pdf{""}</p>
                <a href="../../../public/Resume.pdf"> here!</a> */}
              </h4>{" "}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Resume;
