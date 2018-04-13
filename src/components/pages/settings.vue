<template>
	<div id="settings">
		<div id="back-to-setting" @click="back">
			<!-- <router-link to="/vme"> -->
			<span>〈 </span><span>我</span>
			<!-- </router-link> -->
		</div>
		<div class='cells'>
			<div class='cell'>
	         	<div class="cellname">
	           		<p>账号与安全</p>
	         	</div>
	         </div>
		</div>
		<div class='cells'>
			<div class='cell'>
	         	<div class="cellname">
	           		<p>新消息通知</p>
	         	</div>
	         </div>
	         <div class='cell'>
	         	<div class="cellname">
	           		<p>隐私</p>
	         	</div>
	         </div>
	         <div class='cell'>
	         	<div class="cellname">
	           		<p>通用</p>
	         	</div>
	         </div>
		</div>
		<div class='cells'>
			<div class='cell'>
	         	<div class="cellname">
	           		<p>帮助与反馈</p>
	         	</div>
	         </div>
	         <div class='cell'>
	         	<div class="cellname">
	           		<p>关于微信</p>
	         	</div>
	         </div>
		</div>
		<div class='cells'>
			<div class='cell'>
	         	<div class="cellname">
	           		<p>插件</p>
	         	</div>
	         </div>
		</div>
		<div class='cells'>
	         	<div class="cellname">
	           		<p>切换账号</p>
	         	</div>
		</div>
		<div class='cells'>
	         	<div class="cellname">
	           		<p>退出登录</p>
	         </div>
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
	#back-to-setting{
		position:fixed;
		top:12px;
		left:10px;
		color:white;
		z-index:100;
	}
	#back-to-setting a{
		color:white;
	}
</style>