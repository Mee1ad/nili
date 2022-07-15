<template>
  <div class="image-holder animated fadeInUp">
    <img class="image" :src="require(`@/assets/${image_path}`)">
    <div class="caption">
      <h3>{{ name }}</h3>
      <sup class="pricing-dollar">$</sup>
      <span>{{ price }}</span>

      <ul>
        <li> {{item1}} </li>
        <li> {{item2}} </li>
        <li> {{item3}} </li>
        <li> {{item4}} </li>
      </ul>
    </div>
  </div>
</template>

<script>
const itemsTitle = ['3 Hours Session', 'Photo Editing', '50 Digital Images', 'Online Gallery']
export default {
  name: "PackageCard",
  props: {
    image_path: {required: true, type: String},
    name: {required: true, type: String},
    price: {required: true, type: String},
    item1: {required: true, type: String},
    item2: {required: true, type: String},
    item3: {required: true, type: String},
    item4: {required: true, type: String}
  },
  data:()=>{
    return {
      itemsTitle
    };
  }
}


</script>

<style scoped>
.image-holder {
  position: relative;
}

.image {
  width: 100%;
  margin: 10px;
}

.caption {
  position: absolute;
  top: 100px;
  color: white;
  font-weight: 900;
  width: 100%;
  text-align: center;
}

.caption > h3 {
  color: #fff;
  display: block;
  box-sizing: border-box;
  font-size: 17px;
  font-weight: 700;
  margin-bottom: 30px;
}

.caption > span {
  position: relative;
  display: inline-block;
  vertical-align: middle;
  font-size: 50px;
  font-weight: 700;
  color: #fff;
}

.caption > ul > li {
  line-height: 2em;
  font-size: 15px;
  font-weight: 400;
  color: #999;
}

.pricing-dollar {
  position: relative;
  bottom: 2px;
  color: #fff;
  font-size: 17px;
  line-height: 1em;
  font-weight: 400;
}

</style>