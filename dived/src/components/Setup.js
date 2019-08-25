import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import getAllSchools from '../actions/get-all-schools';

const Cities = props => {
  const { cities: allCities } = props;
  const cities = allCities.map(city => ({
    value: city.id,
    label: `${city.nameFi} - ${city.nameSe}`,
  }));
  const onChange = city => {
    props.onSelect({ id: city.value });
  };
  return <Select options={cities} onChange={onChange} />;
};
const citiesPropType = PropTypes.arrayOf(
  PropTypes.shape({
    id: PropTypes.string.isRequired,
    nameFi: PropTypes.string.isRequired,
    nameSe: PropTypes.string,
  })
).isRequired;
Cities.propTypes = {
  cities: citiesPropType,
  onSelect: PropTypes.func.isRequired,
};
Cities.defaultProps = {
  cities: [],
};

const Schools = props => {
  const { schools: allSchools } = props;

  const bySelectedCity = school => props.selectedCity === school.city;

  const schools = allSchools
    .filter(bySelectedCity)
    .map(school => ({ value: school.id, label: `${school.name}` }));

  return <Select options={schools} />;
};
const schoolPropType = PropTypes.arrayOf(
  PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
  })
).isRequired;
Schools.propTypes = {
  schools: schoolPropType,
  selectedCity: PropTypes.string,
};
Schools.defaultProps = {
  schools: [],
  selectedCity: '',
};

const updateInitialState = async comp => {
  const schools = await getAllSchools();
  comp.setState({ schools });
};

class Setup extends React.Component {
  constructor(props) {
    super(props);
    this.state = { city: '' };
  }

  componentDidMount() {
    updateInitialState(this);
  }

  onSelectCity(city) {
    this.setState({
      city: <city className="id" />,
    });
  }

  render() {
    const { cities, schools } = this.props;
    const { city } = this.state;
    return (
      <div>
        s
        <Cities cities={cities} onSelect={c => this.onSelectCity(c)} />
        <Schools schools={schools} selectedCity={city} />
      </div>
    );
  }
}

Setup.propTypes = {
  schools: schoolPropType,
  cities: citiesPropType,
};
Setup.defaultProps = {
  schools: [],
  cities: [],
};

export default Setup;
