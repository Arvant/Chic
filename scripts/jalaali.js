'use strict';

var moment = require('moment-jalaali');

function persianDigits(date){
	var id= ['۰','۱','۲','۳','۴','۵','۶','۷','۸','۹'];
	return date.replace(/[0-9]/g, function(w){ return id[+w] });
}

hexo.extend.helper.register('jalaaliYear', function (date) {
  return persianDigits(moment(date).format('jYYYY'));
});
hexo.extend.helper.register('jalaaliDay', function (date) {
  return persianDigits(moment(date).format('jDD jMMMM jYYYY'));
});

hexo.extend.helper.register('persianDigits', function (data) {
  return persianDigits(data);
});
moment.loadPersian()