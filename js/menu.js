var main = new Vue({
	el: "#main",
	data: function () {
		return {
			menu:[{
				name: "首页",
				e_name: "Home",
				show: false
			},{
				name: "B记",
				e_name: "BNote",
				show: false
			},{
				name: "联系",
				e_name: "Contact",
				show: false
			},{
				name: "关于",
				e_name: "About",
				show: false
			},{
				name: "工具",
				e_name: "Tools",
				show: true
			}],
			check_menu: 0,
			main_click: 0
		}
	},
	methods: {
		show: function(index){
			for(var i in this.menu){
				this.menu[i].show = false
			}
			this.menu[index].show = true;
			this.check_menu = index;
			if(this.check_menu == 0){
				var refs = this.$children;
				this.main_click ++;
				if(this.main_click > 1) return;
				refs[0].show_keys();
			}
		},
	},
	mounted:function(){
		this.show(0);
	}
})
