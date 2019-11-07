import React, {Component} from 'react';
import {string,func} from 'prop-types';

class Radio extends Component {

    static propTypes = {
        option: string,
        sortBy: func
    };

    constructor() {
        super()
		this.state = {
			radioClick: "name"
		};
	}

    onChange = type => {
        this.setState({
            radioClick: type
        }, () => {
            this.props.sortBy(type);
        });
    };

    render() {
        const {option} = this.props;
        return (
            <div className='radioButtons' >
                <div className='left'>
                    <input type='radio' onChange={() => this.onChange('name')} checked={option === 'name'}/>
                    <label>&nbsp;&nbsp;Sort by name</label>
                </div>
                <div className='right'>
                    <input type='radio' onChange={() => this.onChange('birth')} checked={option === 'birth'}/>
                    <label>&nbsp;&nbsp;Sort by age</label>

                </div>
            </div>
        );

    }
}


// Uncomment the snippet below
// Radio.propTypes = {
// 	sortBy: PropTypes.func
// }

export default Radio;
