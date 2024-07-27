<template>
  <div>
    <div class="container">
      <h1>Create New Post</h1>
      <h3 class="text text-success text-center">{{ message }}</h3>
      <form @submit.prevent id="form" class="border rounded p-4" enctype="multipart/form-data">
        <div class="mb-3 row">
          <label for="title">Title</label>
          <div>
            <input type="text" class="form-control" v-model="post.title">
          </div>
          <label for="body">Body</label>
          <div>
            <textarea class="form-control" rows="10" v-model="post.body" id="body"></textarea>
          </div>
          <label for="title">Image</label>
          <div>
            <input type="file"  @change="selectImage($event)" accept="image/*">
          </div>
          <div class="d-grid mt-3">
            <button class="btn btn-primary" @click="createPost()">Create</button>
          </div>
        </div>
      </form>
    </div>
  </div>
  
</template>
<script>
import axios from 'axios'
export default {
  name: 'Index',
  data() {
    return {
      post: {
        title: '',
        body: '',
        image: ''
      },
      data: '',
      message: ''
    }
  },
  methods: {
    selectImage(event){
      this.data = new FormData()
      this.post.image = `${this.$store.state.auth._id}.${event.target.files[0].name}`
      this.data.append('file', event.target.files[0])
      this.data.append('post', JSON.stringify(this.post))
    },
    async createPost() {
      await axios.post('/api/admin/create', this.data).then(res => {
        if (res.status == 200) {
          this.message = res.data
        }
      })
    }
  },
}
</script>
<style></style>