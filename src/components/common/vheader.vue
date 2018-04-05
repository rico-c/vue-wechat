<template>
	<div id="vheader">
		{{$route.meta.title||'微信'}}
	</div>
</template>
<script type="text/javascript">
	export default{}
</script>
<style type="text/css">
	#vheader{
	  position: fixed;
	  height: 45px;
	  line-height: 45px;
	  background: #1b1b1b;
	  font-size: 17px;
	  color: #fff;
	  top: 0;
	  left:0;
	  width: 100%;
	  text-align: center;
	}
</style>
