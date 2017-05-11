Vue.component('v-dev-env', {
	template: `<div v-show="show">
                <div class="bg" :style='bg_src'></div>
		<div class="other">
			<div class="o-bg">
				<h1 style="margin-top:40px;">{{title}}</h1>
                                <h2>Some Basic Knowledge ... </h2>
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
            //if (menu_name['cn'] != '' || this.$root.$data['menu']['4']['name'].length > 0){
            if (this.$root.$data['menu']['4']['name'].length > 0){
                titles = menu_name['cn'] + " ／ " + menu_name['en'];
            }else{
                titles = menu_name['en'];
            }
		return {
                    title: titles,
                    bg_src: "background-image: url('img/tiles_white.jpg');background-repeat: repeat;",
                    data: { 
                        "WHAT I DO": [
                            "BackEnd developer of a websites build from HTML ,CSS ,Javascript, PHP, mysql",
                            "if need maybe able do some simple basic web server configuration",
                        ],
                        "SKILLS": [
                            "LAMP ,JavaScript ,MVC - (cakephp , laraval)",
                        ],
                        "LANGUAGES":[
                            "Mandarin Chinese, Cantonese, English, Malay",
                        ],
                        "My TODO List in 2017 year":[
                            "Learn some of my intrusting modern language or js",
                            "meet new friends",
                            "buy more snack to my pets (2 dogs and 3 cats) ",
                        ]
                            
                    }
		}
	}
});