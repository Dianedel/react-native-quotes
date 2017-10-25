import React, { Component } from 'react';
import {
    Text,
    View,
    TouchableOpacity
} from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome";

import { styles } from "./styles";

export default class IconButton extends Component {
    constructor(props)
    {
        super(props);
    }

    render() {
        return (
            <TouchableOpacity onPress={() => { this.props.action() }}>
                <View style={styles.button}>
                    <Icon name={this.props.icon} style={styles.icon}/>
                </View>
            </TouchableOpacity>
        );
    }
}

