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
				e_name: "Note",
				show: false
			},{
				name: "联系",
				e_name: "Contact",
				show: false
			},{
				name: "关于我",
				e_name: "About ME",
				show: false
			},{
				name: "", //关于更多的我
				e_name: "Extra Info",
				show: true
			}],
			check_menu: 0,
			main_click: 0,
                        
                        // for language
                        selected : 'en', // default
                        options: [
                            { text: 'English', value: 'en' },
                            { text: 'Chinese', value: 'zh-cn' },
                        ],
                      /*
                        languagelist:[{
                                id          : 1,
                                name        : "中文",
                                ename       : "zh-cn",
                            },{
                                id          : 2,
                                name        : "英文",
                                ename       : "en",
                            },
                        ],
                        */
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
