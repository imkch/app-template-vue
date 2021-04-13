<template>
  <div class="svg-viewer">
    <div v-for="item in svgIcons" :key="item" class="svg-item" @click="handleIconClick(item)">
      <svg-icon :name="item" width="24px" height="24px"/>
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SvgViewer',
  computed: {
    svgIcons() {
      return require.context('../../svgs', false, /\.svg$/)
        .keys()
        .map(name => name.replace(/^\.\/([\w-]+)\.svg/, '$1'));
    }
  },
  methods: {
    async handleIconClick(name) {
      const iconCode = `<svg-icon name="${name}" />`;
      await navigator.clipboard.writeText(`${iconCode}`);
      alert(`${iconCode}图标代码已复制到剪切板`);
    }
  }
};
</script>
<style scoped>
.svg-viewer {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}
.svg-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 9px 8px;
  width: 100px;
  height: 80px;
  cursor: pointer;
}
.svg-item:hover {
  background: rgba(0, 0, 0, 0.1);
}
</style>
