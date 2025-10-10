import { useState } from 'react'

function Quiz({ assessment, onBack }) {
  const [stage, setStage] = useState('intro') // 'intro', 'quiz', 'answered', 'results'
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [answers, setAnswers] = useState([])
  const [currentAnswer, setCurrentAnswer] = useState(null)

  const handleStart = () => {
    setStage('quiz')
  }

  const handleAnswer = (answerIndex) => {
    setCurrentAnswer(answerIndex)
    setStage('answered')
  }

  const handleContinue = () => {
    const newAnswers = [...answers, currentAnswer]
    setAnswers(newAnswers)
    setCurrentAnswer(null)

    // Check if this was the last question
    if (currentQuestionIndex + 1 >= assessment.questions.length) {
      setStage('results')
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
      setStage('quiz')
    }
  }

  const calculateScore = () => {
    let correct = 0
    answers.forEach((answer, index) => {
      if (answer === assessment.questions[index].answer_index) {
        correct++
      }
    })
    return correct
  }

  const resetQuiz = () => {
    setStage('intro')
    setCurrentQuestionIndex(0)
    setAnswers([])
    setCurrentAnswer(null)
  }

  // Intro stage
  if (stage === 'intro') {
    return (
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
          {assessment.image && (
            <div className="w-full h-64 overflow-hidden">
              <img
                src={assessment.image}
                alt={assessment.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          <div className="p-6 sm:p-8 lg:p-10">
            <button
              onClick={onBack}
              className="mb-6 text-blue-500 hover:text-blue-600 flex items-center gap-2 transition-colors font-medium group"
            >
              <svg className="w-5 h-5 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to assessments
            </button>

            <div className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-gray-800">
                {assessment.title}
              </h2>

              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full text-blue-700 text-sm sm:text-base font-medium">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                {assessment.questions.length} {assessment.questions.length === 1 ? 'Question' : 'Questions'}
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-6 mb-8 border border-blue-100">
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                {assessment.intro_markdown}
              </p>
            </div>

            <button
              onClick={handleStart}
              className="w-full bg-[#4e7dee] hover:bg-[#3d69d1] text-white font-bold py-4 px-8 rounded-xl transition-all duration-200 text-base sm:text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Start Assessment
            </button>
          </div>
        </div>
      </div>
    )
  }

  // Quiz stage
  if (stage === 'quiz') {
    const currentQuestion = assessment.questions[currentQuestionIndex]

    return (
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 lg:p-10 border border-gray-100">
          <div className="mb-8">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 mb-6">
              <span className="text-sm sm:text-base font-semibold text-gray-700 bg-gray-100 px-4 py-2 rounded-full inline-flex items-center gap-2 w-fit">
                <span className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs">
                  {currentQuestionIndex + 1}
                </span>
                of {assessment.questions.length}
              </span>
              <div className="w-full sm:max-w-xs bg-gray-200 rounded-full h-2.5">
                <div
                  className="bg-[#4e7dee] h-2.5 rounded-full transition-all duration-500 ease-out"
                  style={{
                    width: `${((currentQuestionIndex + 1) / assessment.questions.length) * 100}%`
                  }}
                />
              </div>
            </div>

            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 text-gray-800 leading-tight">
              {currentQuestion.question}
            </h3>

            {currentQuestion.question_description && (
              <div
                className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8 italic leading-relaxed"
                dangerouslySetInnerHTML={{ __html: currentQuestion.question_description }}
              />
            )}

            <div className="space-y-3 sm:space-y-4">
              {currentQuestion.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(index)}
                  className="group w-full text-left p-4 sm:p-5 border-2 border-gray-200 rounded-xl hover:border-blue-500 hover:bg-blue-50 transition-all duration-200 hover:shadow-md active:scale-98"
                >
                  <div className="flex items-start gap-3 sm:gap-4">
                    <span className="flex-shrink-0 w-8 h-8 sm:w-9 sm:h-9 bg-gray-100 group-hover:bg-blue-500 group-hover:text-white rounded-lg flex items-center justify-center font-bold text-gray-600 transition-colors text-sm sm:text-base">
                      {String.fromCharCode(65 + index)}
                    </span>
                    <span className="text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed pt-1">
                      {option}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Answered stage - show answer description
  if (stage === 'answered') {
    const currentQuestion = assessment.questions[currentQuestionIndex]

    return (
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 lg:p-10 border border-gray-100">
          <div className="mb-8">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 mb-6">
              <span className="text-sm sm:text-base font-semibold text-gray-700 bg-gray-100 px-4 py-2 rounded-full inline-flex items-center gap-2 w-fit">
                <span className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs">
                  {currentQuestionIndex + 1}
                </span>
                of {assessment.questions.length}
              </span>
              <div className="w-full sm:max-w-xs bg-gray-200 rounded-full h-2.5">
                <div
                  className="bg-[#4e7dee] h-2.5 rounded-full transition-all duration-500 ease-out"
                  style={{
                    width: `${((currentQuestionIndex + 1) / assessment.questions.length) * 100}%`
                  }}
                />
              </div>
            </div>

            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 text-gray-800 leading-tight">
              {currentQuestion.question}
            </h3>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 sm:p-6 mb-6">
              <div className="flex items-start gap-3 mb-3">
                <div className="flex-shrink-0 w-8 h-8 sm:w-9 sm:h-9 bg-blue-500 text-white rounded-lg flex items-center justify-center font-bold text-sm sm:text-base">
                  {String.fromCharCode(65 + currentAnswer)}
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-gray-800 text-sm sm:text-base">Your answer:</p>
                  <p className="text-gray-700 text-sm sm:text-base">{currentQuestion.options[currentAnswer]}</p>
                </div>
              </div>
            </div>

            {currentQuestion.answer_description && (
              <div
                className="bg-gradient-to-br from-purple-50 to-blue-50 border border-purple-200 rounded-xl p-5 sm:p-6 mb-6 text-sm sm:text-base text-gray-700 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: currentQuestion.answer_description }}
              />
            )}

            <button
              onClick={handleContinue}
              className="w-full bg-[#4e7dee] hover:bg-[#3d69d1] text-white font-bold py-4 px-8 rounded-xl transition-all duration-200 text-base sm:text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    )
  }

  // Results stage
  if (stage === 'results') {
    const score = calculateScore()
    const percentage = Math.round((score / assessment.questions.length) * 100)

    return (
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 lg:p-10 border border-gray-100">
          <div className="text-center mb-8 sm:mb-10">
            <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-green-100 rounded-full mb-4">
              <svg className="w-10 h-10 sm:w-12 sm:h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-gray-800">
              Quiz Complete!
            </h2>
            <div className="inline-block bg-[#4e7dee] rounded-2xl p-6 sm:p-8 mb-4 shadow-lg">
              <div className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-2">
                {percentage}%
              </div>
              <p className="text-base sm:text-lg lg:text-xl text-white/90">
                {score} out of {assessment.questions.length} correct
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-5 sm:p-6 lg:p-8 mb-6 sm:mb-8 border border-gray-200">
            <div className="flex items-center gap-2 mb-4 sm:mb-6">
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
              <h3 className="font-bold text-lg sm:text-xl text-gray-800">Answer Review</h3>
            </div>
            <div className="space-y-3 sm:space-y-4">
              {assessment.questions.map((question, index) => {
                const userAnswer = answers[index]
                const isCorrect = userAnswer === question.answer_index

                return (
                  <div
                    key={index}
                    className="bg-white rounded-lg p-4 sm:p-5 border-l-4 shadow-sm"
                    style={{
                      borderColor: isCorrect ? '#10b981' : '#ef4444'
                    }}
                  >
                    <div className="flex items-start gap-3 mb-3">
                      <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center ${isCorrect ? 'bg-green-100' : 'bg-red-100'}`}>
                        {isCorrect ? (
                          <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        ) : (
                          <svg className="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        )}
                      </div>
                      <p className="font-semibold text-gray-800 text-sm sm:text-base flex-1 leading-relaxed">
                        {index + 1}. {question.question}
                      </p>
                    </div>
                    <div className="ml-9 space-y-1">
                      <p className="text-xs sm:text-sm text-gray-600">
                        Your answer: <span className={`font-medium ${isCorrect ? 'text-green-600' : 'text-red-600'}`}>
                          {question.options[userAnswer]}
                        </span>
                      </p>
                      {!isCorrect && (
                        <p className="text-xs sm:text-sm text-gray-600">
                          Correct answer: <span className="font-medium text-green-600">
                            {question.options[question.answer_index]}
                          </span>
                        </p>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="bg-blue-50 rounded-xl p-5 sm:p-6 mb-6 sm:mb-8 border border-blue-100">
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              {assessment.outro_markdown}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <button
              onClick={resetQuiz}
              className="flex-1 bg-[#4e7dee] hover:bg-[#3d69d1] text-white font-bold py-3 sm:py-4 px-6 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg text-sm sm:text-base"
            >
              Retake Quiz
            </button>
            <button
              onClick={onBack}
              className="flex-1 bg-gray-500 hover:bg-gray-600 text-white font-bold py-3 sm:py-4 px-6 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg text-sm sm:text-base"
            >
              Back to Assessments
            </button>
          </div>
        </div>
      </div>
    )
  }

  return null
}

export default Quiz