<template>
  <v-row justify="center" align="center">
      <v-col cols="12" sm="8" md="6">
        <v-card>
          <v-card-title class="headline mb-6">
            <h1>InClub - найди людей по интересам</h1>
          </v-card-title>
        </v-card>
        <v-btn 
            :to="categories.link"
            router
            exact
            class="mb-6"
            
        >
          <span>Найти</span>
        </v-btn>

        <p>Запланированные встречи - 1</p>
        <p>Ваш рейтинг - 1</p>
      </v-col>
    </v-row>
</template>

<script>
export default {
  name: 'IndexPage',
  data: () => ({
    categories: {
      link: '/categories'
    }
  })
}
</script>
