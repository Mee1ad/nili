<template>
  <div class="container animated fadeInUp">
    <PageHeader class="header" title="Feedback" meta="REVIEWS"></PageHeader>
    <p class="leave-feedback">Leave feedback</p>
    <div class="feedback-item" v-for="feedback in feedbacks" :key="feedback">
      <FeedbackItem :image_path="feedback.image_path" :name="feedback.name" :instagram="feedback.instagram"
                    :description="feedback.description"></FeedbackItem>
    </div>
    <div class="create-feedback animated fadeInUp">
      <h3>Leave Feedback</h3>
      <div class="feedback-image-placeholder">
        <i class="fa fa-camera"></i>
      </div>
      <div class="form-group">
        <input class="input" type="text" placeholder="Your Name"/>
        <input class="input" type="text" placeholder="Link to your social network account"/>
        <textarea class="input" name="message" placeholder="Your Feedback" col="30" rows="7" spellcheck="false"/>
        <button type="submit" class="submit">Submit Feedback</button>
      </div>
    </div>
  </div>

</template>

<script>
import FeedbackItem from "@/components/FeedbackItem";
import PageHeader from "@/components/PgaeHeader";

const feedbacks = [
  {
    image_path: 'feedback/1.jpg',
    name: 'Eleanor & Stefano',
    instagram: 'username',
    description: 'Annie non lorem ac erat suscipit bibendum. Nulla facilisi. Sedeuter nunc volutpat,' +
        ' mollis sapien veli, conseyer turpeutionyer massa in libe semper sedeuter nunc volutpat,' +
        ' mollis sapien veletion. Quisque gravida eros ut turpis interdum ornare. Interdum et malesu' +
        ' they adamale fames ac ante ipsum primis in faucibus. Curabitur arcu erosite feugiat in tortor' +
        ' in, volutpat sollicitudin libero.'
  },
  {
    image_path: 'feedback/2.jpg',
    name: 'Freida & Pablo',
    instagram: 'username',
    description: 'Annie non lorem ac erat suscipit bibendum. Nulla facilisi. Sedeuter nunc volutpat,' +
        ' mollis sapien veli, conseyer turpeutionyer massa in libe semper sedeuter nunc volutpat,' +
        ' mollis sapien veletion. Quisque gravida eros ut turpis interdum ornare. Interdum et malesu' +
        ' they adamale fames ac ante ipsum primis in faucibus. Curabitur arcu erosite feugiat in tortor' +
        ' in, volutpat sollicitudin libero.'
  },
  {
    image_path: 'feedback/3.jpg',
    name: 'Olivia & Enrico',
    instagram: 'username',
    description: 'Annie non lorem ac erat suscipit bibendum. Nulla facilisi. Sedeuter nunc volutpat,' +
        ' mollis sapien veli, conseyer turpeutionyer massa in libe semper sedeuter nunc volutpat,' +
        ' mollis sapien veletion. Quisque gravida eros ut turpis interdum ornare. Interdum et malesu' +
        ' they adamale fames ac ante ipsum primis in faucibus. Curabitur arcu erosite feugiat in tortor' +
        ' in, volutpat sollicitudin libero.'
  }
]
export default {
  name: "FeedbackPage",
  components: {PageHeader, FeedbackItem},
  data: () => {
    return {
      feedbacks
    };
  }
}
</script>

<style scoped>
.container {
  margin: 0 15px 0 15px;
}

.header {
  margin-bottom: 60px;
}

.leave-feedback {
  border-bottom: 1px dashed #999;
  width: 120px;
  margin: 0 0 40px 15px;
  font-family: 'Josefin Sans', sans-serif;
}

.create-feedback {
  margin: 20px 0 0 15px;
}

.create-feedback > h3 {
  margin-bottom: 50px;
  color: #101010;
  font-family: 'Josefin Sans', sans-serif;
  font-weight: 700;
  font-size: 20px;
}

.feedback-image-placeholder {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.2);
  text-align: center;
  display: inline-block;
  position: absolute;
}

.fa-camera {
  font-size: 50px;
  margin-top: 25px;
  color: white;
}

.form-group {
  display: inline-block;
  margin-left: 200px;
}

.input {
  height: auto;
  width: 90%;
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
}

.submit {
  text-shadow: none;
  padding: 10px 30px;
  -webkit-box-shadow: none;
  box-shadow: none;
  font-weight: 400;
  border: none;
  color: #ccc;
  -webkit-transition: background-color .15s ease-out;
  transition: background-color .15s ease-out;
  background-color: #1b1b1b;
  margin-top: 0px;
  font-size: 16px;
  letter-spacing: 0px;
  border-radius: 30px;
  font-family: 'Josefin Sans', sans-serif;
  line-height: 1.75;
}

.submit:hover {
  color: #fff;
  cursor: pointer;
}
</style>