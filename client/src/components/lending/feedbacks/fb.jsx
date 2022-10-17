import { useSelector } from "react-redux"

export const FB = () => {
  const feedbacksArray = useSelector(state => state.feedbacks.feedbacks)
  // console.log(feedbacksArray)

  const check = feedbacksArray
    ? feedbacksArray.map((f) => <div>{f.id} {f.author} {f.description}</div>)
    : ('loading...')

  return (
    <>
      {check}
    </>
  )
}

