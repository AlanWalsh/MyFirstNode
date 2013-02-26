exports.myFunction = function(params, callback) {
  var num = params.num;
  if(num > 10){
    return callback({err: 'Num too large'}, {result: num});
  }
  callback(undefined, {result: num});
};

exports.redButton = function(params, callback) {

  callback(undefined, {result: 'red button pressed'});
};

exports.greenButton = function(params, callback) {

  callback(undefined, {result: 'green button pressed'});
};

