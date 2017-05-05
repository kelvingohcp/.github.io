Vue.component('v-contact', {
	template: `<div v-show="show">
		<div class="other">
			<div class="o-bg">
				<h1 style="margin-top:40px;">{{title}}</h1>
				<h3>{{info}}／{{mail}}</h3>
				<div class="o-con">
					<div v-for="(_message, _t) of message">
						<a :href="_message.href" target="_blank"><img :src="_message.pic"/></a>
						<div>{{_t}}:{{_message.name}}</div>
					</div>
				</div>
			</div>
		</div>
	</div>`,
	props: ['show'],
	data: function () {/*
                var total_count = this.$root.$data['menu'].length;
                for(i=0;i<parseInt(total_count);i++){
                    console.log(this.$root.$data['menu'][i]['show']);
                    if(this.$root.$data['menu'][i]['show'] == true){
                        break;
                    }
                }*/
                var menu_name = {'en':this.$root.$data['menu']['2']['e_name'],'cn':this.$root.$data['menu']['2']['name']};
		var data = {
			//title: "联系／Contact",
                        title: menu_name['cn'] + " ／ " + menu_name['en'],
			info: "扫描或点击图片二维码",
			message: {
				"github": {
					name: "kelvingohcp",
					pic: "./img/github.jpg",
					href: "https://github.com/kelvingohcp"
				},
                                "linkedin": {
					name: "Kelvin Goh Chien Peng",
					pic: "./img/linkedin.jpg",
					href: "https://www.linkedin.com/in/kelvin-goh-chien-peng-b1b848a4/"
				},
                                "skype": {
					name: "kelvin.gohcp",
					pic: "./img/skype.png",
				},
			},
			mail:"kelvingcp89@gmail.com"

		}
		return data
	}
});