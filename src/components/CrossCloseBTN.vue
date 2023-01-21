<template>
  <svg width="100" height="100" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 7 7">
    <path d="M.15.13a.56.56 0 0 1 .78.06l5.89 5.89a.52.52 0 1 1-.72.72L.21.91A.56.56 0 0 1 .15.13z"/>
    <path d="M6.86.13a.56.56 0 0 0-.78.06L.19 6.08a.52.52 0 1 0 .72.72L6.8.91a.56.56 0 0 0 .06-.78z"/>
  </svg>
</template>

<script>
export default {
  name: "CrossCloseBTN",
  props: {
    color: {
      type: String,
      default: "currentColor"
    }
  },
  x: {
    type: Number,
    default: 0
  },
  y: {
    type: Number,
    default: 0
  },
  width: {
    type: Number,
    default: 24
  },
  height: {
    type: Number,
    default: 24
  },
  rx: {
    type: Number,
    default: 5
  },
  ry: {
    type: Number,
    default: 5
  }
};
</script>