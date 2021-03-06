import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import baseTheme from '../../../style/themes/base';
import OptionsHelper from '../../../utils/helpers/options-helper';
import sizes from './input-sizes.style';
import inputClassicStyling from './input-presentation-classic.style';

const InputPresentationStyle = styled.div`
  align-items: center;
  background: transparent;
  border: 1px solid ${({ theme }) => theme.colors.border};
  box-sizing: border-box;
  cursor: text;
  display: flex;
  flex-wrap: wrap;
  flex: 0 0 ${({ inputWidth }) => inputWidth}%;
  margin: 0;
  min-height: ${({ size }) => sizes[size].height};
  padding-left: ${({ size }) => sizes[size].padding};
  padding-right: ${({ size }) => sizes[size].padding};

  ${({ disabled, theme }) => disabled && css`
    background: ${theme.disabled.input};
    border-color: ${theme.disabled.border};
    cursor: not-allowed;
  `}
  ${({ readOnly }) => readOnly && css`
    background: transparent !important;
    border-color: transparent !important;
  `}
  ${({ hasFocus, theme }) => hasFocus && css`
    && { 
      outline: 3px solid ${theme.colors.focus};
      z-index: 2;
    }
  `}
  ${stylingForValidation('infoMessage')}
  ${stylingForValidation('warningMessage')}
  ${stylingForValidation('errorMessage')}

  ${inputClassicStyling}

  input::-ms-clear {
    display: none;
  }
  input::-webkit-contacts-auto-fill-button {
    display: none!important;
  }
`;

function stylingForValidation(message) {
  const validation = message.replace('Message', '');
  return ({ theme, ...props }) => {
    if (!props[message]) return null;
    return css`
      border-color: ${theme.colors[validation]} !important;
      box-shadow: inset 1px 1px 0 ${theme.colors[validation]},
                  inset -1px -1px 0 ${theme.colors[validation]};
    `;
  };
}

InputPresentationStyle.defaultProps = {
  inputWidth: 100,
  size: 'medium',
  theme: baseTheme
};

InputPresentationStyle.propTypes = {
  disabled: PropTypes.bool,
  error: PropTypes.string,
  hasFocus: PropTypes.bool,
  info: PropTypes.string,
  readOnly: PropTypes.bool,
  size: PropTypes.oneOf(OptionsHelper.sizesRestricted),
  warning: PropTypes.string
};

export default InputPresentationStyle;
