const backgroundColor = '#2f2215';
const foregroundColor = '#f9bf11';
const cursorColor = '#f9bf11';
const borderColor = '#000000';
const textShadow = '#d6921b';
const backgroundStyle = `
  text-shadow: 0 0 5px #28190f, 0 0 5px #d6921b, 0 0 10px #d6921b;
  background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06));
  background-color: ${backgroundColor};
  background-size: 100% 2px, 3px 100%;
`;

const colors = {
}

exports.decorateConfig = (config) => {
  return Object.assign({}, config, {
    borderColor,
    cursorColor,
    backgroundColor,
    foregroundColor,
    css: `
      ${config.css || ''}
      .tabs_nav .tabs_list .tab_text {
        color: ${foregroundColor};
      }
      .tabs_nav .tabs_title {
        color: ${foregroundColor};
      }
      .tab_tab.tab_active {
        color: ${foregroundColor};
        text-shadow: 0 0 5px ${textShadow}, 0 0 5px ${textShadow}, 0 0 10px ${textShadow};
      }
      .terms_terms {
        ${backgroundStyle}
       }
    `,
    termCSS: `
      * {
        ${backgroundStyle}
       }
    `
  });
}
