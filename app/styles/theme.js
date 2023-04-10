const appTheme = {
  light: {
    systemRed: '#FF3B30',
    systemPink: '#FF2D55',
    systemOrange: '#FF9500',
    systemYellow: '#FFCC00',
    systemGreen: '#34C759',
    systemTeal: '#5AC8FA',
    systemBlue: '#007AFF',
    systemIndigo: '#5856D6',
    systemPurple: '#AF52DE',
    systemGrey: {
      1: '#8E8E93',
      2: '#AEAEB2',
      3: '#C7C7CC',
      4: '#D1D1D6',
      5: '#E5E5EA',
      6: '#F2F2F7',
    },
    label: {
      primary: '#3D3D3D',
      secondary: 'rgba(60, 60, 67, 0.6)',
      tertiary: 'rgba(60, 60, 67, 0.3)',
      quartinerary: 'rgba(60, 60, 67, 0.18)',
    },
  },

  dark: {
    systemRed: '#FF453A',
    systemPink: '#FF2D55',
    systemOrange: '#FF9F0A',
    systemYellow: '#FFD60A',
    systemGreen: '#32D74B',
    systemTeal: '#64D2FF',
    systemBlue: '#0A84FF',
    systemIndigo: '#5E5CE6',
    systemPurple: '#BF5AF2',
    systemGrey: {
      1: '#8E8E93',
      2: '#636366',
      3: '#48484A',
      4: '#3A3A3C',
      5: '#2C2C2E',
      6: '#1C1C1E',
    },
    label: {
      primary: '#DFDEDF',
      secondary: 'rgba(235, 235, 245, 0.6)',
      tertiary: 'rgba(235, 235, 245, 0.3)',
      quartinerary: ' rgba(235, 235, 245, 0.18)',
    },
  },
};

export const statusColors = {
  'IN HOUSE': '#34C759',
  CONFIRMED: '#5AC8FA',
  'COURTESY HOLD': '#5856D6',
  PENDING: '#FF9500',
  BLOCKED: '#FF453A',
  'CHECKED OUT': '#8E8E93',
  'NO SHOW': '#FF3B30',
  OVERSTAY: '#FF2D55',
  CANCELLED: '#8E8E93',
  UNKNOWN: '#F8F8FC',
};

export default appTheme;
