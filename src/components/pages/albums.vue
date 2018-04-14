<template>
	<transition name="fade">
	<div id="albums">
			<div id="todetails" @click="back">
				<span>〈 </span><span>详细资料</span>
			</div>
		<div id="backtoexplore">
		</div>
		<div id="mybackground" v-if="contacts[usernum]">
			<img :src="contacts[usernum].backgroundimg">
		</div>
		<div id="nameandheader" v-if="contacts[usernum]">
					<span>{{contacts[usernum].name}}</span>
					<router-link :to="{path:'/details',query:{contactid:usernum}}">
					<span><img :src="contacts[usernum].headerimg"></span>
					</router-link>
		</div>	
		<div id="thenote" v-if="contacts[usernum]">
			<span>{{contacts[usernum].note}}</span>
		</div>
		<div id="mymoments" v-if="contacts[usernum]">
			<div id="momentslice" v-for="themoment in contacts[usernum].momentsimg">
				<div id="timestamp">{{themoment.time}}小时前</div>
				<router-link :to="{path:'/photo',query:{contactid:usernum,thepic:themoment.num}}">
					<div><img :src="themoment.imgs"></div>
				</router-link>
				<router-link :to="{path:'/photo',query:{contactid:usernum,thepic:themoment.num}}">
					<div>{{themoment.content}}</div>
				</router-link>
			</div>
		</div>
	</div>
</transition>
</template>
<script type="text/javascript">
	import axios from 'axios'
	export default{
	data() {
       	return {
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
	.fade-enter-active{
 		 transition: opacity .3s;
	}
	.fade-enter{
 		 opacity: 0;
	}
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