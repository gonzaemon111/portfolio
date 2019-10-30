<template>
  <div class="Profile">
    <h1>Gonzaemon's Portfolio</h1>
    <div class="MyProfileImageDiv">
      <div class="inner">
        <el-image :src="myProfileImage" class="border_radius_10px"></el-image>
        <div class="MyProfileSentence">
          {{ msg }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MyProfileImage from "@/assets/MyProfile.jpg";
export default {
  data() {
    return {
      msg: `某W大学 4年 情報理工学科。
      普段は、サーバサイドのAPI開発をしていてRuby、Python、Goを書けます。
      最近は、VueとReactでフロントエンドも勉強中です。普段の開発環境としてDockerを使っており、AWSやGCPなどのインフラやMySQL、Redisなどのミドルウェアもかなり幅広く触れています。`,
      myProfileImage: MyProfileImage,
    };
  }
}
</script>

<style scoped>
.Profile {
  text-align: center;
}
.MyProfileImageDiv {
  
}
.inner{
}
.border_radius_10px {
  height: 10rem;
  width: 10rem;
  border-radius: 10px;
}
.MyProfileSentence {
  text-align: left;
  padding-top: 5%;
  padding-left: 10%;
  padding-right: 10%;
}
</style>
