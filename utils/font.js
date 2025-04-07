
export const getTextAlign = (textAlign = "left") => {
    const textAlignMap = {
      "left" : "text-left",
      "right": "text-right",
      "center": "text-center"
    }

    return `${textAlignMap[textAlign]}`|| "" ;
}

export const getFontSizeForHeading = (level) => {
  const fontSizeMap = {
      1: "text-6xl",
      2: "text-5xl",
      3: "text-4xl",
      4: "text-3xl",
      5: "text-2xl",
      6: "text-xl"
  }

  return `${fontSizeMap[level]}` || "" ;
}

const colorMap = {
  "base": "white",
  "contrast": "neutral-900",
  "accent-1":  "yellow-300",
  "accent-2": "pink-100",
  "accent-3": "indigo-800",
  "accent-4": "neutral-500",
  "accent-5": "gray-50",
  "accent-6": "yellow-200",
}

export const getTextColor = (color) => {
  return `text-${colorMap[color]}` || "" ;
}

export const getBgColor = (color) => {
  return `bg-${colorMap[color]}` || "" ;
}