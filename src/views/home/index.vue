<template>
  <div class="flex flex-col items-center text-center m-4 pt-20 home">
    <svg-icon name="logo" class="text-gray-600" width="5rem" height="5rem" />
    <rate disabled v-model="rateValue" class="ml-2"/>
    <h1 class="text-3xl font-bold m-2"><a class="underline" href="//imkch.com" target="_blank">坤尘 ▪ 记</a></h1>
    <h2 class="text-lg">思绪如风，总会在某处停留<br>用轻灵的文字书写关于技术生活的奇思妙想</h2>
  </div>
</template>
<script>

import _ from 'lodash';
export default {
  name: 'Home',
  data() {
    return {
      rateValue: 4.9
    };
  },
  mounted() {
    console.log(_.toLower('Hello World!'));
  }
};
</script>
