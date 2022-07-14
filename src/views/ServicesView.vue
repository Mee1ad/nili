<template>
  <PageHeader meta="WHAT WE DO" title="Services"></PageHeader>
  <div class="row">
    <div class="col-xs-4" v-for="serviceImage in serviceImages" :key="serviceImage">
      <ServiceImage :image_path="serviceImage.image_path" :caption="serviceImage.caption"/>
    </div>
  </div>
  <div class="work-with-us">
    <span class="heading-meta">INTERESTED TO WORK WITH US?</span>
    <router-link to="/contact" class="button"> Contact With Us </router-link>
  </div>
  <PackageCard class="col-xs-4" image_path="pricing/1.jpg" name="Standard" price="300" items="['3 Hours Session', 'Photo Editing', '50 Digital Images', 'Online Gallery']"></PackageCard>
<!--  <div class="row card">-->
<!--    <div class="col-xs-4" v-for="serviceImage in serviceImages" :key="serviceImage">-->
<!--      <ServiceImage :image_path="serviceImage.image_path" :caption="serviceImage.caption"/>-->
<!--    </div>-->
<!--  </div>-->
</template>

<script>
import ServiceImage from "@/components/ServiceImage";
import PageHeader from "@/components/PgaeHeader";
import PackageCard from "@/components/PackageCard";

const serviceImages = [
  {
    image_path: 'services/02.jpg',
    caption: 'Wedding Shoots'
  },
  {
    image_path: 'services/06.jpg',
    caption: 'Portrait Photography'
  },
  {
    image_path: 'services/05.jpg',
    caption: 'Travel Photography'
  },
  {
    image_path: 'services/04.jpg',
    caption: 'Product Photography'
  },
  {
    image_path: 'services/01.jpg',
    caption: 'Fation Photography'
  },
  {
    image_path: 'services/03.jpg',
    caption: 'Sport Photography'
  },
]
// const packages = [
//   {
//     name: 'Standard',
//     price: '300$',
//     items: ['3 Hours Session', 'Photo Editing', '50 Digital Images', 'Online Gallery']
//   }
// ]
export default {
  name: "ServicesView",
  components: {PackageCard, PageHeader, ServiceImage},
  data:()=>{
    return {
      serviceImages
    };
  }
}
</script>

<style scoped>

.work-with-us {
  text-align: center;
  margin-top: 80px;
}

.work-with-us > a {
  margin-top: 10px;
  background-color: black;
  padding: 10px 30px;
  display: inline-block;
  color: #ccc;
  border-radius: 50px;
  transition: 0.5s;
}

.work-with-us > a:hover {
  color: white;
}

.row > div:nth-child(2) > div {
  animation-delay: 0.2s;
}
.row > div:nth-child(3) > div {
  animation-delay: 0.4s;
}
.row > div:nth-child(4) > div {
  animation-delay: 0.6s;
}
.row > div:nth-child(5) > div {
  animation-delay: 0.8s;
}
.row > div:nth-child(6) > div {
  animation-delay: 1s;
}
</style>