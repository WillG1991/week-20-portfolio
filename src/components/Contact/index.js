function Contact() {
    return (
        <section class="contact-form">
            
            <h2 class="text-center">Contact Me</h2>
            <form id="contact-form text-center">
                <div class="p-2 bd-highlight">
                    <label htmlFor="name"><h3>Name:</h3></label>
                    <input type="text" name="name" />
                </div>
                <div>
                    <label htmlFor="email"><h3>Email:</h3></label>
                    <input type="text" name="email" />
                </div>
                <div>
                <label htmlFor="message"><h3>Message:</h3></label>
                    <textarea name="message" row="5" />
                </div>
                <button class="btn btn-outline-info" type="submit"><h3>Submit</h3></button>
            </form>
        </section>
    )
}

export default Contact;