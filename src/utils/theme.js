export const theme = {
    "name": "my theme",
    "rounding": 12,
    "spacing": 20,
    "defaultMode": "light",
    "global": {
      "colors": {
        "brand": {
          "dark": "#7700cc",
          "light": "#6600cc"
        },
        "background": {
          "dark": "#111111",
          "light": "background-back"
        },
        "background-back": {
          "dark": "#111111",
          "light": "background-front"
        },
        "background-front": {
          "dark": "#222222",
          "light": "background-contrast"
        },
        "background-contrast": {
          "dark": "#FFFFFF11",
          "light": "control"
        },
        "text": {
          "dark": "#EEEEEE",
          "light": "#333333"
        },
        "text-strong": {
          "dark": "#FFFFFF",
          "light": "#000000"
        },
        "text-weak": {
          "dark": "#CCCCCC",
          "light": "#444444"
        },
        "text-xweak": {
          "dark": "#999999",
          "light": "#666666"
        },
        "border": {
          "dark": "#444444",
          "light": "#CCCCCC"
        },
        "control": "brand",
        "active-background": "background-contrast",
        "active-text": "text-strong",
        "selected-background": "background-back",
        "selected-text": "text-strong",
        "status-critical": "#FF4040",
        "status-warning": "#FFAA15",
        "status-ok": "#00C781",
        "status-unknown": "#CCCCCC",
        "status-disabled": "#CCCCCC",
        "graph-0": "brand",
        "graph-1": "status-warning"
      },
      "font": {
        "family": "\"JetBrains Mono\", monospace",
        "size": "15px",
        "height": "20px",
        "maxWidth": "300px",
        "face": "/* cyrillic-ext */\n@font-face {\n  font-family: 'JetBrains Mono';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/jetbrainsmono/v13/tDbY2o-flEEny0FZhsfKu5WU4zr3E_BX0PnT8RD8yKxTN1OVk6OThhvAWV8.woff2) format('woff2');\n  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;\n}\n/* cyrillic */\n@font-face {\n  font-family: 'JetBrains Mono';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/jetbrainsmono/v13/tDbY2o-flEEny0FZhsfKu5WU4zr3E_BX0PnT8RD8yKxTPlOVk6OThhvAWV8.woff2) format('woff2');\n  unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\n}\n/* greek */\n@font-face {\n  font-family: 'JetBrains Mono';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/jetbrainsmono/v13/tDbY2o-flEEny0FZhsfKu5WU4zr3E_BX0PnT8RD8yKxTOVOVk6OThhvAWV8.woff2) format('woff2');\n  unicode-range: U+0370-03FF;\n}\n/* vietnamese */\n@font-face {\n  font-family: 'JetBrains Mono';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/jetbrainsmono/v13/tDbY2o-flEEny0FZhsfKu5WU4zr3E_BX0PnT8RD8yKxTNVOVk6OThhvAWV8.woff2) format('woff2');\n  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'JetBrains Mono';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/jetbrainsmono/v13/tDbY2o-flEEny0FZhsfKu5WU4zr3E_BX0PnT8RD8yKxTNFOVk6OThhvAWV8.woff2) format('woff2');\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'JetBrains Mono';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/jetbrainsmono/v13/tDbY2o-flEEny0FZhsfKu5WU4zr3E_BX0PnT8RD8yKxTOlOVk6OThhvA.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n"
      },
      "active": {
        "background": "active-background",
        "color": "active-text"
      },
      "hover": {
        "background": "active-background",
        "color": "active-text"
      },
      "selected": {
        "background": "selected-background",
        "color": "selected-text"
      },
      "control": {
        "border": {
          "radius": "12px"
        }
      },
      "drop": {
        "border": {
          "radius": "12px"
        }
      },
      "borderSize": {
        "xsmall": "1px",
        "small": "2px",
        "medium": "3px",
        "large": "10px",
        "xlarge": "20px"
      },
      "breakpoints": {
        "small": {
          "value": 640,
          "borderSize": {
            "xsmall": "1px",
            "small": "2px",
            "medium": "3px",
            "large": "5px",
            "xlarge": "10px"
          },
          "edgeSize": {
            "none": "0px",
            "hair": "1px",
            "xxsmall": "2px",
            "xsmall": "3px",
            "small": "5px",
            "medium": "10px",
            "large": "20px",
            "xlarge": "40px"
          },
          "size": {
            "xxsmall": "20px",
            "xsmall": "40px",
            "small": "80px",
            "medium": "160px",
            "large": "320px",
            "xlarge": "640px",
            "full": "100%"
          }
        },
        "medium": {
          "value": 1280
        },
        "large": {}
      },
      "edgeSize": {
        "none": "0px",
        "hair": "1px",
        "xxsmall": "3px",
        "xsmall": "5px",
        "small": "10px",
        "medium": "20px",
        "large": "40px",
        "xlarge": "80px",
        "responsiveBreakpoint": "small"
      },
      "input": {
        "padding": "10px",
        "weight": 600
      },
      "spacing": "20px",
      "size": {
        "xxsmall": "40px",
        "xsmall": "80px",
        "small": "160px",
        "medium": "320px",
        "large": "640px",
        "xlarge": "960px",
        "xxlarge": "1280px",
        "full": "100%"
      }
    },
    "chart": {},
    "diagram": {
      "line": {}
    },
    "meter": {},
    "tip": {
      "content": {
        "background": {
          "color": "background"
        },
        "elevation": "none",
        "round": false
      }
    },
    "button": {
      "border": {
        "width": "2px",
        "radius": "15px"
      },
      "padding": {
        "vertical": "3px",
        "horizontal": "18px"
      }
    },
    "checkBox": {
      "check": {
        "radius": "12px"
      },
      "toggle": {
        "radius": "20px",
        "size": "40px"
      },
      "size": "20px"
    },
    "radioButton": {
      "size": "20px"
    },
    "formField": {
      "border": {
        "color": "border",
        "error": {
          "color": {
            "dark": "white",
            "light": "status-critical"
          }
        },
        "position": "outer",
        "side": "bottom"
      },
      "content": {
        "pad": "small"
      },
      "disabled": {
        "background": {
          "color": "status-disabled",
          "opacity": "medium"
        }
      },
      "error": {
        "color": "status-critical",
        "margin": {
          "vertical": "xsmall",
          "horizontal": "small"
        }
      },
      "help": {
        "color": "dark-3",
        "margin": {
          "start": "small"
        }
      },
      "info": {
        "color": "text-xweak",
        "margin": {
          "vertical": "xsmall",
          "horizontal": "small"
        }
      },
      "label": {
        "margin": {
          "vertical": "xsmall",
          "horizontal": "small"
        }
      },
      "margin": {
        "bottom": "small"
      },
      "round": "12px"
    },
    "calendar": {
      "small": {
        "fontSize": "8.333333333333332px",
        "lineHeight": 1.375,
        "daySize": "22.86px"
      },
      "medium": {
        "fontSize": "15px",
        "lineHeight": 1.45,
        "daySize": "45.71px"
      },
      "large": {
        "fontSize": "35px",
        "lineHeight": 1.11,
        "daySize": "91.43px"
      }
    },
    "clock": {
      "analog": {
        "hour": {
          "width": "7px",
          "size": "20px"
        },
        "minute": {
          "width": "3px",
          "size": "10px"
        },
        "second": {
          "width": "3px",
          "size": "8px"
        },
        "size": {
          "small": "60px",
          "medium": "80px",
          "large": "120px",
          "xlarge": "180px",
          "huge": "240px"
        }
      },
      "digital": {
        "text": {
          "xsmall": {
            "size": "1.666666666666666px",
            "height": 1.5
          },
          "small": {
            "size": "8.333333333333332px",
            "height": 1.43
          },
          "medium": {
            "size": "15px",
            "height": 1.375
          },
          "large": {
            "size": "21.666666666666668px",
            "height": 1.167
          },
          "xlarge": {
            "size": "28.333333333333336px",
            "height": 1.1875
          },
          "xxlarge": {
            "size": "41.66666666666667px",
            "height": 1.125
          }
        }
      }
    },
    "heading": {
      "level": {
        "1": {
          "small": {
            "size": "42px",
            "height": "47px",
            "maxWidth": "833px"
          },
          "medium": {
            "size": "68px",
            "height": "73px",
            "maxWidth": "1367px"
          },
          "large": {
            "size": "122px",
            "height": "127px",
            "maxWidth": "2433px"
          },
          "xlarge": {
            "size": "175px",
            "height": "180px",
            "maxWidth": "3500px"
          }
        },
        "2": {
          "small": {
            "size": "35px",
            "height": "40px",
            "maxWidth": "700px"
          },
          "medium": {
            "size": "55px",
            "height": "60px",
            "maxWidth": "1100px"
          },
          "large": {
            "size": "75px",
            "height": "80px",
            "maxWidth": "1500px"
          },
          "xlarge": {
            "size": "95px",
            "height": "100px",
            "maxWidth": "1900px"
          }
        },
        "3": {
          "small": {
            "size": "28px",
            "height": "33px",
            "maxWidth": "567px"
          },
          "medium": {
            "size": "42px",
            "height": "47px",
            "maxWidth": "833px"
          },
          "large": {
            "size": "55px",
            "height": "60px",
            "maxWidth": "1100px"
          },
          "xlarge": {
            "size": "68px",
            "height": "73px",
            "maxWidth": "1367px"
          }
        },
        "4": {
          "small": {
            "size": "22px",
            "height": "27px",
            "maxWidth": "433px"
          },
          "medium": {
            "size": "28px",
            "height": "33px",
            "maxWidth": "567px"
          },
          "large": {
            "size": "35px",
            "height": "40px",
            "maxWidth": "700px"
          },
          "xlarge": {
            "size": "42px",
            "height": "47px",
            "maxWidth": "833px"
          }
        },
        "5": {
          "small": {
            "size": "12px",
            "height": "17px",
            "maxWidth": "233px"
          },
          "medium": {
            "size": "12px",
            "height": "17px",
            "maxWidth": "233px"
          },
          "large": {
            "size": "12px",
            "height": "17px",
            "maxWidth": "233px"
          },
          "xlarge": {
            "size": "12px",
            "height": "17px",
            "maxWidth": "233px"
          }
        },
        "6": {
          "small": {
            "size": "8px",
            "height": "13px",
            "maxWidth": "167px"
          },
          "medium": {
            "size": "8px",
            "height": "13px",
            "maxWidth": "167px"
          },
          "large": {
            "size": "8px",
            "height": "13px",
            "maxWidth": "167px"
          },
          "xlarge": {
            "size": "8px",
            "height": "13px",
            "maxWidth": "167px"
          }
        }
      }
    },
    "paragraph": {
      "small": {
        "size": "12px",
        "height": "17px",
        "maxWidth": "233px"
      },
      "medium": {
        "size": "15px",
        "height": "20px",
        "maxWidth": "300px"
      },
      "large": {
        "size": "22px",
        "height": "27px",
        "maxWidth": "433px"
      },
      "xlarge": {
        "size": "28px",
        "height": "33px",
        "maxWidth": "567px"
      },
      "xxlarge": {
        "size": "42px",
        "height": "47px",
        "maxWidth": "833px"
      }
    },
    "text": {
      "xsmall": {
        "size": "8px",
        "height": "13px",
        "maxWidth": "167px"
      },
      "small": {
        "size": "12px",
        "height": "17px",
        "maxWidth": "233px"
      },
      "medium": {
        "size": "15px",
        "height": "20px",
        "maxWidth": "300px"
      },
      "large": {
        "size": "22px",
        "height": "27px",
        "maxWidth": "433px"
      },
      "xlarge": {
        "size": "28px",
        "height": "33px",
        "maxWidth": "567px"
      },
      "xxlarge": {
        "size": "42px",
        "height": "47px",
        "maxWidth": "833px"
      }
    },
    "scale": 2
};
