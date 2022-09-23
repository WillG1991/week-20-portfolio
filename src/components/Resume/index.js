import React from "react";

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
               <b> Feel free to view my resume </b>
                <a href="https://drive.google.com/file/d/11wPgvuIJAW4KDKZhj8WzUMHuSoPlzlLP/view?usp=sharing">
                  {" "}
                  <u>here </u>
                </a>
                <p></p>or download a pdf{" "}
                <a href="https://startbootstrap.com/theme/grayscale/"> here!</a>
              </h4>{" "}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Resume;
