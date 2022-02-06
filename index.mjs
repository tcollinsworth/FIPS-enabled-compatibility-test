import md5 from 'md5'
import md5Hex from 'md5-hex'
import sparkMd5 from 'spark-md5'
import md5oMatic from 'md5-o-matic'
import blueimpMdg5 from 'blueimp-md5'
import bcrypt from 'bcrypt'

console.log('md5', md5('hi'))
console.log('md5Hex', md5Hex('hi'))
console.log('spark-md5', sparkMd5.hash('hi'))
console.log('md5-o-matic', md5oMatic('hi'))
console.log('blueimp-md5', blueimpMdg5('hi'))
console.log('bcrypt', bcrypt.hashSync('hi', 10))