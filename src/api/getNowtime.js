export function nowTime () {
  let splitetime = new Date().toISOString()
  splitetime = splitetime.replace('T', ' ')
  splitetime = splitetime.replace('Z', '')
  splitetime = splitetime.split(' ')
  let splitdata = splitetime[0].split('-').join('')
  let splittimes = splitetime[1]
    .split(':')
    .join('')
    .replace('.', '')
  return splitdata + splittimes
}
