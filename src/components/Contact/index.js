function Contact() {
    return (
        <section>
            <h2>Contact Me</h2>
            <form id="contact-form">
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="text" name="email" />
                </div>
                <div>
                <label htmlFor="message">Message:</label>
                    <textarea name="message" row="5" />
                </div>
                <button type="submit">Submit</button>
            </form>
        </section>
    )
}

export default Contact;