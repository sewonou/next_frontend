import React from "react";
import { getFontSizeForHeading, getTextAlign, getTextColor } from "../../utils/font";


export const Heading = ({textAlign, content, level = 2,  color = "base"}) => {
  const tag = React.createElement(`h${level}`, {
    dangerouslySetInnerHTML: {__html: content},
    className: `font-heading max-w-5xl mx-auto my-5 ${getTextColor(color)}  ${getFontSizeForHeading(level)} ${getTextAlign(textAlign)}`
  })
  return tag;
};
