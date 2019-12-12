export default function install(Vue, options) {
  /*验证手机号*/
  const isvalidateMobile = (rule, value, callback) => {
    if (value != null && value != "") {
      if (!/^[1][3,4,5,7,8][0-9]{9}$/.test(value)) {
        callback(new Error('您输入的手机号不正确!'))
      } else {
        callback()
      }
    }
    else {
      callback();
    }
  }
  /*含有非法字符(只能输入字母、汉字)*/
  const isvalidateRegexn = (rule, value, callback) => {
    if (value != null && value != "") {
      if (!/^[a-zA-Z\u4e00-\u9fa5]+$/.test(value)) {
        callback(new Error('含有非法字符(只能输入字母、汉字)!'))
      } else {
        callback()
      }
    }
    else {
      callback();
    }
  }
  /*请输入正整数*/
  const isvalidateInteger = (rule, value, callback) => {
    if (value != null && value != "") {
      if (!/(^[1-9]\d*$)/.test(value)) {
        callback(new Error('请输入正整数!'))
      } else {
        callback()
      }
    }
    else {
      callback();
    }
  }
  /*请输入大于0的数*/
  const positiveNumber = (rule, value, callback) => {
    if (value != null && value != "") {
      if (!(value>=0)) {
        callback(new Error('请输入大于0的数!'))
      } else {
        callback()
      }
    }
    else {
      callback();
    }
  }
  Vue.prototype.filter_rules = function (item) {
    let rules = [];
    if (item.required) {
      rules.push({required: true, message: '该输入项为必填项!', trigger: 'blur'});
    }
    if (item.maxLength) {
      rules.push({min: 1, max: item.maxLength, message: '最多输入' + item.maxLength + '个字符!', trigger: 'blur'})
    }
    if (item.min && item.max) {
      rules.push({min: item.min, max: item.max, message: '字符长度在' + item.min + '至' + item.max + '之间!', trigger: 'blur'})
    }
    if (item.type) {
      let type = item.type;
      switch (type) {
        case 'email':
          rules.push({type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur,change'});
          break;
        case 'mobile':
          rules.push({validator: isvalidateMobile, trigger: 'blur,change'});
          break;
        case 'regexn':
          rules.push({validator: isvalidateRegexn, trigger: 'blur,change'});
          break;
        case 'integer':
          rules.push({validator: isvalidateInteger, trigger: 'blur,change'});
          break;
          case 'positiveNumber':
          rules.push({validator: positiveNumber, trigger: 'blur,change'});
          break;
        default:
          rule.push({});
          break;
      }
    }
    return rules;
  };
};


