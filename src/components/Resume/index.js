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
                <a target="_blank" href="https://drive.google.com/file/d/11wPgvuIJAW4KDKZhj8WzUMHuSoPlzlLP/view?usp=sharing">
                  {" "}
                  <h3> Feel free to view my resume here!</h3>
                </a>
                {/* <p></p>or download a pdf{""}
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
