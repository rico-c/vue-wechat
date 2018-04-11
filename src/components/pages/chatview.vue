<template>
	<div id="chatview">
			<div id="back" @click="back">
				<span>〈 </span><span>返回</span>
			</div>
			<div id="title">{{chat.name}}</div>
			<!-- <div id="chatarea">
				<div v-for="chatclice in chat.conversation">
					<div :class=chatslice.position>
						<div id="chatsliceheader"><img src="chatclice."></div>
						<div id="chatslicecontent">{{chatclice.content}}</div>
					</div>
				</div>
			</div>
			<div id=chatfooter>
				<div></div>
				<div></div>
			</div> -->
	</div>
</template>
<script type="text/javascript">
	export default{
	// data(){
	// 	return name={}
	// },
	methods:{
		back(){
			this.$router.go(-1)
		}
	},
	computed: {
            chat() {
                return this.$route.query.chatid;
            }
        }
    }
</script>
<style type="text/css">
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
</style>