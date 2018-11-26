// Full Documentation - https://www.turbo360.co/docs
const turbo = require('turbo360')({ site_id: process.env.TURBO_APP_ID })
const vertex = require('vertex360')({ site_id: process.env.TURBO_APP_ID })
const router = vertex.router()

/*  This is a sample API route. */

router.get('/:resource', (req, res) => {
	const { resource } = req.params
	// res.json({
	// 	confirmation: 'success',
	// 	resource: req.params.resource,
	// 	query: req.query // from the url query string
	// })

	const messages = [
		{
			toUser: "Long",
			fromUser: "Phuong",
			message: "Dan Ba la doi tra",
			dateTime: new Date()
		}, {
			toUser: "Long",
			fromUser: "Phuong",
			message: "Dan Ba la doi tra",
			dateTime: new Date()
		}, {
			toUser: "Long",
			fromUser: "Phuong",
			message: "Dan Ba la doi tra",
			dateTime: new Date()
		},
		{
			toUser: "PHUDUC",
			fromUser: "Phuong",
			message: "Dan Ba la doi tra",
			dateTime: new Date()
		},
		{
			toUser: "PHUDUC",
			fromUser: "Phuong",
			message: "Dan Ba la doi tra",
			dateTime: new Date()
		},
	];
	res.json({
		confirmation: 'success',
		data: messages
	})
})

router.get('/:resource/:id', (req, res) => {
	res.json({
		confirmation: 'success',
		resource: req.params.resource,
		id: req.params.id,
		query: req.query // from the url query string
	})
})



module.exports = router
