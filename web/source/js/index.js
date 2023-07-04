/*

  js/index.js

  Copyright (C) 2021 Mitsuru Nakada
  This software is released under the MIT License, see license file.

  // for main page
  index.html // -> /var/www/index.html
    |
    + js/index.js  // -> /var/www/bundle_*.js
      |
      + css/localStyle.css
      + vue/i18n-ja.yaml
      + vue/i18n-en.yaml
      + vue/Seting.vue
        |
        + vue/SettingSchedule.vue
        + vue/SettingCruise.vue
        |
        + vue/SettingButton.vue
        + vue/SettingDangerButton.vue
        + vue/SettingComment.vue
        + vue/SettingInput.vue
        + vue/SettingProgress.vue
        + vue/SettingSwitch.vue

  // for SD-Card Directory page
  css/dirindex.css -> dirindex.css  // -> /var/www/dirindex.css

*/

'use strict';

import Vue from 'vue';
import VueI18n from 'vue-i18n';
import { Row, Col, Button } from 'element-ui';
import lang from 'element-ui/lib/locale/lang/ja';
import locale from 'element-ui/lib/locale';

locale.use(lang);
Vue.use(VueI18n);
Vue.prototype.$ELEMENT = { size: 'mini' };
Vue.use(Row);
Vue.use(Col);
Vue.use(Button);

import Setting from '../vue/Setting.vue';
import I18nJa from '../vue/i18n-ja.yaml';
import I18nEn from '../vue/i18n-en.yaml';
import I18nEs from '../vue/i18n-es.yaml';

// css
import 'element-ui/lib/theme-chalk/base.css';
import 'element-ui/lib/theme-chalk/row.css';
import 'element-ui/lib/theme-chalk/col.css';
import 'element-ui/lib/theme-chalk/button.css';
import '../css/localStyle.css';

class AtomSetting {
  constructor() {
    new Vue({
      i18n: new VueI18n({ locale: 'es', fallbackLocale: 'en', messages: { ja: I18nJa, en: I18nEn, es: I18nEs }}),
      el: '#app',
      template: '<setting/>',
      components: { 'setting': Setting },
    });
  }
}
new AtomSetting();
