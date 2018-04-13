<template>
	<div id="dialogue">
		<div id="plus" @click="showplusbox">+</div>
		<div id="plusbox" v-show="showstatus">
			<dt>
				<dl>
					<span class="iconfont icon-tips-xiaoxi"></span>
					<span>发起群聊</span>
				</dl>
				<dl>
					<span class="iconfont icon-tips-add-friend"></span>
					<span>添加朋友</span>
				</dl>
				<dl>
					<span class="iconfont icon-tips-saoyisao"></span>
					<span>扫一扫</span>
				</dl>
				<dl>
					<span class="iconfont icon-tips-fukuan"></span>
					<span>收付款</span>
				</dl>
			</dt>
		</div>
		<div id="chatcontent" v-for="thedialoge in dialogues">
			<router-link :to="{path:'/chatview',query:{chatid:thedialoge.num,chatidname:thedialoge.name}}">
				<div id="chatcontainer">
					<div id="chatheader"><img :src="thedialoge.headerimg"></div>
					<div id="chatrightbar">
						<div id="namebar">
							<span class="font">{{thedialoge.name}}</span>
							<span id="rightsite">{{thedialoge.lasttime}}</span>
						</div>
						<div id="scriptbar" v-if=thedialoge.conversation>
							<span v-show=thedialoge.type>
								{{thedialoge.conversation[thedialoge.conversation.length-1].talker}}:
							</span>
							<span >
								{{thedialoge.conversation[thedialoge.conversation.length-1].content}}
							</span>
						</div>
					</div>
				</div>	
			</router-link>		
		</div>
	</div>
</template>
<script type="text/javascript">
	import axios from 'axios'
	export default{
		data() {
	       	return {
	         	dialogues:[],
	         	showstatus:false
	    	}
		},
		methods:{	
			showplusbox(){
				this.showstatus=!this.showstatus
			}
		},
		created() {
	    	axios.get('static/data.json').then(response => 
	     			(this.dialogues=response.data.dialogue)
	    		)
	  		}
	}
</script>
<style type="text/css">
	#plus{
		position:fixed;
		right:15px;
		top:0px;
		color:white;
		font-size:30px;
	}
	#plusbox dt{
		width:180px;
		position: fixed;
		right:5px;
		top:45px;
		background-color:#1b1b1b; 
	}
	#plusbox dl{
		width:180px;
		color:white;
		padding:10px;
	}
	#plusbox span{
		margin:5px;
	}
	#plusbox .iconfont{
		font-size: 20px
	}
	#chatheader{
		width:40px;
		height:40px;
		margin:6px 0 6px 10px;
		border-radius: 3px
	}
	#chatheader img{
		width:40px;
		height:40px;
		border-radius: 3px
	}
	#chatcontent{
		display:flex;
		border-bottom:solid 1px #d9d9d9;
		background-color: white;
	}
	#chatcontent a{
		width:100%;
	}
	#chatcontainer{
		display:flex;
	}
	#chatrightbar{
		margin:6px;
		flex-grow: 1;
	}
	.font{
		font-size: 15px;
	}
	#dialogue{
		border-top:solid 1px #d9d9d9;
	}
	#rightsite{
		color:grey;
		font-size:9px;
		float:right;
	}
	#scriptbar{
		font-size: 10px;
		color:grey;
		margin-top: 3px;
	}
</style>