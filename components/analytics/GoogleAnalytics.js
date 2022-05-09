import Script from 'next/script'

import siteMetadata from '@/data/siteMetadata'

const GAScript = () => {
  return (
    <><script async src="https://www.googletagmanager.com/gtag/js?id=G-6DCSDW1PQS"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
    
      gtag('config', 'G-6DCSDW1PQS');
    </script>
    </>
  )
}

export default GAScript

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const logEvent = (action, category, label, value) => {
  window.gtag?.('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  })
}
