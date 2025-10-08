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

        <div id="mc_embed_shell">
          <style type="text/css" dangerouslySetInnerHTML={{__html: `
            #mc_embed_signup {
              background: transparent;
              clear: left;
              font-family: 'Nunito', sans-serif;
              width: 100%;
            }
            #mc_embed_signup .indicates-required {
              text-align: right;
              font-size: 14px;
              margin-bottom: 16px;
              color: #6b7280;
            }
            #mc_embed_signup .asterisk {
              color: #ef4444;
              font-weight: bold;
            }
            #mc_embed_signup .mc-field-group {
              margin-bottom: 24px;
            }
            #mc_embed_signup label {
              display: block;
              font-size: 16px;
              font-weight: 600;
              color: #1f2937;
              margin-bottom: 8px;
            }
            #mc_embed_signup input[type="email"] {
              width: 100%;
              padding: 12px 16px;
              font-size: 16px;
              font-family: 'Nunito', sans-serif;
              border: 2px solid #e5e7eb;
              border-radius: 12px;
              transition: all 0.2s;
              outline: none;
            }
            #mc_embed_signup input[type="email"]:focus {
              border-color: #3b82f6;
              box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
            }
            #mc_embed_signup .button {
              width: 100%;
              background: linear-gradient(to right, #3b82f6, #8b5cf6);
              color: white;
              font-weight: bold;
              padding: 14px 32px;
              font-size: 18px;
              border: none;
              border-radius: 12px;
              cursor: pointer;
              transition: all 0.2s;
              box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
              font-family: 'Nunito', sans-serif;
            }
            #mc_embed_signup .button:hover {
              background: linear-gradient(to right, #2563eb, #7c3aed);
              box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
              transform: translateY(-2px);
            }
            #mc_embed_signup .response {
              padding: 12px;
              margin-top: 16px;
              border-radius: 8px;
              font-size: 14px;
            }
            #mc_embed_signup #mce-error-response {
              background-color: #fef2f2;
              color: #991b1b;
              border: 1px solid #fecaca;
            }
            #mc_embed_signup #mce-success-response {
              background-color: #f0fdf4;
              color: #166534;
              border: 1px solid #bbf7d0;
            }
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