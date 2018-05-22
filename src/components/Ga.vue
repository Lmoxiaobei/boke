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
li {
  list-style: none;
}
.wrap {
  display: flex;
  justify-content: space-between;
}
.ga {
  background: rgba(83, 166, 174, 1);
  width: 40%;
}
/* .main {
  background: -webkit-gradient(
    linear,
    0 0,
    0 bottom,
    from(rgb(68, 142, 246)),
    to(rgb(117, 194, 246))
  );
  width: 60%;
} */
.main {
  width: 60%;
}
</style>
