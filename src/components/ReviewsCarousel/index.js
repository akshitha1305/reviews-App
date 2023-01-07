// Write your code here
import './index.css'
import {Component} from 'react'

const reviewsList = [
  {
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/wade-warren-img.png',
    username: 'Wade Warren',
    companyName: 'Rang',
    description:
      'The most important thing I learnt is that nothing is a failure, but what we learn from that is a rich and rewarding experience.',
  },
  {
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/adrian-williams-img.png',
    username: 'Adrian Williams',
    companyName: 'WheelO',
    description:
      'Coming to Startup School is the best thing that has happened to me. I wish every startup in the country should get this opportunity.',
  },
  {
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/sherry-jhonson-img.png',
    username: 'Sherry Johnson',
    companyName: 'MedX',
    description:
      'I am glad to have such experienced mentors guiding us in every step through out the 4 weeks. I have improved personally and developed many interpersonal skills.',
  },
  {
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/ronald-jones-img.png',
    username: 'Ronald Jones',
    companyName: 'Infinos Tech',
    description:
      'I am really loving the way how mentors are taking care of us, the way they are explaining big theories with lots of case studies and innovative methods.',
  },
]

class ReviewsCarousel extends Component {
  state = {count: 0, updatedReviewsList: reviewsList[0]}

  onClickRightArrow = () => {
    const {count} = this.state

    if (count >= reviewsList.length - 1) {
      this.setState({
        updatedReviewsList: reviewsList[reviewsList.length - 1],
      })
      this.setState({
        count: reviewsList.length - 1,
      })
    } else {
      this.setState(prevState => ({count: prevState.count + 1}))
      this.setState({
        updatedReviewsList: reviewsList[count + 1],
      })
    }
  }

  onClickLeftArrow = () => {
    const {count} = this.state

    if (count <= 0) {
      this.setState({count: 0})
      this.setState({updatedReviewsList: reviewsList[0]})
    } else {
      this.setState(prevState => ({count: prevState.count - 1}))
      this.setState({
        updatedReviewsList: reviewsList[count - 1],
      })
    }
  }

  render() {
    const {updatedReviewsList, count} = this.state
    console.log(updatedReviewsList)
    console.log(count)
    const {imgUrl, username, companyName, description} = updatedReviewsList
    return (
      <div className="bg-container">
        <h1 className="heading">Reviews</h1>
        <img src={imgUrl} alt="username" className="img" />
        <div className="arrow-container">
          <button
            onClick={this.onClickLeftArrow}
            className="button"
            data-testid="leftArrow"
            type="submit"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
              className="arrow-img"
            />
          </button>
          <p className="username">{username}</p>
          <button
            onClick={this.onClickRightArrow}
            className="button"
            data-testid="leftArrow"
            type="submit"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
              className="arrow-img"
            />
          </button>
        </div>
        <p className="company-name">{companyName}</p>
        <p className="description">{description}</p>
      </div>
    )
  }
}

export default ReviewsCarousel
