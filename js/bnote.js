Vue.component('v-bnote', {
	template: `<div v-show="show">
		<div class="other">
			<ul class="menu">
				<li v-for="(_ar, key, index) in article">
					<a :href="'#name'+ index">{{key}}</a>
				</li>
			</ul>
			<div class="a-right">
				<div v-for="(_ar, key, index) in article">
					<a :name="'name'+index" class="a-title">{{key}}</a>
					<a v-for="ari of _ar" :href="ari.url" target="_blank">
					{{ari.name}}
					</a>
				</div>
			</div>
		</div>
	</div>`,
	props: ['show'],
	data: function () {
		var data = {
			article:{
				"LAMP": [{
					name: "初学LAMP",
					url:"#"
				}],
				"代码类": [{
					name: "代码1",
					url:"#"
				}],
				"杂文类": [{
					name: "杂文类1",
					url:"#"
				}]
			},
		}
		return data
	},
	methods:{
		
	}
});