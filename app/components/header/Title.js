import React from 'react';
import { Subheading, withTheme} from 'react-native-paper';
import {i18n} from '../../service/localization';
import {withMainContext} from '../../contexts';

class TitleComponent extends React.Component {
  render() {
    const {context, text} = this.props;
    return (
      <Subheading style={{color: context.theme.colors.primary}}>{i18n.value(text)}</Subheading>
    )
  }
}

export default withMainContext(TitleComponent);
