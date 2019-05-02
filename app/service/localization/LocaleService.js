import I18n from 'i18n-js';
import {AsyncStorage} from 'react-native';
import {Localization} from 'expo';

class LocaleService {
  constructor() {
    AsyncStorage.getItem('language').then(language => {
      this.storedLanguage = language;
    });
    I18n.fallbacks = true;
    I18n.translations = {
      'en': require('./i18n/en.json')
    };
    this.flags = {
      pl: require('../../assets/images/flags/usa.png'),
    };
    I18n.locale = Localization.locale;
    console.log(Localization)
    this.default = 'en';
    this.setLocales();
  }

  value(key, values) {
    if(!this.exists(key)) {
      return key;
    }
    let data = I18n.t(key, {locale: this.locale});
    if(values) {
      if(Array.isArray(values)) {
        values.forEach((e, i) => {
          data = data.replace(`%${i}`, e);
        })
      } else {
        data = data.replace('$', values);
      }
    }
    return data;
  }

  setLocales() {
    this.locales = Object.keys(I18n.translations);
  }

  safeValue(key, defaults, values) {
    if (this.exists(key)) {
      return this.value(key, values)
    } else {
      return this.value(defaults)
    }
  }

  setLocale(locale) {
    I18n.locale = locale;
    AsyncStorage.setItem('language', locale);
  }

  exists(key) {
    return key in I18n.translations[this.locale];
  }

  get locale() {
    if(this.storedLanguage) {
      return this.storedLanguage;
    }
    const locale = I18n.locale.substr(0, 2);
    return locale in I18n.translations ? locale : this.default;
  }

  get flag() {
    return this.flags[this.locale];
  }
}

export const i18n = new LocaleService();
