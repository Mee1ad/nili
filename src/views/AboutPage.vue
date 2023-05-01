<template>
  <div class="container animated fadeInUp col-xs-12">
    <PageHeader title="About Me" meta=""></PageHeader>
    <ImageSkeleton class="about-image"
                   :imageSrc="require(`@/assets/about/01.webp`)" :alt="`Nili`" :w="`100%`" :h="`var(--height)`"/>
    <div class="content">
      <SPAN class="heading-meta">PHOTOGRAPHER</SPAN>
      <h3 class="about-heading">Nili Razaghi</h3>
      <p>Nili Razaghi is a photographer based in Iran. Nili has been professionally pursuing photography since the age
        of 17, starting as a wedding and kids photographer. Over the years, she expanded her portfolio to include
        commercial photography and videography, honing her skills by working with GCorp media team and now serving as
        the media director of Royal Beauty Clinic and also works as a freelance photographer.</p>

        <p>Nili's love for her craft shines through in her cinematic photographs, which blend artistry and technical skill
        to create images. Her relentless pursuit of excellence drives her to continuously improve her skills and learn
        something new with every photography session.</p>
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
  margin-bottom: 15px;
}

.about-image {
  height: 100vh;
  --height: 100vh;
  margin-bottom: 30px;
}

@media screen and (max-width: 768px) {
  .about-image {
    height: 57vw;
    --height: 57vw;

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
  margin: 0 auto 48px 0;
}

</style>