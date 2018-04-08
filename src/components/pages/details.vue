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
		          	<img :src="userInfo.headerimg">
		        </div>
		        <div class="detailheadername">
		          	<div id="contactname">
		          		<span>{{userInfo.name}}</span>
		          		<span class="gender" :class="[userInfo.sex==0?'gender-female':'gender-male']"></span>
		          	</div>
		          	<div>
		          		<span>微信号:</span>
		          		<span>{{userInfo.id}}</span>
		          	</div>
		          	<div>
		          		<span>昵称:</span>
		          		<span>{{userInfo.name}}</span>
		          	</div>
		        </div>
		    </div>
		    </div>
		    <div class='detailcells'>
				<div class='detailcell'>
		         	<div class="detailcellname">
		           		<p>地区</p>
		         	</div>
		         	<div class="detailcontent">
		         		{{userInfo.region}}
		         	</div>
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
		         	<div class="detailcontent">
		         		{{userInfo.note}}
		         	</div>
		        </div>
			</div>
			<div class="buttongreen"><p>发消息</p></div>
			<div class="buttonwhite"><p>视频通话</p></div>
	</div>
</template>
<script type="text/javascript">export default{
	computed: {
            userInfo() {
                return this.$route.query.contactid;
            }
        }
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
		margin:13px 0 0 0;
		border-top: solid 0.5px #d9d9d9;
	}
	.detailheader{
		width:60px;
		height:60px;
		margin:3px;
	}
	.detailheadername span{
		font-size: 10px;
		color:grey;

	}
	.detailcellname{
		font-size: 14px;
		margin:8px 5px 8px 10px;
		width:65px;
	}
	.detailcontent{
		font-size: 14px;
		margin:8px 0 8px 0;
	}
	#contactname span{
		color:black;
		font-size:14px;
	}
	.gender-male {
	    background: url("../../assets/image/contact_male.png");
	    background-repeat: no-repeat;
   		background-size: contain;
    	background-position: 50%;
	}

	.gender-female {
    	background: url("../../assets/image/contact_female.png");
    	background-repeat: no-repeat;
    	background-size: contain;
    	background-position: 50%;
	}	
	.gender{
		display: inline-block;
		width:14px;
		height:14px;
		position:relative;
		top:2px;
	}
</style>