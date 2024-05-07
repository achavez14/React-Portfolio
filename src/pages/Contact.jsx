const Contact = () => {
  return (
    <section>
      <h2>Contact</h2>
      <form>
        <label>Name</label>
        <input type="text" placeholder="Your Name" />

        <label>Email</label>
        <input type="email" placeholder="Your Email" />

        <label>Message</label>
        <textarea placeholder="Your Message" rows="4"></textarea>

        <button type="submit">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;