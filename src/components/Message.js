import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { Well } from 'react-bootstrap'

const Message = ({ i, item }) => {
	console.log(item)
	return(
		<Well bsSize="small" key={i}>
			<b>{item.title}</b><br/>
			<i>Source: <a href={item.link}>{item.link}</a></i>
		</Well>
	)
}

export default Message
