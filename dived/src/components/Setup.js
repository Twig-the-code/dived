import React from "react"
import PropTypes from 'prop-types';
import Select from 'react-select'
import getAllSchools from "../actions/get-all-schools";


const Cities = props => {
  const cities = props.cities.map(city => ({value: city.id, label: `${city.nameFi} - ${city.nameSe}`}))
  const onChange = (city) => {
    props.onSelect({id: city.value})
  }
  return (

    <Select options={cities} onChange={onChange}/>
  )
}
let citiesPropType = PropTypes.arrayOf(
  PropTypes.shape(
    {
      id: PropTypes.string.isRequired,
      nameFi: PropTypes.string.isRequired,
      nameSe: PropTypes.string
    }
  )).isRequired;
Cities.propTypes = {
  cities: citiesPropType,
  onSelect: PropTypes.func.isRequired,
}

const Schools = props => {
  const bySelectedCity = school => props.selectedCity === school.city

  const schools = props.schools
    .filter(bySelectedCity)
    .map(school => ({value: school.id, label: `${school.name}`}))
  
  return (
    <Select options={schools}/>
  )
}
const schoolPropType = PropTypes.arrayOf(
  PropTypes.shape(
    {
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      city: PropTypes.string.isRequired
    }
  )).isRequired;
Schools.propTypes = {
  schools: schoolPropType,
  selectedCity: PropTypes.string,
}

const updateInitialState = async (comp) => {
  const schools = await getAllSchools()
  comp.setState(({schools}))
}


class Setup extends React.Component {

  constructor(props) {
    super(props)
    this.state = {city: ""}

  }
  componentDidMount() {
updateInitialState(this)
  }

  onSelectCity(city) {
    this.setState({
      city: city.id,
    })
  }

  render() {
    const {cities} = this.props
    const schools = this.state.schools || []
    return <div>
      <Cities cities={cities} onSelect={(city) => this.onSelectCity(city)}/>
      <Schools schools={schools} selectedCity={this.state.city}/>
    </div>
  }
}
Setup.propTypes = {
  schools: schoolPropType,
  cities: citiesPropType,
}
Setup.defaultProps = {
  schools: [],
}

export default Setup