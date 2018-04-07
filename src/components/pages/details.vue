<template>
	<div id="details">
			<div id="back">
				<router-link to="/vcontact">
				<span>〈 </span><span>返回</span>
				</router-link>
			</div>
			<div class='detailcells'>
			<div class='detailcell'>
				<div class='detailheader'>
		          	<img src="">
		        </div>
		        <div class="detailheadername">
		          	<h4>曹昱</h4>
		          	<p>微信号</p>
		          	<p>hhh</p>
		        </div>
		    </div>
		    </div>
		    <div class='detailcells'>
				<div class='detailcell'>
		         	<div class="detailcellname">
		           		<p>地区</p>
		         	</div>
		         	<div class="detailcontent"></div>
		        </div>
		        <div class='detailcell'>
		         	<div class="detailcellname">
		           		<p>个人相册</p>
		         	</div>
		         	<div class="detailcontent"></div>
		        </div>
		        <div class='detailcell'>
		         	<div class="detailcellname">
		           		<p>个性签名</p>
		         	</div>
		         	<div class="detailcontent"></div>
		        </div>
			</div>
			<div class="buttongreen"><p>发消息</p></div>
			<div class="buttonwhite"><p>视频通话</p></div>
	</div>
</template>
<script type="text/javascript">export default{

}</script>
<style type="text/css">
	#back{
		position:fixed;
		top:12px;
		left:10px;
		color:white;
		z-index:100;
	}
	#back a{
		color:white;
	}
	.detailcell{
		width:100%;
		display:flex;
		background-color: white;
		border-bottom: solid 0.5px #d9d9d9;
	}
	.detailcells{
		margin:15px 0 0 0;
		border-top: solid 0.5px #d9d9d9;
	}
	.detailheader{
		width:60px;
		height:60px;
		margin:3px;
	}
	.detailheadername p{
		font-size: 13px;
		color:grey;
	}
	.detailcellname{
		font-size: 15px;
		margin:8px 0 8px 10px;
	}
</style>