<template>
  <div>
    <v-tabs
      v-model="active"
      color="cyan"
      dark
      slider-color="white"
    >
      <v-tab
        v-for="tab in tabs"
        :key="tab"
        ripple
      >
        {{ tab }}
      </v-tab>
      <v-tab-item
        :key="tabs[0]"
      >
        <v-card flat>
          <token-fields />
        </v-card>
      </v-tab-item>
      <v-tab-item
        :key="tabs[1]"
      >
        <v-card flat>
          <token-json-field />
        </v-card>
      </v-tab-item>
    </v-tabs>
  </div>
</template>

<script>
import TokenFields from '../TokenFields'
import TokenJsonField from '../TokenJsonField'

export default {
  data() {
    return {
      active: 0,
      tabs: [
        'tokens',
        'json'
      ]
    }
  },
  components: {
    TokenFields,
    TokenJsonField
  }
}
</script>
