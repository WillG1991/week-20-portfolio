function Contact() {
  return (
    <section class="contact-form ">
      <h2 class="text-center varela-font">Contact Me</h2>
      <form id="contact-form  ">
        <div class="borderBoxContact">
          <div class="p-2 bd-highlight d-flex justify-content-center">
            <label htmlFor="name">
              <h4>Name:</h4>
            </label>
            <input type="text" name="name" />
          </div>
          <div class="p-2 bd-highlight d-flex justify-content-center">
            <label htmlFor="email">
              <h4>Email:</h4>
            </label>
            <input type="text" name="email" />
          </div>
          <div class="p-2 bd-highlight d-flex justify-content-center">
            <label htmlFor="message">
              <h4>Message:</h4>
            </label>
            <textarea name="message" row="5" />
          </div>
          <button
            class="btn btn-outline-info justify-content-center"
            type="submit"
          >
            <h3>Submit</h3>
          </button>
        </div>
      </form>
    </section>
  );
}

export default Contact;
