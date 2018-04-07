<template>
	<div id="contactpage">
		<div class='contactcells'>
				<div class='contactcell'>
					<div class='contactcellimg'>
		           		<img src="../assets/image/contact_top-friend-notify.png">
		         	</div>
		         	<div class="contactcellname">
		           		<p>新的朋友</p>
		         	</div>
		        </div>
		        <div class='contactcell'>
					<div class='contactcellimg'>
		           		<img src="../assets/image/contact_top-addgroup.png">
		         	</div>
		         	<div class="contactcellname">
		           		<p>群聊</p>
		         	</div>
		        </div>
		        <div class='contactcell'>
					<div class='contactcellimg'>
		           		<img src="../assets/image/contact_top-tag.png">
		         	</div>
		         	<div class="contactcellname">
		           		<p>标签</p>
		         	</div>
		        </div>
		        <div class='contactcell'>
					<div class='contactcellimg'>
		           		<img src="../assets/image/contact_top-offical.png">
		         	</div>
		         	<div class="contactcellname">
		           		<p>公众号</p>
		         	</div>
		        </div>
		</div>
		<div class='contactcells'>		
			<div class='contactcell' v-for='contactinfo in contacts'>
			<router-link :to="{path:'/details',query:{contactid:contactinfo}}">	
				<div class='contactcellimg'>
		           	<img src="contactinfo.headerimg">
		         </div>
		         <div class='contactcellname'>
					{{contactinfo.name}}
				</div>
			</router-link>
			</div>		
		</div>
	</div>
</template>
<script type="text/javascript">
	import axios from 'axios'
	export default{
		data() {
       	 	return {
         	  	contacts:[]
        }},
		created() {
    		axios.get('static/data.json').then(response => 
     			(this.contacts=response.data.contacts)
    		);
  		},
	}
</script>
<style type="text/css">
	.contactcells{
		width:100%;
		border-top: solid 0.5px #d9d9d9;
		margin:0 0 13px 0;
		display:flex;
		background-color: white;
		flex-direction: column;
	}
	.contactcellimg img{
		width:30px;
		height:30px;
		border-radius: 3px;		
	}
	.contactcellimg{
		display: inline-block;
		margin:5px 10px 0 10px
	}
	.contactcellname{
		font-size: 15px;
		display: inline-block;
	}
	.contactcell{
		width:100%;
		border-bottom: solid 0.5px #d9d9d9;
		margin:0px;
		display:flex;
		align-items: center;
		background-color: white;
	}
	.contactcell a{
		margin:0px;
		display:flex;
		align-items: center;
	}
</style>