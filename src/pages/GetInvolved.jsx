import { useEffect } from 'react'

function GetInvolved() {

  useEffect(() => {
    // Load Typeform embed script
    const script = document.createElement('script')
    script.src = '//embed.typeform.com/next/embed.js'
    script.async = true
    document.body.appendChild(script)

    return () => {
      // Cleanup script on unmount
      if (document.body.contains(script)) {
        document.body.removeChild(script)
      }
    }
  }, [])
  
  const typeform_id = "01K73FDDP861BBBDJ24ADRTVGK";

  const handleBack = () => {
    window.location.href = '/'
  }

  return (
    <div className="w-full h-full get-involved" style={{ minHeight: 'calc(100vh - 64px)' }}>
      <div
        data-tf-live={typeform_id}
        style={{ width: '100%', height: '100%', minHeight: 'calc(100vh - 64px)' }}
      ></div>
    </div>
  );
}

export default GetInvolved
