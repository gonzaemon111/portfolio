<template>
  <div class="Work">
    <div class="cssgrid">
      <div class="skill-card" v-for="(item, index) in items" :key="index">
        <el-image :src="item.image" style="max-height:17rem;"></el-image>
        <div style="padding:1%;">
          <span>{{item.title}}</span>
          <br>
          <el-tag v-for="(tag, index) in item.tags" :key="index" :type="item.type" effect="dark"> {{ tag.label }} </el-tag>
          <div style="text-align:left;font-size:80%;"><span>制作期間 : {{item.term}}</span></div>
          <div style="text-align:left;font-size:80%;"><span>{{item.explanation}}</span></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PortFolioImage from "@/assets/PortFolio.jpg";
import QiitaNewsImage from "@/assets/QiitaNews.jpg";
import WaffleImage from "@/assets/Waffle.png";
import MyDiaryImage from "@/assets/MyDiary.jpg";
import HCRAIImage from "@/assets/HCRAI.png";
export default {
  data() {
    return {
      items: [
        {
          title: 'Waffle',
          image: WaffleImage,
          explanation: "早稲田大学生向け時間割単位管理アプリケーション！Dockerで開発環境を整えて4種類のDB(MySQL, Redis, ElasticSearch, DynamoDB)を使用。Ruby on Railsは最新6.0を使っている",
          tags: [
            { type: '', label: 'Ruby On Rails' },
            { type: 'danger', label: 'React Native' },
            { type: 'primary', label: 'TypeScript' },
            { type: 'primary', label: 'AWS' },
            { type: 'success', label: 'Docker' }
          ],
          term: '制作途中'
        },
        {
          title: 'MyDiary',
          explanation: "LineMessagingAPIを利用した日記アプリケーション。リマインダー機能も含んでいます。非同期処理や複雑なCRUD処理などの勉強もしました。",
          image: MyDiaryImage,
          tags: [
            { type: '', label: 'Ruby On Rails' },
            { type: '', label: 'Heroku' }
          ],
          term: '1ヶ月'
        },
        {
          title: 'QiitaNews',
          explanation: "Qiitaの新News記事をSlackのチャンネルに配信する簡易アプリケーション。簡単に実装したかったため、Ruby1枚のファイルで実装しました。",
          image: QiitaNewsImage,
          tags: [
            { type: '', label: 'Ruby' },
            { type: 'danger', label: 'Heroku' },
            { type: 'success', label: 'SlackAPI' }
          ],
          term: '3時間'
        },
        {
          title: 'HCR-AI',
          explanation: "HandWritten Character Recoginition(手書き文字認識)で機械学習の勉強として実装してみました。初Pythonだったので、文法の勉強も一からはじめました",
          image: HCRAIImage,
          tags: [
            { type: '', label: 'Python' },
            { type: 'success', label: '機械学習' }
          ],
          term: '約1ヶ月'
        },
        {
          title: 'PortFolio',
          explanation: "Vue.jsを使って、フロントエンド入門として作成。Google AnaylyticsやFireBase、レスポンシブデザインなどの勉強も兼ねて作成しました。今後はNuxtなどにも幅を広げていきたいです",
          image: PortFolioImage,
          tags: [
            { type: '', label: 'Vue.js' },
            { type: 'danger', label: 'Netlify' },
            { type: 'success', label: 'Firebase' }
          ],
          term: '2日'
        }
      ]
    };
  }
}
</script>

<style scoped>
.Work {
  background: linear-gradient(to bottom, #a6d900 0%, #ff4454 100%);
  animation: huerotator 3s infinite alternate;
  background: linear-gradient(to bottom, #a6d900 0%, #ff4454 100%);
  animation: huerotator 3s infinite alternate;
}

.cssgrid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-auto-rows: 1fr;
  grid-gap: 0.8em;
  padding: 0.8em;
  border-radius: 10%;
}

.cssgrid > .skill-card {
  background: #ddd;
  overflow: auto;
  min-width: 0;
  padding: 1em;
  text-align:center
}

@keyframes huerotator {
  0% {
    -webkit-filter: hue-rotate(0deg);
    filter: hue-rotate(0deg);
  }

  100% {
    -webkit-filter: hue-rotate(360deg);
    filter: hue-rotate(360deg);
  }
}
</style>
