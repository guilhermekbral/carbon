import styled from 'styled-components';
import Colors from 'style/themes/base';

const { colors } = Colors;

const Label = styled.label`
  color: ${colors.text.body};
  cursor: pointer;
  font-weight: bold;
  padding: 6px;
  ${props => props.isInline && `
    width: 30%;
  `}
`;

export default Label;

/*
@import "./../../../style-config/colors";
@import "./../../../style-config/general";

.common-input__label {
  line-height: 14px;
  margin: 0 0 8px 0;
  padding: 0 6px;
  vertical-align: middle;

  .carbon-help {
    top: -2px;
    margin-bottom: -2px; // required to ensure the input maintains it's position
  }
}

.common-input--label-inline {
  margin-left: -($grid-margin);

  .common-input__help-text {
    margin-left: 30%;
    padding-left: $grid-margin;
  }
}

.common-input__label--inline {
  box-sizing: border-box;
  display: inline-block;
  margin: 10px 0 0;
  padding: 0 0 0 $grid-margin;
  width: 30%;
  vertical-align: top;

  ~ .common-input__field {
    box-sizing: border-box;
    display: inline-block;
    padding-left: $grid-margin;
    width: 70%;
  }
}

.common-input__label--align-right {
  text-align: right;
}

.common-input__help-text {
  color: $grey-dark-blue-80;
  display: block;
  line-height: 20px;
  margin-left: 6px;
  margin-top: 5px;
  white-space: pre-wrap;
}
*/