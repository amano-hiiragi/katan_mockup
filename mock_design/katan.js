// console.log('test');
// document.getElementById('map').innerText = 'test';

// マップを定義
// マップ作成
// 数値トークンの配置
// 地形タイルを配置

class Map {
  constructor(line){
  // coordinate()
  }
}

// 座標11*21
var test_map = new Array();
test_map[0] =   '    x-x-x-x-x-x-x    '.split('');
test_map[1] =   '    | n | n | n |    '.split('');
test_map[2] =   '  x-x-x-x-x-x-x-x-x  '.split('');
test_map[3] =   '  | n | n | n | n |  '.split('');
test_map[4] =   'x-x-x-x-x-x-x-x-x-x-x'.split('');
test_map[5] =   '| n | n | n | n | n |'.split('');
test_map[6] =   'x-x-x-x-x-x-x-x-x-x-x'.split('');
test_map[7] =   '  | n | n | n | n |  '.split('');
test_map[8] =   '  x-x-x-x-x-x-x-x-x  '.split('');
test_map[9] =   '    | n | n | n |    '.split('');
test_map[10] =  '    x-x-x-x-x-x-x    '.split('');

console.log(test_map[1][6]);
console.log(test_map[1][10]);
console.log(test_map[1][14]);

console.log(test_map[3][4]);
console.log(test_map[3][8]);
console.log(test_map[3][12]);
console.log(test_map[3][16]);

console.log(test_map[5][2]);
console.log(test_map[5][6]);
console.log(test_map[5][10]);
console.log(test_map[5][14]);
console.log(test_map[5][18]);

console.log(test_map[7][4]);
console.log(test_map[7][8]);
console.log(test_map[7][12]);
console.log(test_map[7][16]);

console.log(test_map[9][6]);
console.log(test_map[9][10]);
console.log(test_map[9][14]);

// 数値トークンの配列を作成し、乱数を用いて砂漠設置。
function install_numeric_token() {
  const max_index_numeric = 19;
  const install_desert_index = Math.floor( Math.random() * max_index_numeric);
  var numeric_token = [5,1,6,3,8,10,9,12,11,4,8,10,9,4,5,6,3,11];

  numeric_token.splice(install_desert_index, 0, 0);
  return numeric_token;
}
var numeric_token = install_numeric_token();
test_map[1][6]  = numeric_token[0];
test_map[3][4]  = numeric_token[1];
test_map[5][2]  = numeric_token[2];
test_map[7][4]  = numeric_token[3];
test_map[9][6]  = numeric_token[4];
test_map[9][10] = numeric_token[5];
test_map[9][14] = numeric_token[6];
test_map[7][16] = numeric_token[7];
test_map[5][18] = numeric_token[8];
test_map[3][16] = numeric_token[9];
test_map[1][14] = numeric_token[10];
test_map[1][10] = numeric_token[11];
test_map[3][8]  = numeric_token[12];
test_map[5][6]  = numeric_token[13];
test_map[7][8]  = numeric_token[14];
test_map[7][12] = numeric_token[15];
test_map[5][14] = numeric_token[16];
test_map[3][12] = numeric_token[17];
test_map[5][10] = numeric_token[18];
console.log(test_map);