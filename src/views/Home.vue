<template>
  <div class="home">
   <BlogPost :post="welcomeScreen" /> 
   <BlogPost :post="post" v-for="(post, index) in sampleBlogPost" :key ="index" /> 
  </div>
</template>

<script>
import BlogPost from "../components/BlogPost"
export default {
  name: "Home",
  components: {BlogPost},
  data () {
    return {
      welcomeScreen: {
        title: "Welcome",
        blogPost: 
        "Weekly blog post containes all programming line CSS, HTML , CSS ",
        welcomeScreen: true,
        photo:"coading",
      },
      sampleBlogPost: [
        {
          title: "This is a filter",
          blogHTML: "This is a filter blog post title",
          blogCoverPhoto: "beautiful-stories",

        },
        {
        title: "This is filter title",
        blogHTML: "This is filter blog post title !",
        blogCoverPhoto: "designed-for-everyone",

        }
      ]
    }
  }
};
</script>
