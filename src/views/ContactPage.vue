<template>
  <div class="parent">
    <PageHeader title="Contact Us"/>
    <div class="row content animated fadeInUp">
      <div class="contact">
        <h3 class="contact-heading">I’m available for worldwide orders.</h3>
        <br><br>
        <p>
          <b>Phone:</b>
          +98 911 834 5796
        </p>
        <p>
          <b>Email:</b>
          nilo.razaghi@gmail.com
        </p>
        <p>
          <b>Address:</b>
          Rasht, Gilan.
        </p>
      </div>
      <div class="contact-form">
        <h3 class="contact-heading">Contact Form</h3>
        <p>Interested to work wiht us?</p>
        <form method="post">
          <input class="input" type="text" placeholder="Your Email" v-model="email"/>
          <input class="input" type="text" placeholder="Your Number" v-model="number"/>
          <input class="input" type="text" placeholder="Subject" v-model="subject"/>
          <textarea class="input" name="message" v-model="message" placeholder="Your Feedback" col="30" rows="7" spellcheck="false"/>
          <button type="submit" class="submit" @click.prevent="sendFeedback()">Send Message</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import PageHeader from "@/components/PageHeader";
import axios from 'axios';

var md5 = require("md5");

export default {
  name: "ContactPage",
  components: {PageHeader},
  data: function() {
    return {
      email: "",
      number: "",
      subject: "",
      message: "",
      token: "",
      salt: "%^&G&^*gfuyiy98t7fg98gfyu"
    };
  },
  methods: {
    sendFeedback() {
      const message = this.subject + this.email + this.number + this.message + this.salt;
      this.token = md5(message);
      const postData = {
        email: this.email,
        number: this.number,
        subject: this.subject,
        message: this.message,
        token: this.token
      };

      axios
          .post("https://nili-telegram-bot.vercel.app/api/feedback", postData)
          .then(res => {
            console.log(res.body);
          });
    }
  }
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
  width: 45%;
  padding: 0 10px;
}

.contact-heading {
  color: var(--text-color);
  font-family: 'Josefin Sans', sans-serif;
  font-weight: 700;
  font-size: 20px;
}

.contact-form {
  max-width: 49%;
}

.input {
  height: auto;
  background-color: var(--input-bg);
  color: var(--p);
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