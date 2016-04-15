import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import ItemsComponent from './../components/Items'

const Items = connect(
)(ItemsComponent);

export default Items