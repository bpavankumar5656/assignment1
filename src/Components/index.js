import './index.css'

const HistoryList = props => {
  const {userDetails, deleteUser} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = userDetails
  const onDelete = () => {
    deleteUser(id)
  }

  return (
    <li className="history-item">
      <div className="time">
        <p>{timeAccessed}</p>
      </div>
      <div className="domian-container">
        <img className="icon" src={logoUrl} alt="domain logo" />
        <p>{title}</p>
        <p className="url">{domainUrl}</p>
      </div>
      <div>
        <button
          onClick={onDelete}
          testid="delete"
          type="button"
          className="button"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default HistoryList
