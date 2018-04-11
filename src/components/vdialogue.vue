<template>
	<div id="dialogue">
		<div id="chatcontent" v-for="thedialoge in dialogues">
			<router-link :to="{path:'/chatview',query:{chatid:thedialoge}}">
				<div id="chatcontainer">
					<div id="chatheader"><img :src="thedialoge.headerimg"></div>
					<div id="chatrightbar">
						<div id="namebar"><span class="font">{{thedialoge.name}}</span><span id="rightsite">{{thedialoge.lasttime}}</span></div>
						<!-- 此处浏览器报错Error in render: "TypeError: Cannot read property 'content' of undefined" -->
						<div id="scriptbar">{{thedialoge.conversation[thedialoge.conversation.length-1]}}</div>
						<!-- 换成如下则可以显示conversation部分
			         	thedialoge.conversation[thedialoge.conversation.length-1]  -->
			         	<!-- 对应的json数据在data.json的116行 -->
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
	    	}
		},
		created() {
	    	axios.get('static/data.json').then(response => 
	     			(this.dialogues=response.data.dialogue)
	    		)
	  		},
	  	// methods: {
	  	// 	 dialogueshow() {
	  	// 	 	return thedialoge.conversation[thedialoge.conversation.length-1]
	  	// 	 }
	  	// }
	}
</script>
<style type="text/css">
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
</style>