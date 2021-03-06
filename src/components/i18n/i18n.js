import React from 'react';
import PropTypes from 'prop-types';
import i18n from 'i18n-js';
import _marked from 'marked';
import { assign } from 'lodash';
import tagComponent from '../../utils/helpers/tags';

class I18n extends React.Component {
  static propTypes = {

    /**
     * Whether to compile the value as markdown
     */
    markdown: PropTypes.bool,

    /**
     * Whether to enclose the text in a <span> or a <div>
     */
    inline: PropTypes.bool,

    /**
     * The key to lookup for a localised value
     */
    scope: PropTypes.string.isRequired,

    /**
     * Additional options to pass to I18n
     */
    options: PropTypes.object
  }

  static defaultProps = {
    inline: true
  }

  marked(inline) {
    // Make sure that we sanitize html markup in the MD compiler
    _marked.setOptions({ sanitize: true });
    return inline ? str => _marked.inlineLexer(str, []) : _marked;
  }

  renderMarkup(inline, props, translation) {
    const el = inline ? 'span' : 'div';
    return React.createElement(el, props, translation);
  }

  /**
   * Renders the component.
   *
   * @method render
   */
  render() {
    const {
      markdown, inline, scope, options, ...props
    } = this.props;
    let translation = i18n.t(scope, options);

    if (markdown) {
      props.dangerouslySetInnerHTML = {
        __html: this.marked(inline)(translation)
      };
      translation = null;
    }

    const markupProps = assign({}, props, tagComponent('i18n', this.props));

    return this.renderMarkup(inline, markupProps, translation);
  }
}

export default I18n;
