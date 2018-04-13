<template>
	<div id="chatview">
			<div id="back" @click="back">
				<span>〈 </span><span>返回</span>
			</div>
			<div id="chatdetails"><span class="iconfont icon-chat-friends"></span></div>
			<div id="chattitle">{{$route.query.chatidname}}</div>			
			<div id="chatarea">
				<div v-for="dia in dialogues[$route.query.chatid].conversation" :class=dia.position class="chatbox">
					<div class="chatviewhead"><img :src="dia.speaker"></div>
					<div class="chatviewbody">{{dia.content}}</div>
				</div>
			</div>
			<div id='chatfooter'>
				<span class="iconfont icon-dialogue-jianpan" v-show='flag==true' @click="showtoggle()"></span>
				<span class="iconfont icon-dialogue-voice" v-show='flag==false' @click="showtoggle()"></span>
				<div v-show='flag==true'><input></div>
				<div id="speakbutton" v-show='flag==false'><span>按住说话</span></div>
				<span class="expression iconfont icon-dialogue-smile"></span>
				<span class="more iconfont icon-dialogue-jia"></span>
			</div>
	</div>
</template>
<script type="text/javascript">
	import axios from 'axios'
	export default{
		data() {
	       	return {
	          	flag:true,
	          	dialogues:[]
	        }
	    }, 
		methods:{
			back(){
				this.$router.go(-1)
			},
			showtoggle:function(){
				this.flag =!this.flag;
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
	#chatdetails{
		color:white;
		position:fixed;
		top:12px;
		right:15px;
	}
	#chatdetails span{
		font-size: 20px
	}
	#back{
		position:fixed;
		top:12px;
		left:10px;
		color:white;
		z-index:100;
	}
	#back a:link {     
		color: white;   
		text-decoration: none;   
	}   
	#back a:visited {   
		color: white;   
		text-decoration: none;   
	}   
	#back a:hover {    
		color: white;   
		text-decoration: none;   
	}   
	#back a:active {    
		color: white;   
		text-decoration: none;   
	} 
	#chatview{
		height:100%;
	}
	#chattitle{
	position: fixed;
	height: 45px;
	line-height: 45px;
	font-size: 17px;
	color: #fff;
	top: 0;
	left:0;
	width: 100%;
	text-align: center;
	}
	#chatfooter{
		position:fixed;
		bottom:0px;
		display:flex;
		height:29px;
		color:grey;
		background-color:#ececec;
		width:100%;
		padding:5px;
		border-top: solid 1px #d9d9d9;
		text-align: center;
	}
	#chatfooter span{
		margin-left: 3px;
		width:30px;
		height:30px;
		line-height: 28px;
	}
	#chatfooter input{
		border:solid 1px #d9d9d9;
		border-radius: 4px;
		height:25px;
		width:260px;
	}
	#speakbutton{
		border:solid 1px #d9d9d9;
		border-radius: 4px;
		height:25px;
		width:260px;
	}
	.chatviewhead{
		width:40px;
		height:40px;
		margin:15px 10px 0 10px;
	}
	.chatviewbody{
		margin:15px 0 0 0;
		font-size: 15px;
		max-width: 70%;
		border-radius: 4px;
		padding:5px;
		border:solid 1px #d9d9d9;
	}
	.chatviewhead img{
		width:40px;
		height:40px;
	}
	.chatbox{
		display:flex;
	}
	.left .chatviewbody{
		background-color:white;
	}
	.right .chatviewbody{
		background-color:#a0e75a;
	}
	.right{
		flex-direction: row-reverse
	}
</style>
