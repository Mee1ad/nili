<template>
  <div class="container animated fadeInUp col-xs-12">
    <PageHeader title="About Me" meta="SENIOR"></PageHeader>
    <div class="about-image"></div>
    <div class="content">
      <SPAN class="heading-meta">PHOTOGRAPHER</SPAN>
      <h3 class="about-heading">Annie McCury</h3>
      <p>Quisque bibendum tincidunt varius. Vestibulum viverra bibendum magna, mattis gravida sapien tincidunt ut. Donec
        felis nunc, dapibus quis facilisis quis, placerat vitae massa. Curabitur consectetur mi tellus, in dignissim
        nibh maximus tempus. Cras vel metus nec eros laoreet ullamcorper sed sit amet lectus. Vivamus orci mi, malesuada
        etteye liberet vithelacinia imperdiet ex. Vivamus egestas nibh quis pulvinar vestibulum. Mauris pellentesque
        eros vitae tellus dapibus egestas.</p>
      <p>Quisque bibendum tincidunt varius. Vestibulum viverra bibendum magna, mattis gravida sapien tincidunt ut. Donec
        felis nunc, dapibus quis facilisis quis, placerat vitae massa. Curabitur consectetur mi tellus, in dignissim
        nibh maximus tempus. Cras vel metus nec eros laoreet ullamcorper sed sit amet lectus.</p>
      <img class="sign" src="../assets/home/sign.png">
    </div>
  </div>
</template>

<script>
import PageHeader from "@/components/PgaeHeader";
export default {
  name: "AboutPage",
  components: {PageHeader},
  data() {
    return {
      title: 'Blog'
    }
  }
}
</script>

<style scoped>
.container {
  margin: 0 15px 0 15px;
}

.about-image {
  background-size: cover;
  height: 100vh;
  background-image: url("../assets/home/slider/01.jpg");
  animation-duration: 10s;
  animation-iteration-count: infinite;
  margin-bottom: 30px;
}

.about-heading {
  color: #101010;
  font-family: 'Josefin Sans', sans-serif;
  font-weight: 700;
  font-size: 30px;
}

.sign {
  width: 240px;
  margin: 0 auto;
}

</style>