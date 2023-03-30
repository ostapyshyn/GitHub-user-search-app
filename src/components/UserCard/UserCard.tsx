import styles from './UserCard.module.scss'

const UserCard = () => {
  return (
    <section className={styles.userCard}>
      <div>
        <div className={styles.registration}>
          <p className={styles.name}>The Octocat</p>
          <p className={styles.joined}>Joined 25 Jan 2011</p>
        </div>
        <p>@octocat</p>

        <p>This profile has no bio</p>

        <p>Repos</p>
        <p>Followers</p>
        <p>Following</p>
        <p>Joined</p>
      </div>
    </section>
  )
}

export default UserCard
