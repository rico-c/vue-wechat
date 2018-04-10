<template>
	<div id="dialogue">
		<div id="chatcontent" v-for="thedialoge in dialogues">
			<router-link :to="{path:'/chatview',query:{chatid:thedialoge}}">
				<div id="chatcontainer">
					<div id="chatheader"><img :src="thedialoge.headerimg"></div>
					<div id="chatrightbar">
						<div id="namebar"><span class="font">{{thedialoge.name}}</span><span id="rightsite">{{thedialoge.lasttime}}</span></div>
						<div id="scriptbar">{{thedialoge.conversation[thedialoge.conversation.length-1]}}</div>
						<!-- thedialoge.conversation[thedialoge.conversation.length-1].speaker,
			         	thedialoge.conversation[thedialoge.conversation.length-1].content -->
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