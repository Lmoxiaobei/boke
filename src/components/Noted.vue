<template>
<div class="wrap">
	<div class="ga">
		<div class="sidebar">
			<ul>
				<li v-for="t in tocList" :key="t.id">
				<router-link :to="`/Note/${t.id}`">
						{{ t.text }}
				</router-link>
				</li>
			</ul>
		</div>
	</div>
	<div class="main">
			<Noteq />
	</div> 
</div> 
</template>

<script>
import { tocArray } from '../constants/Noteq.js'
import Noteq from './Noteq'
export default {
  name: 'Noted',
  components: {
    Noteq
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
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
}
a {
  font-size: 24px;
  margin: 0 auto;
  margin-top: 20px;
}
a:hover {
  color: #fff;
}
.wrap {
  display: flex;
  /* justify-content: space-between; */
}
.ga {
  background: rgba(83, 166, 174, 1);
  width: 40%;
}
.main {
  background: -webkit-gradient(
    linear,
    0 0,
    0 bottom,
    from(rgb(68, 142, 246)),
    to(rgb(117, 194, 246))
  );
  width: 60%;
}
</style>
