import styled from '@emotion/styled';

export const Title = styled.span({
    overflow: 'hidden',
    textAlign: 'center',
  })

  export const TitleSpan = styled.span({
    display: 'inline-block',
    verticalAlign: 'middle',
    textTransform: 'uppercase',
    fontWeight: '700',
    fontSize: '12px',
    lineHeight: '15px',
    paddingBottom: '4px',

    [`@media screen and (min-width: 1280px)`]: {
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center',
    },

    // &:before,
    // &:after {
    //     content: "",
    //     display: 'inline-block',
    //     verticalAlign: 'middle',
    //     width: '100%',
    //     height: '1px',
    //     backgroundColor: '#E0E5EB',
    //     position: 'relative',
    // },
    // &:before {
    //     marginLeft: '-100%',
    //     left: '-3px',
    // },
    // &:after {
    //     margin-right: '-100%',
    //     right: '-3px',
    // },
  })

  export const BlockSTats = styled.span({
    display: 'flex',
    justifyContent: 'space-between',
    paddingBottom: '4px',
 })

  export const TimeData = styled.span({
    fontWeight: '400',
    fontSize: '14px',
    lineHeight: '17px',
  })

  export const Time = styled.span({
    color: '#898F9F',
    fontWeight: '400',
    fontSize: '14px',
    lineHeight: '17px',
  })

  export const NumberPage = styled.span({
    color: '#242A37',
  })

  export const PositionMob = styled.div({
    [`@media screen and (min-width: 768px)`]: {
        maxWidth:'290px',
    },

    [`@media screen and (min-width: 1280px)`]: {
        maxWidth:'initial',
    },
  })