import styled from '@emotion/styled';

export const HomeRes = styled.div({
    display: 'flex',
    flexDirection: 'column',
    width: '290px',
    background: '#FFFFFF',
    padding: '24px',
    boxShadow: '0px 2px 3px rgba(9, 30, 63, 0.1)',
    marginTop: '40px',
    height: 'max-content',

    [`@media screen and (min-width: 320px)`]: {
        width: '100%',
        margin: '0',
      },

      [`@media screen and (min-width: 1280px)`]: {
        width: '290px',
      },
  })

export const Result = styled.span({
    fontWeight: '600',
    fontSize: '12px',
    lineHeight: '15px',
    textAlign: 'center',
    textTransform: 'uppercase',
    paddingBottom: '12px',
    display: 'block',
  })

export const TwoBox = styled.div({
    display: 'flex',
    flexDirection: 'initial',
    justifyContent: 'space-between',
    width: '100%',

    [`@media screen and (min-width: 768px)`]: {
      justifyContent: 'initial',
  },
  })

export const ResultBox = styled.div({
  display: 'flex',
  flexDirection: 'column',
    [`@media screen and (min-width: 768px)`]: {
        flexDirection: 'initial',
        alignItems: 'center',
        justifyContent: 'center', 
        maxWidth: '520px',  
    },


    [`@media screen and (min-width: 1280px)`]: {
      display: 'flex',
      flexDirection: 'column',
  },
  })

export const Text = styled.div({
    display: 'flex',
    flexDirection: 'column',

    [`@media screen and (min-width: 320px)`]: {
      maxWidth: '100%',
    }
  })

  export const DataText = styled.label({
    display: 'flex',
    flexDirection: 'column',
    fontWeight: '500',
    fontSize: '11px',
    lineHeight: '13px',
    color: '#898F9F',
  })

export const Button = styled.button({
    fontWeight: '600',
    fontSize: '16px',
    lineHeight: '20px',
    background: '#FF6B08',
    textAlign: 'center',
    color: '#FFFFFF',
    padding: '10px 45px',
    border: 'none',
    cursor: 'pointer',
    transition: '0.3s',

    [`:hover`]: {
        backgroundColor: '#e45e04',
      },

      [`@media screen and (min-width: 320px)`]: {
        margin: '30px 0',
    },

      [`@media screen and (min-width: 768px)`]: {
        margin: '33px 0 15px 30px',
        width: '100%',
        padding: '10px 25px',
    },

    [`@media screen and (min-width: 1280px)`]: {
      margin: '30px 0',
      width: '100%',
      padding: '10px 45px',
  }
  })

  export const Input = styled.input({
    marginTop: '5px',
    background: '#F6F7FB',
    border: '1px solid #A6ABB9',
    padding: '12px',

    [`@media screen and (min-width: 320px)`]: {
      maxWidth: '100%',
    },

    [`@media screen and (min-width: 768px)`]: {
      width: '110px',
      marginLeft: '20px',
    },
    [`@media screen and (min-width: 1280px)`]: {
      maxWidth: '110px',
    }
  })

  export const ResultStatsBox = styled.span({
    fontWeight: '700',
    fontSize: '12px',
    lineHeight: '15px',
    textAlign: 'center',
    textTransform: 'uppercase',
  })

  export const WidthPlan = styled.div({
    [`@media screen and (min-width: 768px)`]: {
      maxWidth: '520px',
      margin: 'auto',
    }
  })

  export const SkillPage = styled.div({
    [`@media screen and (min-width: 768px)`]: {
      marginLeft: '20px',
    }
  })