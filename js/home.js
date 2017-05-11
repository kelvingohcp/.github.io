Vue.component('v-home', {
	template: `<div v-show="show">
	    <div class="bg" :style='bg_src'></div>
		<div class="b-title">
                    <blockquote style="display:none">
                        <p><i><b>\" {{currentQuote.content}} "\</b></i></p>
                        <footer>
                            — <cite> <b>{{currentQuote.author}}</b></cite>
                        </footer>
                    </blockquote>
                    <transition-group name="list" tag="p">	
                        <span v-for="item in show_key" v-bind:key="item" class="list-item">
                          {{ item }}
                        </span>
                    </transition-group>
    
                    <transition-group name="list-newafter" tag="p">	
                        <span v-for="item in show_key_mid" v-bind:key="item" class="list-item3">
                          {{ item }}
                        </span>
                    </transition-group>
   
                    <transition-group name="list-after" tag="p">	
                        <span v-for="item in show_key_last" v-bind:key="item" class="list-item2">
                          {{ item }}
                        </span>
                    </transition-group>
	  	</div>
		<div class="cover"></div>
	</div>`,
	props: ['show'],
        currentQuote: {},
	data: function () {
		var data = {
			check: -1,
                        check_mid: -1,
			check_last: -1,
                        quotes: [
                        {
                          content: "If you want something you've never had You must be willing to do something you've never done.",
                          author: "Thomas Jefferson"
                        },
                        {
                          content: "Don't limit yourself to someone else's opinion of your capabilities. Be you. Dream, plan,execute!",
                          author: "Dr. Steve Maraboli"
                        },
                        ],
			bg_src: "background-image: url('img/bg3.jpeg')",
			keys: [/*"GOOD THINGS TAKE TIME",*/"世界那么大，我想去看看"],
                        keys_mid:["If", "you", "accept", "your", "limitations",",", "you", "go", "beyond", "them","!!"],
			keys_last: ["多","与","有","意","思","异","性","交","朋","友","~"],
			show_key: [],
                        show_key_mid: [],
			show_key_last: [],
			timer_keys_last: null,
                        timer_keys_mid: null,
			timer_keys: null
		}
		return data
	},
        created: function() {
            this.displayQuote();
        },
	methods:{
                displayQuote: function(){
                    var randomInt = Math.floor(Math.random() * (this.quotes.length - 0));
                    this.currentQuote = this.quotes[randomInt];
                },
		show_keys: function(){
			this.check ++;
			if(this.check >= parseInt(this.keys.length)){
				clearTimeout(this.timer_keys);
				this.check_mid = -1;
				this.show_keys_mid();
				return;
			}
			this.show_key.push(this.keys[this.check]);
			this.timer_keys = setTimeout(this.show_keys, 1000);
		},
                show_keys_mid: function(){
                        //console.log(parseInt(this.keys_mid.length));
                        this.check_mid ++;
			if(this.check_mid >= parseInt(this.keys_mid.length)){
				clearTimeout(this.timer_keys_mid);
                                this.check_last = -1;
				this.show_keys_last();
				return;
			}
			this.show_key_mid.push(this.keys_mid[this.check_mid]);
			this.timer_keys_mid = setTimeout(this.show_keys_mid, 500);
		},
		show_keys_last: function(){
			this.check_last ++;
			if(this.check_last >= parseInt(this.keys_last.length)){
				clearTimeout(this.timer_keys_last);
				return;
			}
			this.show_key_last.push(this.keys_last[this.check_last]);
			this.timer_keys_last = setTimeout(this.show_keys_last, 900);
		}
	}
});