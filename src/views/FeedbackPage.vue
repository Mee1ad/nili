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
      <div class="feedback-image-container">
        <div class="feedback-image-placeholder">
          <i class="fa fa-camera"></i>
        </div>
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
import PageHeader from "@/components/PageHeader";


const feedbacks = [
  {
    image_path: 'feedback/Amir & Mohad.png',
    name: 'Mohad & Amir',
    instagram: 'mohadese.hosseini1',
    description: "I think it's been almost three years that I've posed in front of your camera. Each time I felt sth new" +
        " . You stood in front of me and calmed me so professionally that I became your camera's friend." +
        " Your split-shots are so special that I never stop looking at them. I was your subject of photography" +
        " for many times but the best one was my pre-wedding day photography. The combination of us and fog was a" +
        " very beautiful scene. I can't express how I felt about the pictures and I couldn't believe that you are the" +
        " creator of what I see. You captured the true beauty of our feelings, Thank you for being so kind and " +
        "patient Nili.\n"
  },
  {
    image_path: 'feedback/Gisoo\'s Mom.png',
    name: 'Gisoo’s Mom',
    instagram: null,
    description: 'I really liked my pictures. Specially the part that you could capture our feelings and' +
        ' still whenever I watch my pictures I feel exhilarated. The compositions are also great, I loved it.' +
        ' Thank you.'
  },
  {
    image_path: 'feedback/Saeeide.png',
    name: 'Saeeideh & Mojtaba',
    instagram: 'saeidehjalali',
    description: 'I love my pictures and moreover I love your energy, manner and work ethics.'
  },
  {
    image_path: 'feedback/Nikan\'s Mom.png',
    name: 'Nikan’s Mom',
    instagram: '',
    description: 'Girl what have you done to my face? It’s great! I love the retouch and the editing. I love them.'
  },
  {
    image_path: 'feedback/3.jpg',
    name: 'Mr.Zareh',
    instagram: '',
    description: 'Thank you for your good edit and design. Your edit is good and neat. I hope we can work with' +
        '  each other more.'
  },
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
  color: var(--b);
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
  color: var(--normal-text-color);
}

.form-group {
  display: inline-block;
  margin-left: 200px;
}

.input {
  height: auto;
  width: 90%;
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
}

.submit:hover {
  color: var(--normal-text-color);
  cursor: pointer;
}

.feedback-item {
  margin-bottom: 20px;
}

@media screen and (max-width: 768px) {
  .feedback-image-placeholder {
    position: inherit;
  }
  .feedback-image-container, .form-group{
    text-align: center;
    margin: 20px;
  }
}
</style>