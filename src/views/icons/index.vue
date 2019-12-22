<template>
  <div class="app-container">
    <el-card>
      <p class="title"><i class="el-icon-s-opportunity" />可以使用的图标</p>

      <el-tabs type="border-card">
        <el-tab-pane label="Element-UI Icons">
          <div class="grid">
            <div
              v-for="item of elementIcons"
              :key="item"
              @click="handleClipboard(generateElementIconCode(item), $event)"
            >
              <el-tooltip placement="top">
                <div slot="content">
                  {{ generateElementIconCode(item) }}
                </div>
                <div class="icon-item">
                  <i :class="'el-icon-' + item" />
                  <span>{{ item }}</span>
                </div>
              </el-tooltip>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="阿里Iconfonts">
          <div class="grid">
            <div
              v-for="item of svgIcons"
              :key="item"
              @click="handleClipboard(generateIconCode(item), $event)"
            >
              <el-tooltip placement="top">
                <div slot="content">
                  {{ generateIconCode(item) }}
                </div>
                <div class="icon-item">
                  <svg-icon :icon-class="item" class-name="disabled" />
                  <span>{{ item }}</span>
                </div>
              </el-tooltip>
            </div>
          </div>
        </el-tab-pane>
      </el-tabs>
    </el-card>
  </div>
</template>

<script>
import clipboard from '@/utils/clipboard'
import svgIcons from './svg-icons'
import elementIcons from './element-icons'

export default {
  name: 'Icons',
  data() {
    return {
      svgIcons,
      elementIcons
    }
  },
  methods: {
    generateIconCode(symbol) {
      return `<svg-icon icon-class="${symbol}" />`
    },
    generateElementIconCode(symbol) {
      return `<i class="el-icon-${symbol}" />`
    },
    handleClipboard(text, event) {
      clipboard(text, event)
    }
  }
}
</script>

<style lang="scss" scoped>

  .title {
    font-size: 14px;
    margin-bottom: 20px;
    i {
      margin-right: 5px;
      color: #ffc107;
      font-size: 18px;
    }
  }

  .grid {
    position: relative;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  }

  .icon-item {
    margin: 20px;
    height: 85px;
    text-align: center;
    width: 100px;
    float: left;
    font-size: 24px;
    color: #606266;
    cursor: pointer;
    &:hover {
      i,
      svg {
        color: #5cb6ff;
      }
      span {
        color: #5cb6ff;
      }
    }
  }

  span {
    display: block;
    font-size: 12px;
    margin-top: 10px;
  }

  .disabled {
    pointer-events: none;
  }

</style>
