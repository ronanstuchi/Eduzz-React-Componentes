import makeStyles from '@material-ui/core/styles/makeStyles';

import defaultThemeVariables from '../../styles/ThemeProvider/_default/variables';

interface IStyleProps {
  width?: number;
  size?: 'small' | 'normal';
}

const useStyles = makeStyles(theme => ({
  root: (props: IStyleProps) => ({
    position: 'relative',

    // field
    '& .react-date-picker': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: props.width ?? '100%',
      display: 'block',
      zIndex: 1
    },

    // calendar
    '& .react-date-picker__calendar': {
      width: 250,
      marginLeft: 16,
      top: '100% !important',
      bottom: 'unset !important'
    },

    '& .react-calendar': {
      border: 0,
      borderRadius: '0 4px 4px 4px',
      boxShadow: '0 3px 6px -4px #0000001f, 0 6px 16px #00000014, 0 9px 28px 8px #0000000d',
      marginTop: 1,
      fontFamily: defaultThemeVariables.fontFamily,
      width: 250
    },

    '& .react-date-picker__wrapper': {
      height: props.size === 'small' ? 35 : 45,
      marginTop: 4,
      opacity: 0,
      position: 'relative',
      zIndex: 1
    },

    // navigation
    '& .react-calendar__navigation': {
      marginBottom: 5,
      padding: 8,
      borderBottom: '1px solid #eee',

      '& button': {
        borderRadius: 4,
        minWidth: 30,
        minHeight: 30,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '0 4px'
      }
    },

    '& .react-calendar__navigation__label': {
      fontWeight: 600,
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    },

    '& .react-calendar__navigation__label__labelText': {
      fontFamily: defaultThemeVariables.fontFamily,
      fontSize: 12,
      textTransform: 'capitalize'
    },

    // week and days container
    '& .react-calendar__month-view': {
      padding: '4px 8px 8px 8px'
    },

    // week
    '& .react-calendar__month-view__weekdays': {
      marginBottom: 2
    },

    '& .react-calendar__month-view__weekdays__weekday': {
      fontSize: 11,
      padding: 0,
      color: 'rgb(84, 110, 122)',
      fontWeight: 600,

      '& abbr': {
        textDecoration: 'none'
      }
    },

    // days
    '& .react-calendar__tile': {
      borderRadius: 4,
      color: '#373737',
      transition: '0.15s background linear',
      padding: '7px 4px',

      '& abbr': {
        fontFamily: defaultThemeVariables.fontFamily,
        lineHeight: 1.2,
        fontSize: 13
      }
    },

    // weekend
    '& .react-calendar__month-view__days__day--weekend': {
      color: theme.palette.error.light
    },

    // days of other months
    '& .react-calendar__month-view__days__day--neighboringMonth': {
      color: '#B0BEC5'
    },

    // today
    '& .react-calendar__tile--now': {
      background: '#e6efff',
      borderRadius: 4,

      '&:hover': {
        background: theme.palette.primary.light,
        color: theme.palette.primary.contrastText
      }
    },

    // day selected
    '& .react-calendar__tile--active': {
      background: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
      transition: '0.15s linear',

      '&:hover': {
        background: theme.palette.primary.dark
      }
    },

    // view months
    '& .react-calendar__year-view__months': {
      padding: '4px 8px 8px 8px'
    },

    '& .react-calendar__year-view__months__month': {
      minHeight: 50
    },

    '& .react-calendar__tile--hasActive': {
      background: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,

      '&:hover': {
        background: theme.palette.primary.dark
      }
    },

    // decade view
    '& .react-calendar__decade-view': {
      padding: '4px 8px 8px 8px'
    },

    '& .react-calendar__decade-view__years__year': {
      minHeight: 50
    },

    // range years
    '& .react-calendar__century-view': {
      padding: '4px 8px 8px 8px'
    },

    '& .react-calendar__century-view__decades__decade': {
      fontSize: 11,
      minHeight: 50
    }
  }),

  // input control
  input: (props: IStyleProps) => ({
    width: props.width ?? '100%',
    position: 'relative',
    zIndex: 2
  }),

  // icon in input
  icon: {
    color: 'currentcolor'
  }
}));

export default useStyles;
