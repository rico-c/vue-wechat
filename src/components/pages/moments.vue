<template>
	<div id="moments">
		<div id="backtoexplore">
			<router-link to="/vexplore">
				<span>〈 </span><span>返回</span>
			</router-link>
		</div>
		<div id="mybackground"></div>
		<div id="nameandheader">
					<span>曹昱RICO</span>
					<span><img src="../../assets/image/rico.png"></span>
		</div>	
		<div id="mymoments">
			<div id="momentslice"></div>
		</div>
	</div>
</template>
<script type="text/javascript">
	export default{ 
	}
</script>
<style type="text/css">
	#mybackground{
		position:relative;
		width:100%;
		height:200px;
		background: url("../../assets/image/mybackground.jpg");
		background-repeat: no-repeat;
    	background-size: contain;
/*    	background-position: 50%;*/
		}
	#backtoexplore{
		position:fixed;
		top:12px;
		left:10px;
		color:white;
		z-index:100;
	}
	#backtoexplore a{
		color:white;
	}
	#nameandheader{
		position:fixed;
		right:10px;
		top:210px;
	}
	#nameandheader img{
		width:55px;
		height:55px;
		border:solid 0.5px #d9d9d9;
	}
	#nameandheader span{
		color:white;
		vertical-align:top;
	}
</style>