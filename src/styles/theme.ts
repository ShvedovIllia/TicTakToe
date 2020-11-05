import { deviceUtil } from '../utils';

export interface ITheme {
  color: {
    black: string;
    lightGray: string;
    lightBlue: string;
    red: string;
    blue: string;
  };
  util: {
    wp: (widthPercent: string | number) => number;
    hp: (widthPercent: string | number) => number;
  };
}

export const theme: ITheme = {
  color: {
    black: "#000000",
    lightGray: "#EBEBEA",
    lightBlue: "#6BA2FF",
    red: "#FF5C68",
    blue: "#6683FF"
  },
  util: {
    hp: deviceUtil.heightPercentageToDP,
    wp: deviceUtil.widthPercentageToDP,
  },
};
