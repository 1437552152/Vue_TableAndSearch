export const validatePhone = (rule, value, callback) => { // 定义规则
  const reg = /^1[3456789]\d{9}$/
  if (value !== '' && reg.test(value)) {
    callback()
  } else {
    callback(new Error('请输入正确的手机号码'))
  }
}

export const validateIdcard = (rule, value, callback) => { // 定义规则
  const reg = /\d{17}[\d|x]|\d{15}/
  if (value !== '' && reg.test(value)) {
    callback()
  } else {
    callback(new Error('请输入正确的身份证号码'))
  }
}

export const validateEmail = (rule, value, callback) => { // 定义规则
  const reg = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
  if (value !== '' && reg.test(value)) {
    callback()
  } else {
    callback(new Error('请输入正确的邮箱'))
  }
}
