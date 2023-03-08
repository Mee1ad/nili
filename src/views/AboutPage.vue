<template>
  <div class="container animated fadeInUp col-xs-12">
    <PageHeader title="About Me" meta=""></PageHeader>
    <ImageSkeleton class="about-image"
                   :imageSrc="require(`@/assets/about/01.webp`)" :alt="`Nili`" :w="`100%`" :h="`100vh`"/>
    <div class="content">
      <SPAN class="heading-meta">PHOTOGRAPHER</SPAN>
      <h3 class="about-heading">Nili Razaghi</h3>
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
import PageHeader from "@/components/PageHeader";
import ImageSkeleton from "@/components/ImageSkeleton.vue";

export default {
  name: "AboutPage",
  components: {PageHeader, ImageSkeleton},
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
  height: 100vh;
  margin-bottom: 30px;
}

@media screen and (max-width: 768px) {
  .about-image {
    height: 57vw;

  }
}

.about-heading {
  color: var(--b);
  font-family: 'Josefin Sans', sans-serif;
  font-weight: 700;
  font-size: 30px;
}

.sign {
  width: 240px;
  margin: 0 auto;
}

</style>