<template>
	<div id="albums">
		<router-link to="/details">
			<div id="todetails">
				<span>〈 </span><span>详细资料</span>
			</div>
		</router-link>
		<div id="backtoexplore">
		</div>
		<div id="mybackground">
			<img :src="theuserInfo.backgroundimg">
		</div>
		<div id="nameandheader">
					<span>{{theuserInfo.name}}</span>
					<router-link to="/details">
					<span><img :src="theuserInfo.headerimg"></span>
					</router-link>
		</div>	
		<div id="thenote">
			<span>{{theuserInfo.note}}</span>
		</div>
		<div id="mymoments">
			<div id="momentslice" v-for="themoment in theuserInfo.momentsimg">
				<div id="timestamp">{{themoment.time}}小时前</div>
				<router-link :to="{path:'/photo',query:{contactid:userInfo,thepic:themoment}}">
					<div><img :src="themoment.imgs"></div>
				</router-link>
				<router-link :to="{path:'/photo',query:{contactid:userInfo,thepic:themoment}}">
					<div>{{themoment.content}}</div>
				</router-link>
			</div>
		</div>
	</div>
</template>
<script type="text/javascript">
	export default{
	// data() {
 //       	return {
 //          	userInfo:{}
 //        }
 //    },
	computed: {
        theuserInfo() {
            return this.$route.query.contactid;
            }
        }
	}
</script>
<style type="text/css">
	#mybackground{
		width:100%;
		height:200px
	}
	#mybackground img{
		width:100%;
		height:200px;
	}
	#nameandheader{
		position:fixed;
		right:10px;
		top:220px;
	}
	#nameandheader img{
		width:55px;
		height:55px;
		border:solid 2px white;
	}
	#nameandheader span{
		color:white;
		vertical-align:top;
		text-shadow:1px 1px 1px black;
	}
	#mymoments{
		width:100%;
		margin:70px 0 0 0;
	}
	#momentslice{
		font-size: 14px;
		display: flex;
	}
	#momentslice div{
		margin:7px;
	}
	#momentslice img{
		width:55px;
		height:55px;
	}
	#timestamp{
		width:60px;
		flex:0 0 52px;
	}
	#todetails{
		position:fixed;
		top:12px;
		left:10px;
		color:white;
		z-index:100;
	}
	#todetails a{
		color:white;
	}
	#thenote{
		position:fixed;
		right:0px;
		top:285px;
		margin-right:10px;
		font-size: 12px;
		color:grey;
	}
</style>