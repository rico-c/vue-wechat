<template>
	<transition name="fade">
	<div id="photo">
			<div id="toalbum" @click="back">
				<span>〈 </span><span>返回</span>
			</div>

		<div id="thephoto" v-if="contacts[usernum]&&contacts[usernum].momentsimg[picnum]" >
			<img :src="contacts[usernum].momentsimg[picnum].imgs">
		</div>
		<div id="thebottom" v-if="contacts[usernum]&&contacts[usernum].momentsimg[picnum]">
			<div id="thecontent">{{contacts[usernum].momentsimg[picnum].content}}</div>
			<div id="theicon">
				<div id="theic">&nbsp;&nbsp;♡赞&nbsp;&nbsp;&nbsp;□评论</div>
			</div>>
		</div>
	</div>
</transition>
</template>
<script type="text/javascript">
	import axios from 'axios'
	export default{
		data() {
      	 	return {
          		contacts:[]
       		 }
   		 },
		computed: {
          	usernum() {
          	  return this.$route.query.contactid;
            },
          	picnum() {
          	  return this.$route.query.thepic;
            }
        },
        methods:{
			back(){
				this.$router.go(-1)
			}
		},
		created() {
    		axios.get('static/data.json').then(response => 
     			(this.contacts=response.data.contacts)
    		);
  		}
	}
</script>
<style type="text/css">
	.fade-enter-active{
 		 transition: opacity .3s;
	}
	.fade-enter{
 		 opacity: 0;
	}
	#toalbum{
		position:fixed;
		top:12px;
		left:10px;
		color:white;
		z-index:100;
	}
	#toalbum a{
		color:white;
	}
	#photo{
		background-color:black;
		width:100%;
		height:100%;
		display: flex;
		justify-content:space-between;
        flex-direction:column;
	}
	#thephoto{
		width:100%;
		margin:auto;
	}
	#thephoto img{
		width:100%;

	}
	#thebottom{
		color:white;
		font-size: 13px;
		flex:0 0 52px;
	}
	#theicon{
		width:100%;
		height:60px;
		background-color:#1b1b1b;
	}
	#theic{
		font-size: 15px;
		margin:5px 0 0 10px;
	}
	#thecontent{
		padding-left:15px;
		padding-bottom: 5px;
	}
</style>
