function Subscribe() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 lg:p-12 border border-gray-100">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
          Subscribe to Our Newsletter
        </h1>

        <div className="prose max-w-none mb-8">
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
            Stay updated with new quizzes, assessments, and educational content.
            Subscribe to our newsletter and never miss out!
          </p>
        </div>

        <div id="mc_embed_shell" className="flex justify-center">
          <link href="//cdn-images.mailchimp.com/embedcode/classic-061523.css" rel="stylesheet" type="text/css" />
          <style type="text/css" dangerouslySetInnerHTML={{__html: `
            #mc_embed_signup{background:#fff; clear:left; font:14px Helvetica,Arial,sans-serif; width: 600px; max-width: 100%;}
          `}} />
          <div id="mc_embed_signup">
            <form
              action="https://gmail.us6.list-manage.com/subscribe/post?u=06fb62301156961b3b673e62e&amp;id=4024d8117c&amp;f_id=00cfc2e1f0"
              method="post"
              id="mc-embedded-subscribe-form"
              name="mc-embedded-subscribe-form"
              className="validate"
              target="_blank"
            >
              <div id="mc_embed_signup_scroll">
                <h2>Subscribe</h2>
                <div className="indicates-required">
                  <span className="asterisk">*</span> indicates required
                </div>
                <div className="mc-field-group">
                  <label htmlFor="mce-EMAIL">
                    Email Address <span className="asterisk">*</span>
                  </label>
                  <input
                    type="email"
                    name="EMAIL"
                    className="required email"
                    id="mce-EMAIL"
                    required
                    defaultValue=""
                  />
                </div>
                <div id="mce-responses" className="clear">
                  <div className="response" id="mce-error-response" style={{display: 'none'}}></div>
                  <div className="response" id="mce-success-response" style={{display: 'none'}}></div>
                </div>
                <div aria-hidden="true" style={{position: 'absolute', left: '-5000px'}}>
                  <input
                    type="text"
                    name="b_06fb62301156961b3b673e62e_4024d8117c"
                    tabIndex="-1"
                    defaultValue=""
                  />
                </div>
                <div className="clear">
                  <input
                    type="submit"
                    name="subscribe"
                    id="mc-embedded-subscribe"
                    className="button"
                    value="Subscribe"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Subscribe