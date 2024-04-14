<template>
    <div>
      <nav class="img-navigation">
        <div>
          <RouterLink to="/#img1" class="links">Image 1</RouterLink>
          <RouterLink to="/#img2" class="links">Image 2</RouterLink>
          <RouterLink to="/#img3" class="links">Image 3</RouterLink>
          <RouterLink to="/#img4" class="links">Image 4</RouterLink>
          <RouterLink to="/#img5" class="links">Image 5</RouterLink>
        </div>
        <div>
          <br>
          <p>Router Scroll SavedPosition : to check jump to another page and back</p>
        </div>
      </nav>
      <div class="img-container">
        <div class="ancher" id="img1">
          <img src="../assets/images/1.png" alt="">
        </div>
        <div class="ancher" id="img2">
          <img src="../assets/images/2.png" alt="">
        </div>
        <div class="ancher" id="img3">
          <img src="../assets/images/3.png" alt="">
        </div>
        <div class="ancher" id="img4">
          <img src="../assets/images/4.png" alt="">
        </div>
        <div class="ancher" id="img5">
          <img src="../assets/images/5.png" alt="">
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name:'Home',
  data () {
    return {
      title:'Home'
    }
  }
};
</script>

<style scoped>
.img-navigation{
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  padding: 10px;
  width: 100%;
  height: 100px;
  background-color: #f1f1f1;
}
.img-container{
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 100px;
  padding-bottom: 250px;
}
.ancher{
  border-radius: 5px;
  height: 300px;
  width: 500px;
  border: 1px solid #ddd;
  margin: 20px 0;
  padding: 10px;

}
.ancher img{
 width: 100%;
 height: 100%;
}
.links{
  text-decoration: none;
  margin: 0 10px;
}
</style>