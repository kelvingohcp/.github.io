Vue.component('v-about', {
	template: `<div v-show="show">
                <div class="bg" :style='bg_src'></div>
		<div class="other">
			<div class="o-bg">
				<h1 style="margin-top:40px;">{{title}}</h1>
				<div v-for="(_message, _t) of message">
					<h3 >{{_t}}</h3>
					<p v-for="mes of _message">{{mes}}</p>
				</div>
			</div>
		</div>
	</div>`,
	props: ['show'],
	data: function () {
            var menu_name = {'en':this.$root.$data['menu']['3']['e_name'],'cn':this.$root.$data['menu']['3']['name']};
		return {
			//title: "关于／About",
                        title: menu_name['cn'] + " ／ " + menu_name['en'],
                        bg_src: "background-image: url('img/tiles_white.jpg');background-repeat: repeat;",
			message: {
				"关于本站":[
					"记录一些LAMP后端技术的博客",
					"主要用于我自己的个人B记",
				],
				"关于我":[
					"工作三年plus",
					"毕业以后待过两家非著名公司",
                                        "一家开启我成为LAMP的起点",
                                        "一家令我了解不同的平台LAMP还有更多不同的用法",
                                        "感谢曾经指导我的mentor们",
                                        "当然感谢我还是很菜鸟的时给我长期指导我的大牛",
                                        "没您的指导简单的linux指令我还是无法阅读好",
					"虽然一直呕心沥血, 一直积极向上, 一直发奋图强",
                                        "但还是发现我有很多很多不足的地方",
					"现在开始考虑是否继续或寻找更适合我的平台发展",
                                        "其实更想在不同的工作平台得到更多的经验"
				]
			}
		}
	}
});