<template>
  <div class="">
    <div class="footer-content">
      <h1>Nili Razaghi
        <span>PHOTOGRAPHER</span>
      </h1>
    <p>© 2023 Nili by GCorp</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "FooterPage"
}
</script>

<style scoped>
.footer-content {
  background-color: var(--footer-background);
  text-align: center;
  padding: 40px 0 50px 0;
}

.footer-content > h1 {
  font-family: 'Josefin Sans', sans-serif;
  font-weight: 700;
  font-size: 30px;
  line-height: 1.5em;
  color: var(--normal-text-color);
}

.footer-content > h1 > span {
  font-size: 12px;
  text-transform: uppercase;
  /*color: #888;*/
  font-weight: 400;
  letter-spacing: 2px;
  line-height: 1.3em;
  display: block;
  margin-top: 0px;
  text-align: center;
}

.footer-content > p {
  font-size: 12px;
  line-height: 1.5em;
  color: var(--caption-color);
  margin-bottom: 0;
  text-align: center;
}
</style>