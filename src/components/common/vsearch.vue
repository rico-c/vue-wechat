<template>
	<div id='searchbar'>
		<div id='searchinput'>
			<input placeholder="搜索" id='topsearch'>
		</div>
	</div>
</template>
<script type="text/javascript">
export default {}
</script>
<style type="text/css">
	#searchbar{
		position:relative;
		width:100%;
		height:35px;
		background:#efeff4;
	}
	#searchinput{
		position:absolute;
		width:100%;
		height:28px;
	}
	#searchinput input{
		position:relative;
		border-radius: 5px;
		border:0px;
		height:20px;
		width:94%;
		top: 5px;
     	left:3%;
	}
	#topsearch:focus{
		border:0;
	}
	input::-ms-input-placeholder{text-align: center;}
	input::-webkit-input-placeholder{text-align: center;}
</style>
