<template>
  <div>
    <h1>InClub</h1>
    <h2>Найди людей по интересам</h2>

    <hr/>

    <div v-if="geoPositionVivible">
        <p>Ваша геопозиция</p>
        <p>Широта: {{ geoPosition.latitude }}</p>
        <p>Долгота: {{ geoPosition.longitude }}</p>
    </div>

    <hr/>

  </div>
</template>

<script>
import PostForm from "@/components/PostForm";
import PostList from "@/components/PostList";
import MyButton from "@/components/UI/MyButton";
import MySelect from "@/components/UI/MySelect";
import MyInput from "@/components/UI/MyInput";
import {ref} from 'vue'
import {usePosts} from "@/hooks/usePosts";
import {useGeolocation} from "@/hooks/useGeolocation";
import useSortedPosts from "@/hooks/useSortedPosts";
import useSortedAndSearchedPosts from "@/hooks/useSortedAndSearchedPosts";

export default {
  components: {
    MyInput,
    MySelect,
    MyButton,
    PostList, PostForm
  },
  data() {
    return {
      sortOptions: [
        {value: 'title', name: 'По названию'},
        {value: 'body', name: 'По содержимому'},
      ],
    }
  },
  setup(props) {
    const {posts, totalPages, isPostsLoading} = usePosts(10);
    const {sortedPosts, selectedSort} = useSortedPosts(posts);
    const {searchQuery, sortedAndSearchedPosts} = useSortedAndSearchedPosts(sortedPosts);
    const {geoPosition, geoPositionVivible} = useGeolocation();
    console.log(geoPosition.value)

    return {
      posts,
      totalPages,
      isPostsLoading,
      sortedPosts,
      selectedSort,
      searchQuery,
      sortedAndSearchedPosts,
      geoPosition, geoPositionVivible
    }
  }
}
</script>

<style>

.app__btns {
  margin: 15px 0;
  display: flex;
  justify-content: space-between;
}
.page__wrapper {
  display: flex;
  margin-top: 15px;
}
.page {
  border: 1px solid black;
  padding: 10px;
}
.current-page {
  border: 2px solid teal;
}

.observer {
  height: 30px;
  background: green;
}
</style>
