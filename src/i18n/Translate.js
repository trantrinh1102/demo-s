import PropTypes from 'prop-types';
import {getContext} from 'recompose';

const translate = (BaseComponent) => {
  const TranslateComponent = getContext({
    translate: PropTypes.func.isRequired,
    locale: PropTypes.string.isRequired,
  })(BaseComponent);

  TranslateComponent.defaultProps = BaseComponent.defaultProps;

  return TranslateComponent;
}

export default translate;
