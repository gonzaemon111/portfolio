<template>
  <div class="Skills">
    <h2>Gonzaemon's Skills</h2>
    <el-table :data="tableData" style="width: 100%; text-align:center;" default-expand-all>
      <el-table-column type="expand">
        <template slot-scope="props">
          <p>スキル: <el-rate v-model="props.row.value" disabled show-score text-color="#ff9900"></el-rate></p>
          <p>経験歴: {{ props.row.date }}</p>
          <p>タグ: <el-tag v-for="item in props.row.tags" :key="item.label" :type="item.type" effect="dark"> {{ item.label }} </el-tag></p>
          <p>説明: {{ props.row.explanation }}</p>
        </template>
      </el-table-column>
      <el-table-column label="Name" prop="name">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [
          {
            name: 'Ruby',
            value: 5.0,
            date: '約2年',
            tags: [{ type: '', label: 'サーバー' }],
            explanation: 'Ruby On Railsを使用して様々なアプリを作ってきました。また、インターンなどでも多様なアプリ開発にも従事してきました。'
          },
          {
            name: 'C',
            value: 3.0,
            date: '約3年',
            tags: [{ type: 'success', label: 'アルゴリズム' }],
            explanation: '学校の授業をきっかけに、アルゴリズムの勉強の際に書いてきました！やはりポインタなどPC内部の構造も含めて学ぶには、やはりCが一番だと感じています。'
          },
          {
            name: 'Go',
            value: 3.0,
            date: '半年',
            tags: [{ type: '', label: 'サーバー' }, { type: 'success', label: 'アルゴリズム' }, { type: 'danger', label: '興味あり' }],
            explanation: 'Gin や Gormを使った個人的にAPI開発をしています。ソートや８王妃などのアルゴリズムの勉強もしています。'
          },
          {
            name: 'Python',
            value: 3.8,
            date: '半年',
            tags: [{ type: '', label: 'サーバー' },{ type: 'danger', label: '興味あり' }],
            explanation: 'Flaskを使った簡易API開発とMNISTを使って手書き文字認識なども経験済み。最近では機械学習にも興味があり、少しずつ手をつけています。'
          },
          {
            name: 'HTML, CSS, JavaScript',
            value: 2.0,
            date: '2,3ヶ月',
            tags: [{ type: '', label: 'フロント' },{ type: 'danger', label: '興味あり' }],
            explanation: 'Three.jsなどのWebGLに興味を持ちはじめ、フロントエンドの勉強を最近はじめました。NuxtやReactなどもかけるようになりたいと考えています。'
          },
          {
            name: 'TypeScript',
            value: 1.5,
            date: '2,3ヶ月',
            tags: [{ type: '', label: 'フロント' },{ type: 'danger', label: '興味あり' }],
            explanation: 'JSは動的言語で個人的には、安全性の高いTSを使ってフロントの勉強をしたいと考えているため、勉強しはじめました。'
          },
          {
            name: 'Docker',
            value: 3.2,
            date: '約1年',
            tags: [{ type: '', label: 'インフラ' }],
            explanation: 'アプリ開発時にはDocker for Macを使って開発環境を整えています。基本的なimageやコンテナについては理解しており、Kubernetessに興味を持っています。'
          },
          {
            name: 'AWS',
            value: 2.5,
            date: '4,5ヶ月',
            tags: [{ type: '', label: 'インフラ' }],
            explanation: '色々なサービスについての知識は勉強済みで、EC2やRDSなどの定番のサービスは使用したことがあります。'
          }
        ]
      }
    }
  }
</script>

<style scoped>
.Skills {
  padding: 10%;
  background: linear-gradient(to bottom, #a6d900 0%, #ff4454 100%);
  animation: huerotator 3s infinite alternate;
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
