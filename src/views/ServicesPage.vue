<template>
  <PageHeader meta="WHAT WE DO" title="Services"></PageHeader>
  <div class="row">
    <div class="col-xs-4" v-for="serviceImage in serviceImages" :key="serviceImage">
      <ServiceImage :image_path="serviceImage.image_path" :caption="serviceImage.caption"/>
    </div>
  </div>
  <div class="work-with-us">
    <span class="heading-meta">INTERESTED TO WORK WITH US?</span>
    <router-link to="/contact" class="button"> Contact With Us</router-link>
  </div>
  <PageHeader title="Pricing" meta="PACKAGES"/>
<!--  <PackageCard class="col-xs-4" image_path="pricing/1.jpg" name="Standard" price="300" item1="3 Hours Session"-->
<!--               item2="Photo Editing" item3="50 Digital Images" item4="Online Gallery"></PackageCard>-->
  <div class="row card">
    <div class="col-xs-4" v-for="p in packagesList" :key="p">
      <PackageCard :image_path="p.image_path" :name="p.name" :price="p.price" :item1="p.items1"
                   :item2="p.items2" :item3="p.items3" :item4="p.items4"/>
    </div>
  </div>
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
const packagesList = [
  {
    image_path: 'pricing/1.jpg',
    name: 'Standard',
    price: '300',
    items1: "3 Hours Session",
    items2: 'Photo Editing',
    items3: '50 Digital Images',
    items4: 'Online Gallery'
  },
  {
    image_path: 'pricing/2.jpg',
    name: 'Premium',
    price: '450',
    items1: "6 Hours Session",
    items2: 'Photo Editing',
    items3: '100 Digital Images',
    items4: 'Online Gallery'
  },
  {
    image_path: 'pricing/3.jpg',
    name: 'Platinum',
    price: '750',
    items1: "12 Hours Session",
    items2: 'Photo Editing',
    items3: '250 Digital Images',
    items4: 'Online Gallery'
  }
]
export default {
  name: "ServicesView",
  components: {PackageCard, PageHeader, ServiceImage},
  data: () => {
    return {
      serviceImages,
      packagesList
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