<template>
	<div id="photo">

		<!-- <router-link to="/albums"> -->
			<div id="toalbum" @click="back">
				<span>〈 </span><span>返回</span>
			</div>
		<!-- </router-link> -->

		<div id="thephoto"><img :src="thepicture.imgs"></div>
		<div id="thebottom">
			<div id="thecontent">{{thepicture.content}}</div>
			<div id="theicon">
				<div id="theic">&nbsp;&nbsp;♡赞&nbsp;&nbsp;&nbsp;□评论</div>
			</div>>
		</div>
	</div>
</template>
<script type="text/javascript">
	export default{
		computed: {
            userInfo() {
                return this.$route.query.contactid;
            },
            thepicture() {
            	return this.$route.query.thepic;
            }
        },
        methods:{
			back(){
				this.$router.go(-1)
			}
		}
	}
</script>
<style type="text/css">
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
