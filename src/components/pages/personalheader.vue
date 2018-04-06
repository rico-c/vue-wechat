<template>
	<div id="personalheader">
		<router-link to="/myprofile">
		<div id="backtoprofile"><span>〈 </span><span>个人信息</span></div>
		</router-link>
		<div id="personalheader-img"><img src="../../assets/image/rico.png"></div>
	</div>
</template>
<script type="text/javascript">
	export default{}
</script>
<style type="text/css">
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