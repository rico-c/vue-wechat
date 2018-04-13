<template>
	<div id="vfooter">	
		<nav>
			<router-link to="/vdialogue" tag="dl">
				<dt class= 'iconfont icon-wechat'></dt>
				<dd>微信</dd>
			</router-link>
			<router-link to="/vcontact" tag="dl">
				<dt class= 'iconfont icon-contact'></dt>
				<dd>通讯录</dd>
			</router-link>
			<router-link to="/vexplore" tag="dl">
				<dt class= 'iconfont icon-find'></dt>
				<dd>发现</dd>
			</router-link>
			<router-link to="/vme" tag="dl">
				<dt class= 'iconfont icon-me'></dt>
				<dd>我</dd>
			</router-link>				
		</nav>
	</div>
</template>
<script type="text/javascript">
	export default{

	}
</script>
<style type="text/css">
	#vfooter{
		position:fixed;
		width:100%;
		height:58px;
		left:0px;
		bottom:0px;
		border-top:solid 1px #CCCCCC;
	}
	#vfooter nav{
		position:fixed;
		width:100%;
		height:50px;
		left:0px;
		bottom:0;
		width:100%;
		display:-webkit-flex;
		display:flex;
		-webkit-box-flex:1;
		-ms-flex-positive:1;
		-webkit-flex-grow:1;
		flex-grow:1;
		text-align:center;
		margin:0 auto;
		font-size:12px;
		color:#797979;
		background:#f9f9f9;
		padding-top:8px;
	}
	dl{
		width:25%;
	}
	dd{
		-webkit-margin-start:0px
	}
	.iconfont {
		font-size: 27px
	}
</style>