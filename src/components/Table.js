import React, {Component} from 'react';
import {string} from 'prop-types';

const PersonRow = ({name, birth}) => {
	return (<tr>
		<td>{name}</td>
		<td>{birth}</td>
	</tr>);

}
class Table extends Component {
	static propTypes = {
		parameterState: string
	}

	constructor() {
        super()
		this.people = [
			{
				name: "John Sina",
				birth: "11/30/2011"
			}, {
				name: "Barcy Washington",
				birth: "09/16/1992"
			}, {
				name: "Peter Parker",
				birth: "01/16/1992"
			}, {
				name: "Jimmy Shergil",
				birth: "12/12/2001"
			}, {
				name: "Alexander Alfred",
				birth: "02/09/1891"
			}, {
				name: "Krishna Gupta",
				birth: "12/01/1982"
			}, {
				name: "Sania Mirza",
				birth: "11/30/2011"
			}, {
				name: "Lata Pathak",
				birth: "10/31/1999"
			}
		];
	}
	compareDates(person1, person2) {
		// complete this date comparator which enables sort by age
		const date1 = new Date(person1.birth);
		const date2 = new Date(person2.birth);
		return +date1 - +date2;
	}

	compareNames(person1, person2) {
		// complete this string comparator with enables sort by name
		if (person1.name < person2.name) {
			return -1;
		} else if (person1.name > person2.name) {
			return 1;
		} else {
			return 0;
		}
	}


	render() {
		const fn = this.props.parameterState  === 'name' ? this.compareNames : this.compareDates;
		const rendered = this.people.sort(fn).map(person => (<PersonRow {...person} />))
		return (
  <div className='table-div'>
    <table className='table table-striped table-bordered table-hover full-width'>
      <thead>
        <tr>
          <th className='course-name'>Person Name</th>
          <th className='duration'>Date of Birth</th>
        </tr>
      </thead>
      <tbody>
	  {rendered}
      </tbody>
    </table>
  </div>
);

	}
}

// Uncomment the snippet below
// Table.propTypes = {
// 	sortParameter: PropTypes.string
// }

export default Table;
