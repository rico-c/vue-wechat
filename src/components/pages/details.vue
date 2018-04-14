<template>
	<div id="details">
			<div id="back" @click="back">
				<span>〈 </span><span>返回</span>
			</div>
			<div class='detailcells'>
			<div class='detailcell'>
				<div class='detailheader' v-if="contacts[usernum]">
		          	<img :src="contacts[usernum].headerimg">
		        </div>
		        <div class="detailheadername" v-if="contacts[usernum]">
		          	<div id="contactname">
		          		<span>{{contacts[usernum].name}}</span>
		          		<span class="gender" :class="[contacts[usernum].sex==0?'gender-female':'gender-male']"></span>
		          	</div>
		          	<div>
		          		<span>微信号:</span>
		          		<span>{{contacts[usernum].id}}</span>
		          	</div>
		          	<div>
		          		<span>昵称:</span>
		          		<span>{{contacts[usernum].name}}</span>
		          	</div>
		        </div>
		    </div>
		    </div>
		    <div class='detailcells'>
				<div class='detailcell'>
		         	<div class="detailcellname">
		           		<p>地区</p>
		         	</div>
		         	<div class="detailcontent" v-if="contacts[usernum]">
		         		{{contacts[usernum].region}}
		         	</div>
		        </div>
		        <router-link :to="{path:'/albums',query:{contactid:usernum}}">
		        <div class='detailcell'>
		         	<div class="detailcellname">
		           		<p>个人相册</p>
		         	</div>
		         	<div class="detailcontent" v-if="contacts[usernum]">
		         		<div class="albumshow" v-for="album in contacts[usernum].momentsimg">
		         			<img :src="album.imgs">
		         		</div>
		         	</div>
		        </div>
			    </router-link>
		        <div class='detailcell'>
		         	<div class="detailcellname">
		           		<p>个性签名</p>
		         	</div>
		         	<div class="detailcontent" v-if="contacts[usernum]">
		         		{{contacts[usernum].note}}
		         	</div>
		        </div>
			</div>
			<router-link :to="{path:'/chatview',query:{chatid:contacts[usernum].chatnum,chatidname:contacts[usernum].name}}">
				<div class="buttongreen"><p>发消息</p></div>
			</router-link>
			<div class="buttonwhite"><p>视频通话</p></div>
	</div>
</template>
<script type="text/javascript">
	import axios from 'axios'
	export default{
	data() {
       	return {
          	contactinfo:{},
         	contacts:[]
        }
    },
	computed: {
            usernum() {
                return this.$route.query.contactid;
            }
        },
    methods:{
			back(){
				this.$router.go(-1)
			}
		},
	created() {
    		axios.get('static/data.json').then(response => 
     			(this.contacts=response.data.contacts)
    		);
  		}
    }
</script>
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
		margin:10px;
	}
	.detailheader img{
		width:60px;
		height:60px;
		border-radius: 4px;
	}
	.detailheadername span{
		font-size: 10px;
		color:grey;
		
	}
	.detailheadername{
		margin-top:8px;
	}
	.detailcellname{
		font-size: 14px;
		margin:8px 5px 8px 10px;
		width:65px;
		display: flex;
		align-items:center;
	}
	.detailcontent{
		font-size: 14px;
		margin:8px 0 8px 0;
		display: flex;
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
	.albumshow img {
		width:50px;
		height:50px;
	}
	.albumshow{
		margin:0 15px 0 0;
		overflow: hidden;
	}
</style>