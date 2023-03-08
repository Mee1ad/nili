<template>
  <div class="parent">
    <PageHeader
        :title="this.$route.params.serviceName.charAt(0).toUpperCase() + this.$route.params.serviceName.slice(1)"
        meta="SERVICES"/>

    <ImageSkeleton :imageSrc="require(`@/assets/services/${this.$route.params.serviceName}/landscape.jpg`)"
                   :alt="'Image'" h="573px" class="header-image animated fadeInUp"></ImageSkeleton>
    <p>Yuroin non lorem ac erat suscipit bibendum. Nulla facilisi. Sedeuter nunc volutpat, mollis sapien vel, conseyer
      turpeutionyer masin libero sempe. Fusceler mollis augue sit amet hendrerit vestibulum. Duisteyerionyer venenatis
      lacus. Fusce mollis augue sit amet hendrerit vestibulum. Duisteyerionyer venenatis lacus. Yuroin non lorem ac erat
      suscipit bibendum nulla facilisi.</p>

    <p class="description">Quisque gravida eros ut turpis interdum ornare. Interdum et malesu they adamale fames ac ante
      ipsum primis in
      faucibus. Curabitur arcu site feugiat in tortor in, volutpat sollicitudin libero. Maecenas nisl est, conselur
      rhoncus loremir consequat et, finibus nec purus. Yuroin non lorem ac erat suscipit bibendum. Nulla facilisi.
      Sedeuter nunc volutpat, mollis sapien vel, conseyer turpeutionyer massa in libero semper. Fusceler mollis augue
      sit amet hendrerit vestibulum. Duisteyerionyer venenatis lacus. Fusce mollis augue sit amet hendrerit
      vestibulum.</p>
    <!--    <div class="columns is-multiline">-->
    <!--      <img v-for="image in images[this.$route.params.serviceName]" :key="image" class="image animated fadeInUp column is-4-desktop is-6-tablet is-12-mobile"-->
    <!--           :src="require(`@/assets/services/${this.$route.params.serviceName}/${image.name}.jpg`)"-->
    <!--           :alt="image.alt"/>-->
    <!--    </div>-->
    <div class="masonry">
<!--      <img v-for="image in images[this.$route.params.serviceName]" :key="image" class="image animated fadeInUp"-->
<!--           :src="require(`@/assets/services/${this.$route.params.serviceName}/${image.name}.jpg`)"-->
<!--           :alt="image.alt"/>-->

      <ImageSkeleton v-for="image in images[this.$route.params.serviceName]" :key="image"
                     :imageSrc="require(`@/assets/services/${this.$route.params.serviceName}/${image.name}.jpg`)"
                     :alt="image.alt" class="image animated fadeInUp"></ImageSkeleton>


    </div>
  </div>
</template>

<script>
import PageHeader from "@/components/PageHeader";
import ImageSkeleton from "@/components/ImageSkeleton";
// const serviceName = this.$route.params.serviceName
const images = {
  'birthday': [
    {
      'name': '1',
      'alt': 'test'
    }, {
      'name': '7',
      'alt': 'test'
    },
    {
      'name': '3',
      'alt': 'test'
    },
    {
      'name': '4',
      'alt': 'test'
    },
    {
      'name': '5',
      'alt': 'test'
    },
    {
      'name': '2',
      'alt': 'test'
    },
    {
      'name': '8',
      'alt': 'test'
    },
    {
      'name': '6',
      'alt': 'test'
    }
  ],
  'couple': [
    {
      'name': '1',
      'alt': 'test'
    }, {
      'name': '2',
      'alt': 'test'
    },
    {
      'name': '3',
      'alt': 'test'
    },
    {
      'name': '7',
      'alt': 'test'
    },
    {
      'name': '5',
      'alt': 'test'
    },
    {
      'name': '6',
      'alt': 'test'
    },
    {
      'name': '4',
      'alt': 'test'
    },
    {
      'name': '11',
      'alt': 'test'
    },
    {
      'name': '8',
      'alt': 'test'
    },

    {
      'name': '9',
      'alt': 'test'
    },

    {
      'name': '10',
      'alt': 'test'
    },

  ],
  'portrait': [
    {
      'name': '1',
      'alt': 'test'
    }, {
      'name': '2',
      'alt': 'test'
    },
    {
      'name': '3',
      'alt': 'test'
    },
    {
      'name': '7',
      'alt': 'test'
    },
    {
      'name': '5',
      'alt': 'test'
    },
    {
      'name': '6',
      'alt': 'test'
    },
    {
      'name': '4',
      'alt': 'test'
    },
    {
      'name': '8',
      'alt': 'test'
    },
    {
      'name': '9',
      'alt': 'test'
    },
    {
      'name': '10',
      'alt': 'test'
    },
    {
      'name': '11',
      'alt': 'test'
    },
    {
      'name': '12',
      'alt': 'test'
    },
    {
      'name': '13',
      'alt': 'test'
    },
    {
      'name': '14',
      'alt': 'test'
    }
  ],
  'kids': [
    {
      'name': '1',
      'alt': 'test'
    }, {
      'name': '2',
      'alt': 'test'
    },
    {
      'name': '3',
      'alt': 'test'
    },
    {
      'name': '7',
      'alt': 'test'
    },
    {
      'name': '5',
      'alt': 'test'
    },
    {
      'name': '6',
      'alt': 'test'
    },
    {
      'name': '4',
      'alt': 'test'
    },
    {
      'name': '8',
      'alt': 'test'
    },
    {
      'name': '9',
      'alt': 'test'
    },
    {
      'name': '10',
      'alt': 'test'
    },
    {
      'name': '11',
      'alt': 'test'
    }
  ]
}

const items = [
  {
    title: 'First',
    description: 'The first item.'
  }
]

export default {
  name: "ServicePage",
  components: {PageHeader, ImageSkeleton},
  // props: {
  //   images: {required: true, type: Array},
  // },
  data: () => {
    return {
      images,
      items
      // serviceName
    };
  }
}
</script>

<style scoped>

.parent {
  margin: 0 30px;
}

.header-image {
  width: 100%;
  margin-bottom: 30px;
}

.description {
  margin-bottom: 100px;
}

.image {
  display: inline-block;
}
</style>