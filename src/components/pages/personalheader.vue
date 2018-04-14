<template>
	<transition name="fade">
	<div id="personalheader">
		<div id="backtoprofile" @click="back"> 
			<span>〈 </span><span>个人信息</span>
		</div>
		<div id="personalheader-img"><img src="../../assets/image/rico.png"></div>
	</div>
</transition>
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
	.fade-enter-active{
 		 transition: opacity .3s;
	}
	.fade-enter{
 		 opacity: 0;
	}
	.middle{
		height:100%;
	}
	#personalheader{
		height:100%;
		background-color: black;
		position:relative;
		display:flex;
        align-items:center;
	}
	#personalheader-img{
		position:relative;
		width:100%;
		margin-top:-80px;
	}
	#personalheader-img img{
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