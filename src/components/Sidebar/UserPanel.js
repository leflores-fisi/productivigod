import './styles/UserPanel.scss'

function UserPanel({ user }) {

  return (
    <div className='app-sidebar__panel'>
      <div className='user'>
        <div className='user__name'>{user.name}</div>
        <div className='user__status'>Status: <span>{user.status}</span></div>
      </div>
      <div className='divisor'></div>
    </div>
  )
}
export default UserPanel