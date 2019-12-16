<template>
  <el-card style="margin-bottom:20px;">
    <div slot="header" class="clearfix">
      <span>个人资料</span>
    </div>

    <div class="user-profile">
      <div class="box-center">
        <!-- <pan-thumb :image="user.avatar" :height="'100px'" :width="'100px'" :hoverable="false">
          <div>Hello</div>
          {{ user.role }}
        </pan-thumb>-->
        <img :src="user.avatar" class="user-avatar">
      </div>

      <div class="box-center">
        <div class="user-name text-center">{{ user.name }}</div>
        <div class="user-role text-center text-muted">
          {{ user.role | uppercaseFirst }}
        </div>
      </div>
    </div>

    <div class="user-bio">
      <div class="user-education user-bio-section">
        <div class="user-bio-section-header">
          <i class="el-icon-postcard" />
          <!-- <svg-icon icon-class="message" /> -->
          <span>个人简介</span>
        </div>
        <div class="user-bio-section-body">
          <div class="text-muted">
            {{ user.introduction }}
          </div>
        </div>
      </div>

      <div class="user-bio-section">
        <div class="user-bio-section-header">
          <i class="el-icon-collection-tag" />
          <span>标签</span>
        </div>
        <div class="user-bio-section-body">
          <el-tag type="success">帅~</el-tag>
          <el-tag type="info">懒癌晚期</el-tag>
          <el-tag type="warning">科技宅</el-tag>
          <el-tag type="danger">大长腿</el-tag>
        </div>
      </div>

      <div class="user-skills user-bio-section">
        <div class="user-bio-section-header">
          <i class="el-icon-collection" />
          <span>技能</span>
        </div>
        <div class="user-bio-section-body">
          <div class="progress-item">
            <span>开挖掘机</span>
            <el-progress :percentage="70" />
          </div>
          <div class="progress-item">
            <span>电气焊</span>
            <el-progress :percentage="38" />
          </div>
          <div class="progress-item">
            <span>吃</span>
            <el-progress :percentage="100" />
          </div>
        </div>
      </div>
    </div>
  </el-card>
</template>

<script>
// import PanThumb from '@/components/PanThumb'

export default {
  // components: { PanThumb },
  props: {
    user: {
      type: Object,
      default: () => {
        return {
          name: '',
          email: '',
          avatar: '',
          roles: ''
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.box-center {
  margin: 0 auto;
  display: table;
}

.text-muted {
  color: #777;
}

.user-profile {
  .user-name {
    font-weight: bold;
  }

  .box-center {
    padding-top: 10px;
  }

  .user-role {
    padding-top: 10px;
    font-weight: 400;
    font-size: 14px;
  }

  .box-social {
    padding-top: 30px;

    .el-table {
      border-top: 1px solid #dfe6ec;
    }
  }

  .user-follow {
    padding-top: 20px;
  }
}

.user-bio {
  margin-top: 20px;
  color: #606266;

  span {
    padding-left: 4px;
  }

  .user-bio-section {
    font-size: 14px;
    padding: 15px 0;

    .user-bio-section-header {
      border-bottom: 1px solid #dfe6ec;
      padding-bottom: 10px;
      margin-bottom: 10px;
      font-weight: bold;
    }
  }
}

.user-avatar {
  width: 100px;
  height: 100px;
  border-radius: 50%;
}

.el-tag {
  margin: 10px 20px 0px 0px;
}
</style>
