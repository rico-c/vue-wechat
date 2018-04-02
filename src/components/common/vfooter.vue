<template>
	<div id="vfooter">
		<nav>
			<router-link to="" tag="dl">
				<dt class= 'iconfont icon-wechat'></dt>
				<dd>微信</dd>
			</router-link>
			<router-link to="" tag="dl">
				<dt class= 'iconfont icon-contact'></dt>
				<dd>通讯录</dd>
			</router-link>
			<router-link to="" tag="dl">
				<dt class= 'iconfont icon-explore'></dt>
				<dd>发现</dd>
			</router-link>
			<router-link to="" tag="dl">
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
	#vfooter nav{
		position:fixed;
		width:100%;
		height:50px;
		left:0px;
		bottom:0;
		width:100%;
		display:flex;
		flex:1;
	}
	router-link{
		width:25%;
	}
</style>