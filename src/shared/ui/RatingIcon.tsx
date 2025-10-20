import React from 'react'

interface RatingIconProps {
  rating: 'G' | 'PG' | 'PG-13' | 'R' | 'NC-17'
  className?: string
}

const RatingIcon: React.FC<RatingIconProps> = ({ rating, className }) => {
  switch (rating) {
    case 'G':
      return (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 50 50'
          className={className}
        >
          <circle cx='25' cy='25' r='25' fill='green' />
          <text
            x='50%'
            y='50%'
            textAnchor='middle'
            dy='.35em'
            fill='white'
            fontSize='20'
          >
            G
          </text>
        </svg>
      )
    case 'PG':
      return (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 50 50'
          className={className}
        >
          <circle cx='25' cy='25' r='25' fill='blue' />
          <text
            x='50%'
            y='50%'
            textAnchor='middle'
            dy='.35em'
            fill='white'
            fontSize='20'
          >
            PG
          </text>
        </svg>
      )
    case 'PG-13':
      return (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 50 50'
          className={className}
        >
          <circle cx='25' cy='25' r='25' fill='orange' />
          <text
            x='50%'
            y='50%'
            textAnchor='middle'
            dy='.35em'
            fill='white'
            fontSize='16'
          >
            PG-13
          </text>
        </svg>
      )
    case 'R':
      return (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 71 63'
          className={className}
        >
          <path
            fill='currentColor'
            fillRule='evenodd'
            d='M.24.909h70.555V62.24H.24V.91Zm3.064 58.19h64.42V3.99H3.303V59.1Zm8.653-7.087.06-4.811c6.197.446 6.108-1.366 6.031-2.946-.008-.172-.016-.341-.016-.505V18.169c0-.197.003-.383.006-.558.036-2.123.045-2.649-6.021-2.649l-.06-4.808c1.462 0 4.274-.014 7.48-.03 6.217-.032 13.916-.071 16.143-.028.52.01 1.04.017 1.558.025 9.465.142 18.017.27 18.073 10.206.065 5.98-4.355 9.678-11.412 10.544l11.353 13.372c1.837 2.158 2.7 2.653 7.97 3.145v4.625s-2.021-.123-18.402-.123l-.543-.902c-1.479-2.46-2.772-4.61-4.304-6.377l-8.894-10.352v9.492c0 .175-.005.346-.01.513-.048 1.882-.082 3.17 6.512 3.003l.123 4.746c-4.848-.25-21.231-.25-25.647 0Zm20.012-36.758c-.32.03-.648.059-.99.082v12.943c6.068-.183 10.672-1.79 10.61-7.273h.062c0-4.007-3.068-5.859-7.913-5.859-.598 0-1.171.052-1.769.107Z'
            clipRule='evenodd'
          />
        </svg>
      )
    case 'NC-17':
      return (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 50 50'
          className={className}
        >
          <circle cx='25' cy='25' r='25' fill='red' />
          <text
            x='50%'
            y='50%'
            textAnchor='middle'
            dy='.35em'
            fill='white'
            fontSize='16'
          >
            NC-17
          </text>
        </svg>
      )
    default:
      return null
  }
}

export default RatingIcon
