import styled from '@emotion/styled';

export const StatisticsBox = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  flexWrap: 'wrap',

  [`@media screen and (min-width: 320px)`]: {
    width: 'fit-content',
  },

  [`@media screen and (min-width: 1280px)`]: {
    width: '100%',
    margin: '30px 0',
}
})

export const StatisticsHome = styled.div({
    margin: '0 0 50px 0',
    padding: '35px 77px 30px 40px',
    width: '810px',
    background: '#FFFFFF',
    height: 'auto',
    boxShadow: '0px 1px 3px rgb(9 30 63 / 25%)',

    [`@media screen and (min-width: 320px)`]: {
      width: '100%',
      padding: '20px',
    },

    [`@media screen and (min-width: 1280px)`]: {
      width: '810px',
    },
  })

  export const BooksDay = styled.div({
    margin: '0 0 20px 5px',
    display: 'flex',
    alignItems: 'center',
  })

  export const TextStats = styled.span({
    fontWeight: '500',
    fontSize: '12px',
    lineHeight: '15px',
    textTransform: 'uppercase',
    color: '#242A37',

    [`@media screen and (min-width: 320px)`]: {
      lineHeight: '15px',
    },
  })

  export const Span = styled.span({
    margin: '0 3px',
  })

  export const NumberDay = styled.span({
    fontWeight: '600',
    fontSize: '12px',
    textAlign: 'center',
    textTransform: 'uppercase',
    color: '#242A37',
    background: '#F5F7FA',
    display: 'block',
    margin: '0 10px',
    padding: '5px',
  })

