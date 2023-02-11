<template>
  <v-bottom-navigation
    v-model="value"
    :background-color="color"
    shift
  >
    <v-btn 
      v-for="(item, i) in items"
      :key="i"
      :to="item.to"
      router
      exact
    >
      <v-icon>{{ item.icon }}</v-icon>

      <span>{{ item.title }}</span>
    </v-btn>

  </v-bottom-navigation>
</template>

<script>
export default {
  name: 'BottomNavigation',
  data: () => ({ 
    value: 0,
    items: [
        {
          icon: "mdi-domain",
          title: "Главная",
          to: "/"
        },
        {
          icon: "mdi-apps",
          title: "Категории",
          to: "/categories"
        },
        {
          icon: "mdi-chat",
          title: "Чат",
          to: "/chat"
        },
        {
          icon: "mdi-map-marker",
          title: "Карта",
          to: "/map"
        },
        {
          icon: "mdi-cogs",
          title: "Настройки",
          to: "/settings"
        }
    ],
  }),
  computed: {
    color () {
      switch (this.value) {
        case 0: return 'blue-grey'
        case 1: return 'teal'
        case 2: return 'brown'
        case 3: return 'indigo'
        case 4: return 'green'
        default: return 'blue-grey'
      }
    },
  }
}
</script>
