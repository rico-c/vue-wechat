<template>
	<div id="myqr">
		<!-- <router-link to="/myprofile"> -->
		<div id="backtoprofile" @click="back">
			<span>〈 </span><span>个人信息</span>
		</div>
		<!-- </router-link> -->
		<div class="qrimg">
			<img src="../../assets/image/myqr.png">
		</div>
	</div>
</template>
<script type="text/javascript">
	export default{
		methods:{
			back(){
				this.$router.go(-1)
			}
		}
	}
</script>
<style type="text/css">
	.middle{
		height:100%;
	}
	#myqr{
		background-color: #2d3132;
		height:100%;
	}
	.qrimg{
		width:90%;
		margin:0 auto;
		position:relative;
		top:70px;
	}
	.qrimg img{
		width:100%;
	}
	#backtoprofile{
		position:fixed;
		top:12px;
		left:10px;
		color:white;
		z-index:100;
	}
</style>