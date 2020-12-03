
/* GET home page. */

const hakkinda=function(req, res, next) {
  res.render('hakkinda', { title: 'Hakkında','footer': 'Burak Akkoç 2020', });
}
module.exports={
	hakkinda
}
