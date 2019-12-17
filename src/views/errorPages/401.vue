<template>
  <div class="errPage-container">
    <el-row>
      <el-col :sm="12" :xs="24">
        <img :src="errImg" class="error-img" alt="401">
      </el-col>
      <el-col :sm="12" :xs="24">
        <!-- <el-button icon="el-icon-arrow-left" class="pan-back-btn" @click="back">
          返回
        </el-button> -->
        <h1 class="text-jumbo text-ginormous">
          Oops!
        </h1>
        <h2>抱歉，你没有权限访问此页面</h2>
        <h6>如有不满请联系你领导</h6>
        <ul class="list-unstyled">
          <li>或者你可以去:</li>
          <li class="link-type">
            <router-link to="/dashboard">
              回首页
            </router-link>
          </li>
          <li>
            <a href="#" @click.prevent="dialogVisible = true">点我看图</a>
          </li>
        </ul>
      </el-col>
    </el-row>
    <el-dialog :visible.sync="dialogVisible" title="随便看">
      <img :src="ewizardClap" class="pan-img">
    </el-dialog>
  </div>
</template>

<script>
import errImg from '@/assets/401_images/401.png'

export default {
  name: 'Page401',
  data() {
    return {
      errImg: errImg + '?' + +new Date(),
      ewizardClap:
        'https://wpimg.wallstcn.com/007ef517-bafd-4066-aae4-6883632d9646',
      dialogVisible: false
    }
  },
  methods: {
    back() {
      if (this.$route.query.noGoBack) {
        this.$router.push({ path: '/dashboard' })
      } else {
        this.$router.go(-1)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.errPage-container {
  width: 800px;
  max-width: 90%;
  margin: 100px auto;
  .pan-back-btn {
    background: #008489;
    color: #fff;
    border: none !important;
  }
  .error-img {
    min-height: 320px;
  }
  .pan-gif {
    margin: 0 auto;
    display: block;
  }
  .pan-img {
    display: block;
    margin: 0 auto;
    width: 100%;
  }
  .text-jumbo {
    font-size: 60px;
    font-weight: 700;
    color: #484848;
  }
  .list-unstyled {
    font-size: 14px;
    li {
      padding-bottom: 5px;
    }
    a {
      color: #008489;
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    }
  }
}
</style>
