<template>
	<div id="photo">

		<router-link to="/albums">
			<div id="toalbum">
				<span>〈 </span><span>返回</span>
			</div>
		</router-link>

		<div id="thephoto"><img :src="theInfo.imgs"></div>
		<div id="thebottom">
			<div id="thecontent">{{theInfo.content}}</div>
			<div id="theicon">
				<div id="theic">&nbsp;&nbsp;♡赞&nbsp;&nbsp;&nbsp;□评论</div>
			</div>>
		</div>
	</div>
</template>
<script type="text/javascript">
	export default{
		computed: {
            theInfo() {
                return this.$route.query.contactid;
            }
        }
	}
</script>
<style type="text/css">
	#toalbum{
		position:fixed;
		top:12px;
		left:10px;
		color:white;
		z-index:100;
	}
	#toalbum a{
		color:white;
	}
	#photo{
		background-color:black;
		width:100%;
		height:100%;
		display: flex;
		justify-content:space-between;
        flex-direction:column;
	}
	#thephoto{
		width:100%;
		top:50%;
		margin-top:-30px;
	}
	#thephoto img{
		width:100%;

	}
	#thebottom{
		color:white;
		font-size: 13px;
		flex:0 0 52px;
	}
	#theicon{
		width:100%;
		height:60px;
		background-color:#1b1b1b;
	}
	#theic{
		font-size: 15px;
		margin:5px 0 0 10px;
	}
	#thecontent{
		padding-left:15px;
		padding-bottom: 5px;
	}
</style>
