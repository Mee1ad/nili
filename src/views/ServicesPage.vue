<template>
  <PageHeader meta="WHAT WE DO" title="Services"></PageHeader>
  <div class="row">
    <div class="col-xs-4 service-image" v-for="serviceImage in serviceImages" :key="serviceImage">
      <AnimatedServiceImage :imagePath="serviceImage.image_path" :caption="serviceImage.caption"
                            :croppedImagePath="serviceImage.croppedImagePath" :serviceUrl="serviceImage.serviceUrl"/>
    </div>
  </div>
  <div class="work-with-us animated fadeInUp">
    <span class="heading-meta">INTERESTED TO WORK WITH US?</span>
    <router-link to="/contact" class="button"> Contact With Us</router-link>
  </div>
<!--  <PageHeader title="Pricing" meta="PACKAGES"/>-->
  <PageHeader title="" meta=""/>
  <!--  <PackageCard class="col-xs-4" image_path="pricing/1.jpg" name="Standard" price="300" item1="3 Hours Session"-->
  <!--               item2="Photo Editing" item3="50 Digital Images" item4="Online Gallery"></PackageCard>-->
  <div class="row card animated fadeInUp">
    <div class="col-xs-4" v-for="p in packagesList" :key="p">
      <PackageCard :image_path="p.image_path" :name="p.name" :price="p.price" :item1="p.items1"
                   :item2="p.items2" :item3="p.items3" :item4="p.items4"/>
    </div>
  </div>
</template>

<script>
// import AnimatedServiceImage from "@/components/ServiceImage";
import PageHeader from "@/components/PageHeader";
import PackageCard from "@/components/PackageCard";
import AnimatedServiceImage from "@/components/AnimatedServiceImage";

const serviceImages = [
  {
    image_path: 'services/birthday/cover',
    caption: 'Birthday Photography',
    serviceUrl: 'services/birthday'
  },
  {
    image_path: 'services/portrait/cover',
    caption: 'Portrait Photography',
    serviceUrl: 'services/portrait'
  },
  {
    image_path: 'services/couple/cover',
    caption: 'Couple Photography',
    serviceUrl: 'services/couple'
  },
  {
    image_path: 'services/kids/cover',
    caption: 'Kids Photography',
    serviceUrl: 'services/kids'
  },
  {
    image_path: 'services/product/cover',
    caption: 'Product Photography',
    serviceUrl: 'services/product'
  },
  {
    image_path: 'services/edit/cover',
    caption: 'Edit Photos',
    serviceUrl: 'services/edit'
  }
]
const packagesList = [
  // {
  //   image_path: 'pricing/1.jpg',
  //   name: 'Standard',
  //   price: '300',
  //   items1: "3 Hours Session",
  //   items2: 'Photo Editing',
  //   items3: '50 Digital Images',
  //   items4: 'Online Gallery'
  // },
  // {
  //   image_path: 'pricing/2.jpg',
  //   name: 'Premium',
  //   price: '450',
  //   items1: "6 Hours Session",
  //   items2: 'Photo Editing',
  //   items3: '100 Digital Images',
  //   items4: 'Online Gallery'
  // },
  // {
  //   image_path: 'pricing/3.jpg',
  //   name: 'Platinum',
  //   price: '750',
  //   items1: "12 Hours Session",
  //   items2: 'Photo Editing',
  //   items3: '250 Digital Images',
  //   items4: 'Online Gallery'
  // }
]
export default {
  name: "ServicesView",
  // components: {AnimatedServiceImage, PackageCard, PageHeader, ServiceImage},
  components: {AnimatedServiceImage, PackageCard, PageHeader},
  data: () => {
    return {
      serviceImages,
      packagesList
    };
  }
}
</script>

<style scoped>

.service-image {
  margin-right: -10px;
}

.work-with-us {
  text-align: center;
  margin-top: 80px;
}

.work-with-us > a {
  margin-top: 10px;
  background-color: var(--button-bg);
  padding: 10px 30px;
  display: inline-block;
  color: var(--submit);
  border-radius: 50px;
  transition: 0.5s;
}

.work-with-us > a:hover {
  color: var(--normal-text-color);
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