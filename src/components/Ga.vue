<template>
    <div class="wrap">
        <div class="ga">
            <div class="sidebar">
                <ul>
                    <li v-for="t in tocList" :key="t.id">
                    <router-link :to="`/Jianli/${t.id}`">
                        {{ t.text }}
                    </router-link>
                    </li>
                </ul>
            </div>
        </div>
        <div class="main">
            <GaContent />
        </div> 
    </div> 
</template>

<script>
import { tocArray } from '../constants/gaConstants'
import GaContent from './GaContent'
export default {
  name: 'Ga',
  components: {
    GaContent
  },
  computed: {
    tocList: function() {
      return tocArray
    }
  }
}
</script>

<style scoped>
</style>
