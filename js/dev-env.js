Vue.component('v-dev-env', {
	template: `<div v-show="show">
                <div class="bg" :style='bg_src'></div>
		<div class="other">
			<div class="o-bg">
				<h1 style="margin-top:40px;">{{title}}</h1>
				<div v-for="(_data, _t) of data">
					<h3 >{{_t}}</h3>
					<p v-for="mes of _data"> {{mes}} </p>
				</div>
			</div>
		</div>
	</div>`,
	props: ['show'],
	data: function () {
            var menu_name = {'en':this.$root.$data['menu']['4']['e_name'],'cn':this.$root.$data['menu']['4']['name']};
		return {
                    title: menu_name['cn'] + " ／ " + menu_name['en'],
                    bg_src: "background-image: url('img/tiles_white.jpg');background-repeat: repeat;",
                    data: { 
                        "workstation": [
                                "LAMP [ Linux + Apache + Mysql + PHP ] with any laptop",
                        ],
                    }
		}
	}
});