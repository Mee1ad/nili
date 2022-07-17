<template>
  <div class="parent">
    <PageHeader title="Contact Us"/>
    <div class="row content">
      <div class="contact">
        <h3 class="contact-heading">I’m available for worldwide orders.</h3>
        <p>Qualamy nisl sodales sit amet sapien id, placerat sodales orciter.
          Vivamus nec magna rhoncus felis, faucibus printy.</p>
        <p>
          <b>Phone:</b>
          +1 650-444-0000
        </p>
        <p>
          <b>Email:</b>
          photo@annie.com
        </p>
        <p>
          <b>Address:</b>
          350 North First Street, San Jose, CA 95112, US.
        </p>
      </div>
      <div class="contact-form">
        <h3 class="contact-heading">Contact Form</h3>
        <p>Interested to work wiht us?</p>
        <form method="post" action="mail.php">
          <input class="input" type="text" placeholder="Your Email"/>
          <input class="input" type="text" placeholder="Your Number"/>
          <input class="input" type="text" placeholder="Subject"/>
          <textarea class="input" name="message" placeholder="Your Feedback" col="30" rows="7" spellcheck="false"/>
          <button type="submit" class="submit">Send Message</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import PageHeader from "@/components/PgaeHeader";

export default {
  name: "ContactPage",
  components: {PageHeader}
}
</script>

<style scoped>

.parent {
  margin: 0 15px 0 15px;
}

.content {
  margin-top: 100px;
}

.contact {
  max-width: 45%;
  padding: 0 10px;
}
.contact-heading {
  color: #101010;
  font-family: 'Josefin Sans', sans-serif;
  font-weight: 700;
  font-size: 20px;
}

.contact-form {
  max-width: 49%;
}

.input {
  height: auto;
  background-color: #f7f7f7;
  color: #777;
  font-size: 15px;
  line-height: 1.5em;
  font-weight: 400;
  padding: 10px 15px;
  border: none;
  outline: none;
  margin-bottom: 15px;
  font-family: 'Josefin Sans', sans-serif;
  width: 100%;
}
</style>