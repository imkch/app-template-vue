<template>
  <i :class="['svg-icon', `svg-icon-${name}`]" v-on="$listeners">
    <svg fill="currentColor" aria-hidden="true" :width="width" :height="height">
      <use :xlink:href="iconName" />
    </svg>
  </i>
</template>

<script>
export default {
  name: 'SvgIcon',
  props: {
    name: {
      type: String,
      required: true
    },
    width: {
      type: String,
      default: '1rem'
    },
    height: {
      type: String,
      default: '1rem'
    }
  },
  computed: {
    iconName () {
      return `#icon-${this.name}`;
    }
  }
};
</script>

<style scoped>
.svg-icon {
  display: inline-block;
}
</style>
