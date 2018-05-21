<template>
  <div>
    <div v-if="isLifePage">
       <Life />
    </div>
    <div v-if="isWorkPage">
       <Work />
    </div>
    <div v-if="isRightPage">
      <Flex />
    </div>
  </div>
</template>


<script>
import Life from './Notee'
import Work from './Notew'
import Flex from './Noter'
export default {
  name: 'GaContent',
  components: {
    Life,
    Work,
    Flex
  },
  computed: {
    id() {
      return this.$route.params.id
    },
    isLifePage() {
      return this.id == 'life'
    },
    isWorkPage() {
      return this.id === 'work'
    },
    isRightPage() {
      return this.id === 'flex'
    }
  }
}
</script>

<style scoped>
</style>
