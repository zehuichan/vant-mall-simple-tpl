export function toThousandsFilter(num) {
  return (+num || 0).toString().replace(/^-?\d+/g, m => m.replace(/(?=(?!\b)(\d{3})+$)/g, ','))
}

// 格式化金额,单位:分(eg:430分=4.30元)
export function moneyFilter(price, digits = 2, prefix = '￥', suffix = '') {
  if (!price) {
    return 0
  }
  return prefix + Number(price / 100).toFixed(digits) + suffix
}

// 隐藏手机号中间4位
export function formatPhone(phone = '') {
  return phone.replace(/(\d{3})\d*(\d{4})/g, '$1***$2')
}

// 隐藏身份证号中11位
export function formatIdentity(number = '') {
  return number.replace(/(\d{3})\d*(\d{4})/g, '$1***********$2')
}