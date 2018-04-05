<template>
	<div id="myprofile">
		<div id="back-to-setting">
			<router-link to="/vme">
			<span><</span><span>我</span>
			</router-link>
		</div>
		<div class='profilecells'>
			<div class='profileheader'>
		       	<div class="profileheadername">
		       		<p>头像</p>
		       	</div>
		       	<div class="backimg">
		       		<img src="../../assets/image/rico.png">
		       	</div>
		    </div>
		    <div class='profilecell'>
		       	<div class="profilecellname">
		       		<p>名字</p>
		       	</div>
		       	<div class="profiledata">
		       		<p>曹昱RICO</p>
		       	</div>
		    </div>
		    <div class='profilecell'>
		       	<div class="profilecellname">
		       		<p>微信号</p>
		       	</div>
		       	<div class="profiledata">
		       		<p>ricardo_cy</p>
		       	</div>
		    </div>
		    <div class='profilecell'>
		       	<div class="profilecellname">
		       		<p>我的二维码</p>
		       	</div>
		       	<div class="profileqr">
		       		<img src="../../assets/image/chat-info-qr.png">
		       	</div>
		    </div>
		</div>
		<div class='profilecells'>
				<div class='profilecell'>
		         	<div class="profilecellname">
		           		<p>性别</p>
		         	</div>
		         	<div class="profiledata">
		           		<p>男</p>
		         	</div>
		        </div>
		        <div class='profilecell'>
		         	<div class="profilecellname">
		           		<p>地区</p>
		         	</div>
		         	<div class="profiledata">
		           		<p>北京 海淀</p>
		         	</div>
		        </div>
		        <div class='profilecell'>
		         	<div class="profilecellname">
		           		<p>个性签名</p>
		         	</div>
		         	<div class="profiledata">
		           		<p>后海大草鱼</p>
		         	</div>
		        </div>
		</div>
	</div>
</template>
<script type="text/javascript">
	export default {

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
	#back-to-setting a:link {     
		color: white;   
		text-decoration: none;   
	}   
	#back-to-setting a:visited {   
		color: white;   
		text-decoration: none;   
	}   
	#back-to-setting a:hover {    
		color: white;   
		text-decoration: underline;   
	}   
	.backimg img{
		width:55px;
		height:55px;
		margin:0 25px 0 0;
	}
	.backimg{
		float:right;
	}
	.profilecells{
		width:100%;
		border-top: solid 0.5px #d9d9d9;
		margin:10px 0 12px 0;
	}
	.profilecellname{
		font-size: 15px;
		display: inline-block;
		margin:5px 0px 5px 10px;
		vertical-align: middle;
	}
	.profilecell{
		width:100%;
		border-bottom: solid 0.5px #d9d9d9;
		margin:0px;
		background-color: white;
	}
	.profileheadername{
		font-size: 15px;
		display: inline-block;
		margin:20px 0 0 10px;
		vertical-align: middle;
	}
	.profileheader{
		width:100%;
		border-bottom: solid 0.5px #d9d9d9;
		margin:0px;
		background-color: white;
		height:60px;
	}
	.profiledata{
		float:right;
		font-size: 12px;
		margin: 5px 10px 0 0;
		color:#797979
	}
	.profileqr{
		float:right;
	}
	.profileqr img{
		width:20px;
		height:20px;
		margin:5px 25px 0 0;
	}
</style>